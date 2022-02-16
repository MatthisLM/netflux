<template>
    <div class="results">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-start flex-column align-items-start">
            <h1 class="text-white fw-bold">Your results for : <span class="query">{{ currentQuery }}</span><span  v-if="shows.length > 0" class="show-count-container"> (<span class="show-count">{{shows.length}}</span>)</span></h1>
            <form @submit.prevent="search" class="d-flex">
                <input @keyup="autoSearch" class="d-block search-input" :value="currentQuery" placeholder="Search here...">
                <button type="submit" class="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </form>
        </div>
      </div>
      <div v-if="shows.length > 0" class="row result-list">
        <div v-for="(show, i) in shows" :key="i" class="col-md-3 my-4">
            <router-link :to="{ name: 'MovieDetails', params: { id: show.show.id }}">
                <img v-if="show.show.image" :src="show.show.image.original">
            </router-link>
            <div v-if="!show.show.image" class="no-img d-flex">
                <router-link :to="{ name: 'MovieDetails', params: { id: show.show.id }}">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg">
                </router-link>
            </div>
            <div class="d-flex justify-content-between w-100 my-3 fw-bold">
                <router-link :to="{ name: 'MovieDetails', params: { id: show.show.id }}">
                    <span class="text-white show-name">{{show.show.name}}</span>
                </router-link>
                <span v-if="show.show.ended" class="show-year">{{show.show.ended.slice(0, 4)}}</span>
            </div>
            <div class="d-flex justify-content-end w-100">
                <svg v-if="show.show.averageRuntime" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
                <span class="text-white slide-average-runtime">{{show.show.averageRuntime}}</span>
                    <svg v-if="show.show.rating.average" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                    </svg>
                <span v-if="show.show.rating.average" class="text-white slide-rating">{{show.show.rating.average}}</span>
            </div>
        </div>
      </div>
      <div v-else class="row no-result-found">
        <div class="text-white display-1 my-5">
            No result found <span>:(</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsWrapper',
  props:{
      shows: Array
  },
  data(){
      return {
          timer: null
      }
  },
  computed:{
    currentQuery(){
        return this.$route.query.query
    }
  },
  methods:{
    search:function(event){
        this.$emit('newResearch',event.target.document.querySelector('input').value)
    },
    autoSearch:function(event){  
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.timer = setTimeout(() => {
            this.$emit('newResearch',event.target.value)
        }, 800);
    }
  }
}
</script>


<style scoped>
h1 {
    margin-bottom:60px;
}
.show-count-container{
    font-size:30px;
}
.query, .show-count{
    color: var(--secondary-color);
}
.search-input{
    min-width: 25%;
    border: none;
    background: #12151e;
    color: #fff;
    padding: 14px 20px;
    font-size: 12px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding-right: 60px;
    box-shadow: inset 0px 4px 9px 0px rgb(0 0 0 / 25%);
}
.search-btn {
    border: none;
    background: #12151e;
    color: #fff;
    padding: 14px 20px;
    font-size: 12px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: inset 0px 4px 9px 0px rgb(0 0 0 / 25%);
}
.search-btn svg{
    fill: var(--secondary-color);
    height:15px;
    width:15px; 
}
.result-list img{
    width:100%;
    height:450px;
    border-radius: 5px;
}
.bi-clock {
  transform:translateY(3px);
  margin-left: 16px;
  margin-right: 6px;
  fill: var(--secondary-color);
}
.bi-hand-thumbs-up-fill {
  transform:translateY(2px);
  margin-left: 16px;
  margin-right: 6px;
  fill: var(--secondary-color);
}
.no-result-found span{
    color:var(--secondary-color);
}
.show-name{
    text-align:start;
}
.show-year {
    margin-left:16px;
  color:var(--secondary-color);
}
.no-img {
    width:100%;
    height: 450px !important;
}
.no-img img{
    width:100%;
    height: auto !important;
    margin: auto 0;
}
</style>