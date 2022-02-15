<template>
  <div class="jumbotron jumbotron-fluid" :style="'background: url('+backgroundUrl+')'">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <img class="w-100 main-img" :src="imageUrl">
        </div>
        <div class="col-5 d-flex flex-column align-items-start">
          <span class="text-white last-episode-date fw-bold">Last Episode: <span>{{ ended }}</span></span>
          <h1 class="text-white fw-bold">{{ name }}</h1>
          <div>
            <span v-if="genres" class="text-white genres">{{ genres.join(', ') }}</span>
            <span v-if="ended" class="text-white ended">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
              </svg>
              {{ ended.slice(0, 4) }}
            </span>
            <span v-if="averageRuntime" class="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              {{ averageRuntime }}
            </span>
          </div>
          <div class="summary text-start"><span class="fw-bold">{{ name }} </span>{{ summary }}</div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'JumbotronDetails',
  components: {
   
  },
  props:{
    name:String,
    imageUrl:String,
    genres:Array,
    ended:String,
    summary:String,
    averageRuntime:String,
    backgroundUrl:String
  },
  data(){
    return {
      
    }
  },
}
</script>

<style scoped>
.jumbotron{
  padding-top:150px;
  background-position:center;
}
.main-img{
  border-radius: 5px;
}
.last-episode-date span{
  color: var(--secondary-color)
}
.genres, .ended{
  margin-right:24px;
}
.bi-clock{
  transform:translateY(-2px);
  fill: var(--secondary-color);
}
.bi-calendar {
  transform:translateY(-2px);
  fill: var(--secondary-color);
}
.summary {
    font-size: 14px;
    font-weight: 500;
    line-height: 26px;
    color: #bcbcbc;
    margin-top:24px;
}
</style>
