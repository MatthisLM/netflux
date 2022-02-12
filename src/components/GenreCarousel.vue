<template>
    <div class="container-fluid" :style="{ backgroundImage: 'url(' + require('@/assets/backgrounds/ucm_bg_shape.png') + ')' }">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h2>Upcoming Movies</h2>
                </div>
                <div class="col-md-8"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GenreCarousel',
}
</script>


<style scoped>
    .container {
        background: url('/assets/backgrounds/ucm_bg_shape.png')
    }
</style>
