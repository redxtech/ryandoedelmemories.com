<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/submit">Submit</router-link>
      |
      <router-link to="/gallery">Gallery</router-link>
      |
      <a
        href="https://docs.google.com/spreadsheets/d/1xukxpF-tzJXwAELePu9TtQHo9mw935eEYWLiQhij_jk/edit?usp=sharing"
        target="_blank"
      >
        Food Donations
      </a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 2rem;

    a {
      padding: 0 0.5rem;
      font-weight: bold;
      text-decoration-line: none;
      color: #2c3e50;

      &:hover {
        text-decoration-line: underline;
      }

      &.router-link-exact-active {
        color: #fd6a02;
      }
    }
  }
</style>
