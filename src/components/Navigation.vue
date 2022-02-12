<template>
    <nav class="navbar navbar-expand-lg text-white fixed-top">
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
        <a class="nav-link" href="#">Parcourir</a>
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
</nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
.navbar{
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  background:transparent;
  text-transform: uppercase;
}
.navbar a{
 color:white;
}
.nav-link:hover{
  color: var(--secondary-color);
}
</style>
