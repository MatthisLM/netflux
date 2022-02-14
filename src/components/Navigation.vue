<template>
    <SearchOverlay/>
    <nav class="navbar navbar-expand-lg text-white fixed-top justify-content-between py-4">
        <a class="navbar-brand mx-5" href="#">Netflux</a>
        <button class="navbar-toggler mx-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

  <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Explore</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <button id="search-icon" type="button" class="search-button btn mx-5" @click="showOverlay">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
  </button>
</nav>
</template>

<script>
import SearchOverlay from '@/components/SearchOverlay.vue'

export default {
  name: 'Navigation',
  props:{
    alwaysOpaque: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
  components: {
    SearchOverlay
  },
  mounted(){
    if (this.alwaysOpaque) {
      document.querySelector('.navbar').style.background = "#171d22";
    } else {
      window.addEventListener('scroll', function() {
        let scroll = window.scrollY;
        if (scroll > 50) {
          document.querySelector('.navbar').style.background = "#171d22";
        } else {
          document.querySelector('.navbar').style.background = "transparent";
        }
      });
    }
  },
  methods: {
    showOverlay() {
      document.querySelector("body").style.height="100%";
      document.querySelector("body").style.overflowY="hidden";
      document.getElementById("search-overlay").style.display = "flex";
    },
  },
}
</script>

<style scoped>
.navbar{
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  background:transparent;
  text-transform: uppercase;
  z-index:2;
}
.navbar a{
 color:white;
}
.nav-link:hover{
  color: var(--secondary-color);
}
#search-icon {
  fill:var(--secondary-color)
}
</style>
