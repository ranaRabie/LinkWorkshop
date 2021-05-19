<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Carousel/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Carousel
  }
}
</script>
