<template>
  <div class="home">
    <Navigation/>
    <Jumbotron :randomMovie="randomMovie"/>
    <GenreCarousel/>
    <Reinsurance/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import GenreCarousel from '@/components/GenreCarousel.vue'
import Reinsurance from '@/components/Reinsurance.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Jumbotron,
    GenreCarousel,
    Reinsurance
  },
  computed:{
    randomMovie(){
      let movieList = this.$store.getters.getAllMovies
      return movieList[Math.floor(Math.random() * movieList.length)];
    }
  },
}
</script>
