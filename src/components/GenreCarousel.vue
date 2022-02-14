<template>
    <div class="container-fluid" :style="{ background: 'url(' + require('@/assets/backgrounds/ucm_bg_shape.png') + '), center / cover no-repeat url(https://themebeyond.com/html/movflx/img/bg/ucm_bg.jpg)' }">
      <div class="grey-overlay">
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-start">
                    <p class="sub-title fw-bold">ONLINE STREAMING</p>
                    <h2 class="title display-5 text-white fw-bold">Movies by genre</h2>
                </div>
                <div class="col-md-8 d-flex align-items-end justify-content-end">
                  <div class="genre-wrapper">
                    <Select :options="allGenres" v-on:newValue="filter"/>
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <Button @click="prevSlide" type="button" class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                          <path class="carousel-controls-icon" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                      </Button>
                      <Button @click="nextSlide" type="button" class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path class="carousel-controls-icon" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div class="col-xs-11 col-md-12 col-centered">
                  <vueper-slides class="no-shadow" :visible-slides="4" :arrows="true" :bullets="false" :gap="2" :slideRatio="1/2">
                  <template #arrow-left><i></i></template>
                  <template #arrow-right><i></i></template>
                    <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.name" :content="slide.content">
                      <template #content>
                        <div class="vueperslide__content-wrapper" style="flex-direction: column">
                          <img class="slide-img" :src="slide.imgUrl" style="height:100px, width:100px">
                          <div class="d-flex justify-content-between w-100 my-3 fw-bold">
                            <span class="text-white">{{slide.name}}</span>
                            <span v-if="slide.ended" class="slide-year">{{slide.ended.slice(0, 4)}}</span>
                          </div>
                          <div class="d-flex justify-content-end w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                            <span class="text-white slide-average-runtime">{{slide.averageRuntime}}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                            </svg>
                            <span class="text-white slide-rating">{{slide.rating}}</span>
                          </div>
                        </div>
                      </template>
                    </vueper-slide>
                  </vueper-slides>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Select from '@/components/Select.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'GenreCarousel',
  components:{
    Button,
    Select,
    VueperSlides, 
    VueperSlide
  },
  data(){
    return {
      displayedMovies: [],
      renderComponent: true
    }
  },
  computed:{
    allGenres(){
      return this.$store.getters.getAllGenres;
    },
    slides(){
      let slides = [];
      this.displayedMovies.forEach(movie => {
        let slideInfos = {
          name:movie.name,
          link:movie.officialSite,
          imgUrl:movie.image.original,
          rating:movie.rating.average / 2,
          averageRuntime:movie.averageRuntime,
          ended:movie.ended
        }
        slides.push(slideInfos)
      })
      return slides
    }
  },
  methods:{
    filter(myGenre){
      let moviesFound = [];
      this.$store.getters.getAllMovies.forEach(movie => {
        movie.genres.forEach(genre => {
          if(genre === myGenre){
            moviesFound.push(movie)
          }
        });
      });
      this.displayedMovies = moviesFound;
    },
    prevSlide(){
      document.getElementsByClassName("vueperslides__arrow vueperslides__arrow--prev")[0].click();
    },
    nextSlide(){
      document.getElementsByClassName("vueperslides__arrow vueperslides__arrow--next")[0].click();
    }
  },
  watch:{
    allGenres:function(genres){
      this.filter(genres[0]);
    }
  }
}
</script>


<style scoped>
    .grey-overlay {
      position: relative;
      background-color: rgb(20,20,20,0.95);
      padding: 0 var(--bs-gutter-x,.75rem);
    }
    .container {
        min-height: 100vh;
    }
    .container-fluid {
        padding: 0;
    }
    .container .sub-title{
        text-transform:uppercase;
        color:var(--secondary-color);
        margin-top: 48px;
    }
    .container .title{
        font-size:36px;
    }

    .genre-wrapper{
      margin-bottom: 0.5rem;
    }


    .carousel-nav-icon {
      height: 48px;
      width: 48px;
    }
    .carousel-item {
      .col, .col-sm, .col-md {
        margin: 8px;
        height: 300px;
        background-size: cover;
        background-position: center center;
      }
    }

.carousel-item-div {
  border-radius: 5px;
}
.btn-group {
  margin-left: 24px;
  height: 48px;
}
.btn-group button{
  border: 2px solid #2d303d;
  padding: 8px 16px !important;
  background: #20212b;
}
.btn-group button:hover{
  border: 2px solid var(--secondary-color);
}
.btn-group button:focus{
  outline:0;
}
.carousel-controls-icon{
  stroke: white;
  fill: white;
}
.slide-img {
  height:70%;
  width: 100%;
  border-radius: 5px;
}
.slide-year {
  color:var(--secondary-color);
}
.slide-average-runtime, .slide-rating  {
 margin-left:5px;
}
.bi-clock {
  transform:translateY(3px);
  margin-left: 16px;
  fill: var(--secondary-color);
}
.bi-hand-thumbs-up-fill {
  transform:translateY(2px);
  margin-left: 16px;
  fill: var(--secondary-color);
}
</style>
