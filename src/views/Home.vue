<template>
  <div class="home">
    <Navigation/>
    <Jumbotron :randomMovie="randomMovie"/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Jumbotron from '@/components/Jumbotron.vue'


export default {
  name: 'Home',
  components: {
    Navigation,
    Jumbotron
  },
  computed:{
    randomMovie(){
      let movieList = this.$store.getters.getAllMovies
      return movieList[Math.floor(Math.random() * movieList.length)];
    }
  },
}
</script>
