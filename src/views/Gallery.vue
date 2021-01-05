<template>
  <section id="gallery">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">there are currently {{ count }} memories stored here.</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-one-fifth" />
        <div class="column">
          <memory
            v-for="(memory, i) in memories"
            :key="`${memory.name}-${i}`"
            :name="memory.name"
            :story="memory.story"
            :images="memory.images"
          />
        </div>
        <div class="column is-one-fifth" />
      </div>
    </div>
  </section>
</template>

<script>
  import { status, count, memories as backwards } from '../assets/fetch-gallery.json'
  import memory from '../components/memory'

  const memories = backwards.reverse()

  export default {
    name: 'Gallery',
    data () {
      return {
        status,
        count,
        memories
      }
    },
    components: {
      memory
    }
  }
</script>
