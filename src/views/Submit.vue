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
          <div class="form">
            <vue-form :state="formState" @submit.prevent="onSubmit">
              <div class="field">
                <label class="label">name - you can submit something anonymously by leaving this blank.</label>
                <div class="control">
                  <input class="input" type="text" placeholder="name" v-model.lazy="form.name">
                </div>
              </div>

              <div class="field">
                <label class="label">contact - feel free to leave this blank - it is only used by us if we love
                  your picture(s) and would like to ask you for more</label>
                <div class="control">
                  <input class="input" type="email" placeholder="email" v-model.lazy="form.email">
                </div>
              </div>

              <div class="field">
                <label class="label">story or memory.</label>
                <div class="control">
                  <textarea class="textarea" placeholder="story or memory" v-model="form.story"></textarea>
                </div>
              </div>

              <div class="field">
                <div class="file">
                  <label class="file-label">
                    <input id="pictures" class="file-input" type="file" multiple @change="uploadPictures">
                    <span class="file-cta">
                    <span class="file-icon"><i class="fas fa-upload"></i></span>
                    <span class="file-label">choose a file</span>
                  </span>
                  </label>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button class="button is-link" type="submit">submit</button>
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
  import { upload } from '../assets/imgur'

  export default {
    name: 'Submit',
    data () {
      return {
        images: [],
        form: {
          name: '',
          email: '',
          story: '',
          picture: ''
        },
        formState: {}
      }
    },
    methods: {
      onSubmit () {
        console.log('submitted.')
      },
      async uploadPictures (e) {
        const uploaded = await upload(e.target.files)
        const newValues = uploaded.map(item => {
          const { data } = item
          return {
            id: data.id,
            delete: data.deletehash,
            height: data.height,
            width: data.width
          }
        })
        console.log(newValues)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
