<template>
    <Navigation/>
    <MoviesWrapper :movies="allMovies" :configuration="'All'" v-on:seeMore="seeMore"/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import MoviesWrapper from '@/components/MoviesWrapper.vue'
import Axios from 'axios'
export default {
  name: 'Explore',
  components:{
        Navigation,
        MoviesWrapper
  },
  computed:{
      allMovies(){
          return this.$store.getters.getAllMovies;
      }
  },
  data(){
      return {
          seeMoreIteration:0
      }
  },
  methods:{
    seeMore:function(){
        this. seeMoreIteration++;
        let axios = Axios.create({
            baseURL: 'https://api.tvmaze.com/',
            timeout: 10 * 1000,
        });
        axios.get('/shows?page='+this.seeMoreIteration).then((response) => {
            this.$store.dispatch('updateAllMovies',response.data)
        });
    }
  }   
}
</script>

<style scoped></style>