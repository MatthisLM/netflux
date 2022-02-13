<template>
    <div class="container-fluid" :style="{ backgroundImage: 'url(' + require('@/assets/backgrounds/ucm_bg_shape.png') + ')' }">
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-start">
                    <p class="sub-title fw-bold">ONLINE STREAMING</p>
                    <h2 class="title display-5">Upcoming Movies</h2>
                </div>
                <div class="col-md-8 d-flex"><Button>ok</Button></div>
                <div class="col-xs-11 col-md-12 col-centered">

			<div id="carousel" class="carousel slide" data-ride="carousel" data-type="multi" data-interval="2500">
				<div class="carousel-inner">
					<div class="item active">
						<div class="carousel-col">
							<div class="block red img-responsive"></div>
						</div>
					</div>
					<div class="item">
						<div class="carousel-col">
							<div class="block green img-responsive"></div>
						</div>
					</div>
					<div class="item">
						<div class="carousel-col">
							<div class="block blue img-responsive"></div>
						</div>
					</div>
					<div class="item">
						<div class="carousel-col">
							<div class="block yellow img-responsive"></div>
						</div>
					</div>
				</div>

				<!-- Controls -->
				<div class="left carousel-control">
					<a href="#carousel" role="button" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
				</div>
				<div class="right carousel-control">
					<a href="#carousel" role="button" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
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
      Button 
  }
}
</script>


<style scoped>
    .container {
        background: url('/assets/backgrounds/ucm_bg_shape.png')
    }
    .container .sub-title{
        text-transform:uppercase;
        color:var(--secondary-color);
    }
    .container .title{
        font-size:36px;
    }




    .col-centered {
  float: none;
  margin: 0 auto;
}

.carousel-control {
  width: 8%;
  width: 0px;
}
.carousel-control.left,
.carousel-control.right {
  margin-right: 40px;
  margin-left: 32px;
  background-image: none;
  opacity: 1;
}
.carousel-control > a > span {
  color: white;
  font-size: 29px !important;
}

.carousel-col {
  position: relative;
  min-height: 1px;
  padding: 5px;
  float: left;
}

.active > div {
  display: none;
}
.active > div:first-child {
  display: block;
}

/*xs*/
@media (max-width: 767px) {
  .carousel-inner .active.left {
    left: -50%;
  }
  .carousel-inner .active.right {
    left: 50%;
  }
  .carousel-inner .next {
    left: 50%;
  }
  .carousel-inner .prev {
    left: -50%;
  }
  .carousel-col {
    width: 50%;
  }
  .active > div:first-child + div {
    display: block;
  }
}

/*sm*/
@media (min-width: 768px) and (max-width: 991px) {
  .carousel-inner .active.left {
    left: -50%;
  }
  .carousel-inner .active.right {
    left: 50%;
  }
  .carousel-inner .next {
    left: 50%;
  }
  .carousel-inner .prev {
    left: -50%;
  }
  .carousel-col {
    width: 50%;
  }
  .active > div:first-child + div {
    display: block;
  }
}

/*md*/
@media (min-width: 992px) and (max-width: 1199px) {
  .carousel-inner .active.left {
    left: -33%;
  }
  .carousel-inner .active.right {
    left: 33%;
  }
  .carousel-inner .next {
    left: 33%;
  }
  .carousel-inner .prev {
    left: -33%;
  }
  .carousel-col {
    width: 33%;
  }
  .active > div:first-child + div {
    display: block;
  }
  .active > div:first-child + div + div {
    display: block;
  }
}

/*lg*/
@media (min-width: 1200px) {
  .carousel-inner .active.left {
    left: -25%;
  }
  .carousel-inner .active.right {
    left: 25%;
  }
  .carousel-inner .next {
    left: 25%;
  }
  .carousel-inner .prev {
    left: -25%;
  }
  .carousel-col {
    width: 25%;
  }
  .active > div:first-child + div {
    display: block;
  }
  .active > div:first-child + div + div {
    display: block;
  }
  .active > div:first-child + div + div + div {
    display: block;
  }
}

.block {
  width: 306px;
  height: 230px;
}

.red {
  background: red;
}

.blue {
  background: blue;
}

.green {
  background: green;
}

.yellow {
  background: yellow;
}
</style>
