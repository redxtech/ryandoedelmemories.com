<template>
  <section id="home">
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">Ryan Doedel</h1>
          <h2 class="subtitle is-3 ">(July 21, 2001 - October 18, 2018)</h2>
          <h2 class="subtitle is-2">
            This is a place where you can submit a picture and/or a
            memory of Ryan to be shown in the
            <router-link to="gallery">gallery</router-link>
            and then given to his
            family.
          </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-one-fifth"/>
        <div class="column">
          <figure class="image">
            <picture>
              <source srcset="../assets/ryan.webp" type="image/webp">
              <source srcset="../assets/ryan.jpg" type="image/jpeg">
              <img src="../assets/ryan.jpg" alt="Ryan playing football">
            </picture>
          </figure>
          <div class="has-text-justified">
            <p class="content">
              Ryan was a true friend and was loved by all who knew him. His kind heart and
              generous spirit shines on in our memories.
            </p>
            <p class="content">
              Ryan had a love of sports, in particular hockey and football. He played hockey with Trails West and the
              Recreation Hockey Community leagues. Ryan played football, beginning with the Wildcats and, more recently,
              with the Ernest Manning High School Griffins. Ryan's desire to excel was evident in his sports pursuits
              and
              he shone through not only as hard-working and dedicated, but a true team player. Not only a sportsman,
              Ryan
              was a talented music producer.
            </p>
            <p class="content">
              Ryan died in a tragic car accident and his good friend, Dante Bravi, was seriously injured.
            </p>
          </div>
        </div>
        <div class="column is-one-fifth"/>
      </div>
    </div>
    <div id="bottom-container" class="container">
      <div class="columns has-text-centered">
        <div class="column is-one-fifth"></div>
        <div class="column">
          <h1 class="title is-4">here's a link to Ryan's instagram page and to the gofundme page for each of them</h1>
        </div>
        <div class="column is-one-fifth"></div>
      </div>
      <div id="nav-bottom" class="nav has-text-centered">
        <a href="https://www.instagram.com/r.doedel/" target="_blank">instagram</a>
        |
        <a href="https://www.gofundme.com/in-memory-of-ryan-doedel" target="_blank">ryan</a>
        |
        <a href="https://www.gofundme.com/dante-bravi-family" target="_blank">dante</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped lang="scss">
  a {
    color: #fd6a02;
  }

  #bottom-container {
    padding-top: 2rem;
  }

  #nav-bottom {
    padding-top: 0;
  }
</style>
