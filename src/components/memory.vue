<template>
  <div class="content">
    <h1 v-text="name"></h1>
    <h2 v-text="email"></h2>
    <p v-text="story"></p>
    <div v-if="hasImages">
      <template v-for="(image, i) in images">
        <figure v-if="i===0" :key="image.id" class="image">
          <img alt="image" :src="image.link" v-img="options">
        </figure>
        <img v-else :key="image.id" :src="image.link" alt="image" v-img="options" class="is-hidden"/>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Memory',
    props: {
      name: { required: false, default: 'anonymous' },
      email: { required: false, default: 'anonymous' },
      story: { required: false, default: 'no story' },
      images: { required: false, default: [] }
    },
    data () {
      return {
        options: {
          group: ''
        }
      }
    },
    created () {
      this.options.group = this.images.map(image => image.id).join('+')
    },
    computed: {
      hasImages () { return this.images.length !== 0 }
    }
  }
</script>

<style lang="scss">
  .fullscreen-v-img {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
</style>
