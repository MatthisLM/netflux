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
    //axios.get('/shows').then(response => this.$store.dispatch('updateAllMovies',response.data));
    //localStorage.setItem('allMovies',response.data);
    axios.get('/shows').then((response) => {
      //localStorage.setItem('allMovies',JSON.stringify(response.data))
      this.$store.dispatch('updateAllMovies',response.data)
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

:root {
  --secondary-color: #e4d804;
}

#app {
  font-family: 'Poppins', sans-serif;
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

input:focus{
    outline: none;
}
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
</style>
