<template>
  <div class="home">
    <carousel/>
    <latest-news/>
    <how-we-help />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Home/Carousel.vue'
import LatestNews from '@/components/News/LatestNews.vue'
import HowWeHelp from '@/components/Home/HowWeHelp.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    LatestNews,
    HowWeHelp
  }
}
</script>
