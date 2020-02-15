<template>
  <section id="gallery">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered" v-text="countMessage"></h1>
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
        status: 'loading',
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
        this.memories = memories.reverse()
      } catch (e) {
        this.status = 'error'
        console.log(e)
      }
    },
    computed: {
      countMessage () {
        const c = this.count === 1
        switch (this.status) {
          case 'loading':
            return 'the gallery is loading...'
          case 'success':
            return `there ${c ? 'is' : 'are'} currently ${this.count} memor${c ? 'y' : 'ies'} stored here.`
          default:
            return 'there is currently an error with the gallery.'
        }
      }
    }
  }
</script>
