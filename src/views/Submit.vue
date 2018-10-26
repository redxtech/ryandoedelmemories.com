<template>
  <section id="submit" class="section">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">submit something.</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column"/>
        <div class="column is-three-fifths">
          <div v-if="notifications.success" class="notification is-success">
            <button class="delete" @click="closeNotification('success')"></button>
            Success! Your submission has been recorded. View it in the
            <router-link to="gallery">gallery</router-link>
            .
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
                <label class="label">share a story or memory that will be displayed in the gallery:</label>
                <div class="control">
                  <textarea class="textarea" placeholder="story or memory" v-model="form.story"></textarea>
                </div>
              </div>

              <div class="field">
                <label class="label">
                  upload pictures that will be displayed in the gallery and shared with Ryan's family
                </label>
                <div class="file is-primary">
                  <label class="file-label">
                    <input id="pictures" class="file-input" type="file" accept="image/*" multiple
                           @change="uploadPictures">
                    <span class="file-cta">
                    <span class="file-icon"><i class="fas fa-upload"></i></span>
                    <span class="file-label">upload a picture</span>
                  </span>
                  </label>
                </div>
              </div>

              <div class="field">
                <label class="label">name - you can submit something anonymously by leaving this blank:</label>
                <div class="control">
                  <input class="input" type="text" placeholder="name" v-model="form.name">
                </div>
              </div>

              <div class="field">
                <validate>
                  <label class="label">
                    email - feel free to leave this blank - it is only for us to contact you if we need more details
                  </label>
                  <div class="control">
                    <input :class="{input: true, 'is-danger': validEmail}"
                           type="email"
                           name="email"
                           placeholder="email"
                           v-model="form.email">
                  </div>
                </validate>
              </div>

              <div class="field">
                <div class="control">
                  <button v-if="imagesReady" class="button is-link" type="submit">submit</button>
                  <button v-else class="button is-link is-loading">submit</button>
                </div>
              </div>
            </vue-form>
            <div class="top-padded">
              <h1 class="title is-3 has-text-centered">thank you for sharing your memories.</h1>
            </div>
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
            const req = await r2.post(`${process.env.VUE_APP_SERVER}/submit-form`, {
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
            link: data.link,
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
