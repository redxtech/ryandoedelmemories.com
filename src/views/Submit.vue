<template>
  <section id="submit" class="section">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">submit something.</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column"/>
        <div class="column is-three-fifths">
          <div v-if="notifications.success" class="notification is-success">
            <button class="delete" @click="closeNotification('success')"></button>
            Success! Your submission has been recorded.
          </div>
          <div v-if="notifications.empty" class="notification is-danger">
            <button class="delete" @click="closeNotification('empty')"></button>
            Failure! You must at least fill out the story or upload some photos.
          </div>
          <div v-if="notifications.failure" class="notification is-danger">
            <button class="delete" @click="closeNotification('failure')"></button>
            Failure! There was an error recording your submission.
          </div>
          <div class="form">
            <vue-form :state="formState" @submit.prevent="onSubmit">
              <div class="field">
                <label class="label">name - you can submit something anonymously by leaving this blank.</label>
                <div class="control">
                  <input class="input" type="text" placeholder="name" v-model="form.name">
                </div>
              </div>

              <validate tag="label">
                <div class="field">
                  <label class="label">email - feel free to leave this blank - it is only used by us if we love
                    your picture(s) and would like to ask you if you have more.</label>
                  <div class="control">
                    <input :class="{input: true, 'is-danger': validEmail}"
                           type="email"
                           name="email"
                           placeholder="email"
                           v-model="form.email">
                  </div>
                </div>
              </validate>

              <div class="field">
                <label class="label">story or memory.</label>
                <div class="control">
                  <textarea class="textarea" placeholder="story or memory" v-model="form.story"></textarea>
                </div>
              </div>

              <div class="field">
                <div class="file">
                  <label class="file-label">
                    <input id="pictures" class="file-input" type="file" accept="image/*" multiple
                           @change="uploadPictures">
                    <span class="file-cta">
                    <span class="file-icon"><i class="fas fa-upload"></i></span>
                    <span class="file-label">choose a file</span>
                  </span>
                  </label>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button v-if="imagesReady" class="button is-link" type="submit">submit</button>
                  <button v-else class="button is-link is-loading">submit</button>
                </div>
              </div>
            </vue-form>
            <pre>{{ form }}</pre>
          </div>
        </div>
        <div class="column"/>
      </div>
    </div>
  </section>
</template>

<script>
  import r2 from 'r2'
  import { upload } from '../assets/imgur'

  export default {
    name: 'Submit',
    data () {
      return {
        submitted: false,
        imagesReady: true,
        notifications: { success: false, empty: false, failure: false },
        form: {
          name: '',
          email: '',
          story: '',
          picture: '',
          images: []
        },
        formState: {}
      }
    },
    methods: {
      async onSubmit () {
        if (this.form.story.length === 0 && this.form.images.length === 0) {
          this.sendNotification('empty')
        } else {
          if (!this.formState.$invalid) {
            const req = await r2.post('http://localhost:8000/submit-form', {
              json: {
                name: this.form.name,
                email: this.form.email,
                story: this.form.story,
                images: this.form.images
              }
            })
            const resp = await req.response
            const json = await resp.json()
            this.sendNotification(json.status)
            console.log(json)
          }
        }
      },
      async sendNotification (type) {
        this.notifications[type] = true
        setTimeout(() => {
          this.closeNotification(type)
        }, 5000)
      },
      closeNotification (type) {
        this.notifications[type] = false
      },
      async uploadPictures (e) {
        this.imagesReady = false
        const uploaded = await upload(e.target.files)
        this.form.images = uploaded.map(item => {
          const { data } = item
          return {
            id: data.id,
            delete: data.deletehash,
            height: data.height,
            width: data.width
          }
        })
        this.imagesReady = true
      }
    },
    computed: {
      validEmail () {
        if (this.formState.hasOwnProperty('email')) {
          if (this.formState.email.hasOwnProperty('$invalid')) {
            return this.formState.email.$invalid
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
