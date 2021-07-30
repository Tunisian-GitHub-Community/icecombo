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
    <div class="col-lg-9">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/create" v-if="user" class="nav-link" href="#">Create Combo</router-link >
        </li>
        <li class="nav-item">
          <a v-if="user" class="nav-link" href="#">My Combos</a>
        </li>
        <li class="nav-item">
          <router-link to='/about' class="nav-link" href="#">About</router-link>
        </li>
      </ul>
    </div>
     <div v-if="user" class="col-lg-3">
       <div class="row">
          <p style="padding-right: 20px" class="text-light">Logged in as <b>{{ user.displayName}}</b></p>
          <button @click="handleClick" type="button" class="btn btn-outline-light">Logout</button>
       </div>
      </div>
  </div>
</nav>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'

  export default {
    setup() {
      const { user } = getUser()
      const { logout } = useLogout()
      
      const router = useRouter()
      
      const handleClick = async () => {
        await logout()
        console.log('user logged out')
        router.push({ name: 'Login' })
      }
      
      return { handleClick, user }
    }
  }
</script>

<style>
.navbar {
  background-color: transparent;
}
</style>