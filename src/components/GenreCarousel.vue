<template>
    <div class="container-fluid" :style="{ background: 'url(' + require('@/assets/backgrounds/ucm_bg_shape.png') + '), center / cover no-repeat url(https://themebeyond.com/html/movflx/img/bg/ucm_bg.jpg)' }">
      <div class="grey-overlay">
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-start">
                    <p class="sub-title fw-bold">ONLINE STREAMING</p>
                    <h2 class="title display-5 text-white fw-bold">Upcoming Movies</h2>
                </div>
                <div class="col-md-8 d-flex align-items-end">
                  <div class="genre-wrapper">
                    <Button class="mx-2">ok</Button>
                    <Button class="mx-2">Test</Button>
                  </div>
                </div>
                <div class="col-xs-11 col-md-12 col-centered">
                  
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'GenreCarousel',
  components:{
    Button,
  },
  mounted(){
    
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
        min-height: 80vh;
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




/* nothing below this point is needed*/
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,600,700,800,900&display=swap');
body {
   background-color: #f2f2f2;
   color: #171717;
   height: 100vh;
   min-height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
}
h1 {
   font-family: 'Libre Franklin', sans-serif;
   font-weight: 700;
}

</style>
