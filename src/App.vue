<template>
  <Navbar />
  <div class="container">
    <div class="row">
        <router-view/>
    </div>
  </div>
  <footer class="py-5">
    <div class="container">
      <div class=" text-center text-light">Copyright © 2021 | Ayoub Abidi</div>
    </div>
 </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>


<style>
body {
 background-image: url("./assets/pink-melting-ice-cream-abstract-qhd-wallpaper-2560x2560.jpg");
 background-size: 1706px;
}
div {
    animation: transitionIn 0.75s;
}
@keyframes transitionIn {
    from {
        opacity: 0;
        transform: rotateX(-10deg);
    }
    to {
        opacity: 1;
        transform: rotateX(0);
    }
}
</style>
