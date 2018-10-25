<template>
  <section id="home">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Ryan Doedel</h1>
          <h2 class="subtitle is-2 has-text-centered">
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
          <p class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada sagittis turpis sit amet
            tincidunt. Nullam malesuada tristique malesuada. Quisque malesuada dignissim tortor, vel eleifend ipsum
            luctus sed. Quisque luctus leo efficitur finibus tincidunt. Suspendisse tincidunt ac orci vel venenatis.
            Donec luctus neque in odio volutpat accumsan. Nam tincidunt ultrices turpis, quis lacinia magna scelerisque
            sed. Nunc nibh libero, pharetra sed arcu et, eleifend gravida magna. In hac habitasse platea dictumst.
            Phasellus tincidunt a libero eu commodo. Nunc orci dui, pharetra id fringilla quis, porta in urna. In
            pulvinar pretium lobortis. Quisque quis risus libero. Pellentesque odio elit, sollicitudin eget convallis
            vitae, tristique dignissim metus.
          </p>
          <p>
            Donec bibendum sodales viverra. Proin a interdum lacus, sed maximus lacus. Aenean pretium lacus ante, eu
            fermentum velit sollicitudin vel. Duis gravida sollicitudin magna maximus rhoncus. Cras et nunc non purus
            faucibus fermentum id sed nulla. Duis sagittis turpis justo, eu aliquet erat ultrices id. Praesent tempor
            rhoncus nunc, id imperdiet odio ullamcorper sit amet. Praesent ullamcorper sit amet lorem id lobortis.
            Maecenas placerat tellus ut leo bibendum, quis lobortis leo blandit. Ut egestas lectus a porttitor auctor.
            Nullam urna mi, ultricies sit amet nulla tincidunt, aliquam dictum orci.
          </p>
          <p>
            Donec viverra sem vitae metus consectetur tincidunt. Vivamus eleifend egestas eros, vel sollicitudin eros
            feugiat at. Curabitur eget commodo libero. Mauris viverra nec ligula vel placerat. Sed at est sodales,
            ullamcorper magna non, maximus nibh. Cras quis enim ac ipsum feugiat rhoncus. Suspendisse at tellus eu
            libero aliquam porttitor eu id ante. Proin eros augue, pretium et dolor eleifend, rutrum venenatis dui.
            Praesent blandit est quis tempor volutpat.
          </p>
          <p>
            Maecenas pellentesque pretium dui, molestie posuere neque. Vivamus non ante id justo cursus sollicitudin.
            Maecenas mattis lorem a justo congue aliquet. Nullam sed augue sit amet nisl congue dignissim. Suspendisse
            venenatis gravida elit vel mollis. Aliquam neque sem, malesuada non sem id, euismod scelerisque nisl.
            Vestibulum eget nisl sed eros eleifend dictum non sed justo. Morbi imperdiet posuere euismod.
          </p>
        </div>
        <div class="column is-one-fifth"/>
      </div>
    </div>
    <div id="bottom-container" class="container">
      <div class="columns has-text-centered">
        <div class="column is-one-fifth"></div>
        <div class="column">
          <h1 class="title is-4">here's a link to his instagram page and to the gofundme page for each of them</h1>
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
