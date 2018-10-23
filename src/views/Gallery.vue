<template>
  <section id="gallery">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 v-if="count === 1" class="title">there is currently {{ count }} memory stored here.</h1>
          <h1 v-else class="title">there are currently {{ count }} memories stored here.</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-one-fifth"/>
        <div class="column">
          <memory
            v-for="(memory, i) in memories"
            :key="`${memory.name}-${i}`"
            :name="memory.name"
            :email="memory.email"
            :story="memory.story"
            :images="memory.images"
          />
        </div>
        <div class="column is-one-fifth"/>
      </div>
    </div>
  </section>
</template>

<script>
  import r2 from 'r2'

  import memory from '../components/memory'

  export default {
    name: 'Gallery',
    data () {
      return {
        status: '',
        count: 0,
        memories: []
      }
    },
    components: {
      memory
    },
    async mounted () {
      try {
        const req = await r2.get(`${process.env.VUE_APP_SERVER}/fetch-gallery`)
        const resp = await req.response
        const json = await resp.json()
        const { status, count, memories } = json
        this.status = status
        this.count = count
        this.memories = memories
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>
