<template>
  <div class="jumbotron jumbotron-fluid" :style="'background: linear-gradient(0deg, rgba(23, 29, 34, 0.85), rgba(23, 29, 34, 0.85)), url('+backgroundUrl+')'">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <img v-if="imageUrl" class="w-100 main-img" :src="imageUrl">
          <img v-else class="w-100 main-img" src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg">
        </div>
        <div class="col-5 d-flex flex-column align-items-start justify-content-center">
          <span class="text-white last-episode-date fw-bold">Last Episode: <span>{{ ended }}</span></span>
          <h1 class="text-white fw-bold text-start">{{ name }}</h1>
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
          <div v-html="summary" class="summary text-start"></div>
          <div class="movie-details-prime w-75">
            <div class="container">
              <div class="row">
                <div class="col-2 align-items-center d-flex flex-column justify-content-center share-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                    </svg>
                    <span class="share">Share</span>
                </div>
                <div class="col-8 tvmaze align-items-start d-flex flex-column justify-content-center">
                  <h6 class="text-white fw-bold">Prime Video</h6>
                  <p>Streaming Channels</p>
                </div>
                <div class="col-2 align-items-center d-flex flex-column justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
  padding-bottom:100px;
  background-position:center;
}
.main-img{
  border-radius: 5px;
  position: sticky;
  top: 150px;
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
.movie-details-prime {
    background: #242c38;
    display: flex;
    align-items: center;
    max-width: 475px;
    background: #242c38;
    border-radius: 4px;
    border: 1px solid #343434;
    padding: 20px 12px;
    margin-top: 35px;
    flex-wrap: wrap;
}
.share {
    font-size: 12px;
    color: #bcbcbc;
    cursor: pointer;
}
.share-content:hover .share{
    color: var(--secondary-color);
}
.tvmaze h6{
    font-size: 16px;
    margin-bottom: 5px;
    margin-left:16px;
}
.tvmaze p{
    color: #bcbcbc;
    font-size: 12px;
    margin-bottom:0;
    margin-left:16px;
    margin-top:5px;
}
.bi-share-fill{
    fill: white; 
    height: 24px;
    width: 24px;
    margin-bottom: 4px;
    cursor: pointer;
}
.bi-play-fill{
    fill: var(--secondary-color); 
    height: 54px;
    width: 54px;
    cursor: pointer;
}
.bi-play-fill:hover{
    fill: white;
}
</style>
