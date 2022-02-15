<template>
   <section id="episodes"></section>
</template>

<script>
export default {
  name: 'Episodes',
  props:{
      episodes: Array
  },
  computed:{
      seasons(){
          let seasons = [];
          let seasonCount = 0
          this.episodes.forEach(function(episode){
              if(episode.season > seasonCount){
                  console.log(episode.season)
              }
          })
        return seasons
      }
  }
}
</script>


<style scoped>
   #episodes{
       background: url('https://themebeyond.com/html/movflx/img/bg/episode_bg.jpg')
   }
</style>
