<template>
    <Navigation/>
    <JumbotronDetails 
    :imageUrl="imageUrl" 
    :backgroundUrl="backgroundUrl" 
    :name="name"
    :genres="genres"
    :ended="ended"
    :averageRuntime="averageRuntime"
    :summary="summary"
    :backgroudnOverlay="backgroudnOverlay"/>
    <Episodes 
    :allEpisodes="allEpisodes"
    :seasonsImages="seasonsImages"
    :currentMovieName="name"/>
</template>

<script>
import Axios from 'axios' 
import Navigation from '@/components/Navigation.vue'
import JumbotronDetails from '@/components/JumbotronDetails.vue'
import Episodes from '@/components/Episodes.vue'

export default {
    name: 'MovieDetails',
    components: {
        Navigation,
        JumbotronDetails,
        Episodes
    },
    data(){
        return {
            name:'',
            genres:[],
            ended:'',
            averageRuntime: '',
            summary :'',
            imageUrl:'',
            backgroundUrl: 'https://themebeyond.com/html/movflx/img/bg/movie_details_bg.jpg',
            backgroudnOverlay: true,
            allEpisodes: [],
            seasonsImages:[],
        }
    },
    computed:{
        id(){
            return this.$route.params.id
        }
    },
    mounted(){
        this.getGeneralInformations();
        this.imagePicker();
        this.getEpisodes();
        this.getSeasonsImages();
    },
    methods:{
        getGeneralInformations:function(){
            let axios = Axios.create({
                baseURL: 'https://api.tvmaze.com',
                timeout: 10 * 1000,
            });
            axios.get(`/shows/${this.id}`).then((response) => {
                this.name = response.data.name;
                this.genres = response.data.genres;
                this.ended = response.data.ended;
                this.averageRuntime = response.data.averageRuntime.toString();
                this.summary = response.data.summary;
            });
        },
        imagePicker:function(){
            let backgroundsUrl = [];
            let posterUrl = [];
            let axios = Axios.create({
                baseURL: 'https://api.tvmaze.com/',
                timeout: 10 * 1000,
            });
            axios.get(`/shows/${this.id}/images`).then((response) => {
                response.data.forEach(function(image){
                    if(image.type === "background" && image.resolutions.original.width === 1920){
                        backgroundsUrl.push(image.resolutions.original.url)
                    }
                    if(image.type ==="poster"){
                        posterUrl.push(image.resolutions.original.url)
                    }
                })
                this.imageUrl = posterUrl[Math.floor(Math.random() * posterUrl.length)];
                this.backgroundUrl = backgroundsUrl[Math.floor(Math.random() * backgroundsUrl.length)];
                if (!this.backgroundUrl || this.backgroundUrl.length === 0 ){
                    this.backgroundUrl = 'https://themebeyond.com/html/movflx/img/bg/movie_details_bg.jpg'
                    this.backgroundOverlay = false;
                }
            });
        },
        getEpisodes:function(){
            let axios = Axios.create({
                baseURL: 'https://api.tvmaze.com/',
                timeout: 10 * 1000,
            });
            axios.get(`/shows/${this.id}/episodes`).then((response) => {
                this.allEpisodes = response.data;
            });
        },
        getSeasonsImages:function(){
            let axios = Axios.create({
                baseURL: 'https://api.tvmaze.com/',
                timeout: 10 * 1000,
            });
            axios.get(`/shows/${this.id}/seasons`).then((response) => {
                let seasonsImages = [];
                response.data.forEach((season)=>{
                    if (season.image && season.image.original) {
                        seasonsImages.push(season.image.original);
                    }
                });
                this.seasonsImages = seasonsImages;
            });
        }
    }
}
</script>

<style scoped>
.results{
  margin-top: 150px;
}
</style>