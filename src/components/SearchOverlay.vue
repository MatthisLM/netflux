<template>
    <div id="search-overlay" class="h-100 justify-content-center align-items-center" @click.self="hideOverlay">
        <div class="w-50" style="margin:0 auto">
            <form @submit.prevent class="d-flex justify-content-between">
                <input type="text" placeholder="Search here...">
                <button type="button" class="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  class="bi bi-search icon" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
 export default {
  name: 'Navigation',
  mounted(){
    window.scroll(function() {
      if (document.scrollTop() > 50) {
        document.querySelector('.navbar').style.background = "#171d22";
      } else {
        document.querySelector('.navbar').style.background = "transparent";
      }
    });
  },
  methods:{
      hideOverlay() {
        document.querySelector("body").style.height="auto";
        document.querySelector("body").style.overflow="scroll";
        document.getElementById("search-overlay").style.display = "none";
    }
  }
}
</script>

<style scoped>
    #search-overlay {
        position: fixed;
        display:none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(23,26,33,.95);
        z-index: 3;
    }
    #search-overlay form{
        border-bottom: 3px solid rgba(255,255,255,.1);
    }
    #search-overlay input{
        height: 70px;
        background:transparent;
        border:none;
        padding: 0 85px 12px 10px;
        font-size:36px;
        color:white;
    }
    #search-overlay .icon{
        fill:var(--secondary-color)
    }
</style>