<template>
  <nav class="navbar navbar-expand-md navbar-dark">
  <!-- Brand -->
    <router-link to='/' class="navbar-brand display-4">
      Ice 
      <img src="@/assets/favicon-32x32.png" alt="ice cream">
      Combo
    </router-link>

  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <div class="col-lg-11">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Create Combo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Combos</a>
        </li>
        <li class="nav-item">
          <router-link to='/about' class="nav-link" href="#">About</router-link>
        </li>
      </ul>
    </div>
     <div class="col-lg-1">
          <button type="button" class="btn btn-outline-light">Logout</button>
      </div>
  </div>
</nav>
</template>

<script>
export default {}
</script>

<style>
.navbar {
  background-color: transparent;
}
</style>