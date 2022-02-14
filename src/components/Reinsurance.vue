<template>
    <section id="reinsurance">
        <div class="container py-5">
            <div class="row py-5">
                <div class="col-md-6 left-part d-flex justify-content-start flex-column">
                    <span class="subtitle text-start d-flex">Online streaming</span>
                    <h2 class="title fw-bold text-start">Live Movie & TV Shows For Friends & Family</h2>
                    <p class="text-start my-5">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                    <div class="live-fact-wrap d-flex">
                        <div class="resolution">
                            <h2>HD 4K</h2>
                        </div>
                        <div class="active-customer mx-5 text-start">
                            <h4 class="fw-bold">20K+</h4>
                            <p class="fw-bold">Active Customer</p>
                        </div>
                    </div>
                    <Button class="my-5" :width="'200px'" :iconSvgPath="'m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'">
                        watch now
                    </Button>
                </div>
                <div class="col-md-6 d-lg-flex align-items-center d-none">
                    <img class="py-5" src="https://themebeyond.com/html/movflx/img/images/live_img.png">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'Reinsurance',
  components:{
      Button
  }
}
</script>

<style scoped>
#reinsurance {
    background: url('https://themebeyond.com/html/movflx/img/bg/live_bg.jpg');
}
#reinsurance img{
    width:100%;
}
#reinsurance button{
    background: var(--secondary-color);
    color: #1e1b29;
}
#reinsurance button:hover{
    background: transparent;
}
.left-part {
    padding-right:48px;
}
.title {
    font-size:36px;
    color:#1e1b29;
}
p {
    color:#6a6a6a;
}
.subtitle {
    text-transform:uppercase;
    color: #656363;
    font-size:12px;
    letter-spacing:1px;
    font-weight: 500;
}
.resolution h2 {
    font-size: 60px;
    text-shadow: 0px 3px 24px rgb(160 160 160 / 9%);
    line-height: 1;
    margin-bottom: 0;
    color: #d81c2b;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #d81c2b;
}
.active-customer {
    margin-top: 5px;
}
.active-customer h4 {
    font-size: 38px;
    color: #1e1b29;
    text-shadow: 0px 3px 4px rgb(30 30 30 / 18%);
    line-height: .8;
    margin-bottom: 5px;
}
.active-customer > p {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    color: #1e1b29;
    line-height: 1;
}
</style>
