<template>
   <section id="episodes">
    <div class="container">
        <div class="row">
            <div class="col-8 d-flex flex-column align-items-start">
                <span class="subtitle">ONLINE STREAMING</span>
                <h2 class="title text-white fw-bold my-3">Watch Full Episode</h2>
                <hr class="separator">
                <div class="accordion accordion-flush w-100" id="accordion">
                   <div v-for="(season, i) in seasons" :key="i" class="accordion-item w-100">
                        <h2 @click="updateSeasonImage(seasons.length - i - 1)" class="accordion-header" :id="'heading-'+i">
                            <button class="accordion-button text-white" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-'+i" aria-expanded="true" :aria-controls="'collapse-'+i">
                                <div class="w-100 d-flex justify-content-between">
                                    <span>Season {{ seasons.length - i }}</span>
                                    <span class="episode-count">{{ season.length }} Full Episodes</span>
                                </div>
                            </button>
                        </h2>
                        <div :id="'collapse-'+i" class="accordion-collapse collapse false" :aria-labelledby="'heading-'+i" data-bs-parent="#accordion">
                            <div class="accordion-body">
                                <ul>
                                    <li v-for="(episode, j) in season" :key="j">
                                        <div class="d-flex text-white fw-bold justify-content-between">
                                            <div class="d-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                                </svg>
                                                <div>Episode {{ episode.number }} - {{ episode.name }}</div>
                                            </div>
                                            <div class="d-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                                </svg>
                                                <div>{{ episode.runtime }}</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
                <hr class="separator">
            </div>
            <div class="col-4">
                <img class="season-image" :src="selectedSeason">
            </div>
        </div>
    </div>
   </section>
</template>

<script>
export default {
  name: 'Episodes',
  props:{
      allEpisodes: Array,
      seasonsImages: Array
  },
  data(){
      return {
          selectedSeason: this.seasonsImages[this.seasonsImages.length - 1]
      }
  },
  computed:{
      seasons(){
          let seasons = [];
          let currentSeason = [];
          let seasonCount = 0
          this.allEpisodes.forEach(function(episode){
              if(episode.season === seasonCount){
                  currentSeason.push(episode);
              } else {
                  seasonCount++
                  currentSeason = [];
                  currentSeason.push(episode)
                  seasons.push(currentSeason);
              }
          })
        return seasons.reverse()
      }
  },
  methods:{
      updateSeasonImage:function(id){
          this.selectedSeason = this.seasonsImages[id];
      }
  }
}
</script>


<style scoped>
   #episodes{
       background: url('https://themebeyond.com/html/movflx/img/bg/episode_bg.jpg');
       background-size:cover;
       background-position:center;
       padding: 80px 0;
   }
   .subtitle{
       color:var(--secondary-color);
       font-size:12px;
       font-weight:500;
   }
   .title {
       font-size:30px;
   }
   .separator{
       width:100%;
       height:2px;
       color: black;
       opacity: 1;
       box-shadow: 0px 1px 3px 0px rgb(102 102 102 / 46%);
   }
   .accordion-item{
       background: transparent;
   }
   .accordion-button{
       z-index:1 !important;
       background: transparent;
   }
   .accordion-button:not(.collapsed){
       background: transparent;
   }
   .accordion-button::after,
   .accordion-button:not(.collapsed)::after{
       display: none;
   }
   .accordion-body{
       background:#040406;
   }
   .episode-count{
       color:#9b9b9b;
       font-size:14px;
   }
   .accordion-button:not(.collapsed) .episode-count{
       color:var(--secondary-color);
   }
   ul{
       padding-top:24px;
       padding-right:36px;
       list-style:none;
   }
   li{
        padding-bottom: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid #242426;
   }
   .bi-clock{
        margin-right: 8px;
        transform:translateY(4px);
        fill:var(--secondary-color);
   }
   .bi-play-fill{
       height:24px;
       width: 24px;
       margin-right: 8px;
       transform:translateY(-1px);
       fill:var(--secondary-color);
   }
   .season-image{
       width:100%;
       height:auto;
       position: sticky;
       top: 150px;
   }
</style>
