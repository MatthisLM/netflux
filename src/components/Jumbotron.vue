<template>
  <div class="jumbotron jumbotron-fluid">
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-12 d-flex align-items-center parent">
          <div class="left d-flex align-items-center ">
            <span></span>
            <h1 class="display-4 text-white">Unlimited <span>Movie</span>, TVs Shows, & More.</h1>
          </div>
          <div class="right"></div>
      </div> 
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Jumbotron',
  
  computed:{
    filmList(){
      return this.$store.getters.getAllMovies
    },
    randomMovieImage(){
      return this.randomMovie.image.medium
    }
  },
  data(){
   return {
    randomMovie:{}
   }
  },
  watch:{
      filmList:function(newList){
        let randomMovie = newList[Math.floor(Math.random() * newList.length)];
        this.randomMovie = randomMovie;
        document.querySelector('.jumbotron .right').style.backgroundImage = "url("+this.randomMovie.image.original+")";
        console.log(randomMovie)
        console.log(randomMovie.image.original)
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron{
    height:100vh;
    /*background-image: linear-gradient(110deg, #1f1e24 55%, transparent 45%);*/
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
.left h1 {
  max-width:50%;
}
.left h1 span {
  color: #e4d804;
}
</style>
