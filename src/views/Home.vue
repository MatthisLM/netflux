<template>
  <div class="home">
    <Navigation/>
    
    <Jumbotron/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Jumbotron from '@/components/Jumbotron.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Jumbotron
  }
}
</script>
