<template>
  <div v-if="combos">
    <h5 class="display-4 text-light">My combos</h5>
    <div v-for="combo in combos" :key="combo.id">
        <br>
            <div class="card">
            <div class="card-body">
                <router-link class="nav-link" :to="{ name: 'ComboDetails', params: { id:combo.id } }">
                <div class="single">
                    <div class="thumbnail">
                        <img :src="combo.coverUrl">
                    </div>
                    <div class="info">
                        <h3 style="color: black">{{combo.title}}</h3>
                        <p style="color: black">{{combo.description}}</p>
                    </div>
                </div>
                </router-link>
            </div>
          </div>
    </div>
    <br>
    <router-link to="/create"><button type="button" class="btn btn-outline-light">Create combo</button></router-link>
  </div>
  <div v-else>
    <h5 class="display-4 text-muted">You didn't create any combo for now</h5>
    <router-link to="/create"><button type="button" class="btn btn-outline-light">Create combo</button></router-link>
  </div>
</template>

<script>
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
export default {
  setup() {
    const { user } = getUser()
    const { documents: combos } = getCollection('combos', ['userId', '==', user.value.uid])
    console.log(combos)
    return { combos }
  }
}
</script>
<style scoped>
.single {
    display: flex;
    align-items: center;
    transition: all ease 0.2s;
  }
  .single:hover {
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    transform: scale(1.02);
    transition: all ease 0.2s;
  }
  .thumbnail {
    max-width: 200px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 5px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
  .info {
    margin: 0 30px;
  }
  .item-number {
    margin-left: auto;
  }
</style>