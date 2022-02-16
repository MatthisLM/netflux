<template>
  <div class="jumbotron jumbotron-fluid">
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-12 d-flex align-items-center parent">
          <div class="left d-flex flex-column justify-content-center align-items-left px-5">
            <p id="name" class="text-start fw-bold"><span>Netflux</span></p>
            <h1 class="display-4 text-white text-start">Unlimited <span>Movie</span>, TVs Shows, & More.</h1>
            <Button class="mt-3" :width="'200px'" :iconSvgPath="'m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'">
                        watch now
            </Button>
          </div>
          <div class="right">
            <div class="overlay">
              <div class="overlay_content">
                <img :src="randomMovie.image.medium">
                <p class="movie-name text-white fw-bold">{{ randomMovie.name }}</p>
                <p class="text-white fw-bold">Average runtime: <span> {{ randomMovie.averageRuntime }} min</span></p>
                <StarRating :rating="randomMovie.rating.average"/>
                <router-link v-if="randomMovie.id" :to="{ name: 'MovieDetails', params: { id: randomMovie.id }}">
                  <Button :iconSvgPath="'m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'">
                        watch now
                  </Button>
                </router-link>
              </div>
            </div>
          </div>
      </div> 
    </div>
  </div>
</div>
</template>

<script>
import Button from '@/components/Button.vue'
import StarRating from '@/components/StarRating.vue'

export default {
  name: 'Jumbotron',
  components: {
   Button,
   StarRating
  },
  computed:{
    movieList(){
      return this.$store.getters.getAllMovies
    },
    randomMovieImage(){
      return this.randomMovie.image.medium
    }
  },
  data(){
   return {
    randomMovie:{
      id: '',
      name:'',
      image:{
        medium:'',
        original:''
      },
      rating:{
        average:0
      },
      averageRuntime: 0,
    }
   }
  },
  watch:{
      movieList:function(newList){
        let randomMovie = newList[Math.floor(Math.random() * newList.length)];
        this.randomMovie = randomMovie;
        console.log(randomMovie);
        document.querySelector('.jumbotron .right').style.backgroundImage = "url("+this.randomMovie.image.original+")";
      },
  },
}
</script>

<style scoped>
  .jumbotron{
    height:100vh;
    font-family: 'Poppins', sans-serif;
  }
  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
  .parent {
  position: relative;
  height:100%;
  width: 100%;
}
.left, .right {
  position: absolute;
  height: 100%;
 
}
.left {
  left: 0;
  top: 0;
  background: #1f1e24;
  -webkit-clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
  width:90%;
}
.right {
  right: 0;
  top: 0;
  background-position: bottom 20% right;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-clip-path: polygon(40% 0, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(40% 0, 100% 0%, 100% 100%, 0% 100%); 
  width:55%;
  cursor:pointer;
}
.right .overlay {
  position: absolute;
  display: none;
  visibility: hidden;
  opacity: 0;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 2; 
  cursor: pointer;
}

.right:hover .overlay {
  display:flex;
  visibility: visible;
  opacity: 1;
}

.overlay_content{
  margin-left:30%;
}
.overlay_content .movie-name{
  font-size: 2rem;
  text-transform:uppercase;
}
.left h1 {
  max-width:50%;
}
.jumbotron span {
  color: var(--secondary-color);
}
#name {
 font-size: 1.5rem;
}
</style>
