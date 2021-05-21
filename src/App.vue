<template>
  <div id="app">
    <Header/>
    <SideNav/>
    <main id="main-content">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import SideNav from '@/components/Layout/SideNav.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    SideNav
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
