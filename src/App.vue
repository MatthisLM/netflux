<template>
  <router-view/>
</template>

<script>
import Axios from 'axios'

export default {
  mounted(){
    const axios = Axios.create({
      baseURL: 'https://api.tvmaze.com/',
      timeout: 10 * 1000,
    });
    axios.get('/shows').then(response => this.$store.dispatch('updateAllMovies',response.data));
    //localStorage.setItem('allMovies',response.data);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
