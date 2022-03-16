<template>
  <Navigation :alwaysOpaque="true"/>
  <ResultsWrapper v-on:newResearch="newResearch" :shows="results"/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ResultsWrapper from '@/components/ResultsWrapper.vue'
import Axios from 'axios'

export default {
  name: 'Results',
   components: {
    Navigation,
    ResultsWrapper
  },
  data(){
    return {
      results:[]
    }
  },
  computed:{
    currentQuery(){
        return this.$route.query.query
    }
  },
  watch:{
    currentQuery:function(){
      const axios = Axios.create({
        baseURL: 'https://api.tvmaze.com/',
        timeout: 10 * 1000,
      });
      axios.get(`/search/shows?q=:${this.currentQuery}`).then((response) => {
        this.results = response.data
      });
    }
  },
  mounted(){
    let axios = Axios.create({
      baseURL: 'https://api.tvmaze.com/',
      timeout: 10 * 1000,
    });
    axios.get(`/search/shows?q=:${this.currentQuery}`).then((response) => {
      this.results = response.data
    });
  },
  methods:{
    newResearch:function(query){
      this.$router.push({ path: '/search', query: { query: query } })
    }
  }
}
</script>

<style scoped>
.results{
  margin-top: 150px;
}
</style>
