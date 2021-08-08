<template>
 <div v-if="combo" class="List-details col-lg-3">
    <!-- combo information -->
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">{{ combo.title }}</h4>
        <img class="img-fluid rounded" :src="combo.coverUrl">
        <p style="margin: 10px" class="text-center">Created by {{ combo.userName }}</p>
      </div>
      <p style="margin: 10px" class="text-center">{{ combo.description }}</p>
      <div v-if="ownership" class="card-footer text-center">
        <button @click="handleDelete" class="btn btn-outline-danger">Delete List</button>
      </div>
    </div>
  </div>
<div v-if="combo" class="col-lg-9">
    <!-- Combo ingredients -->
    <h5 v-if="!combo.ingredients.length" class="text-muted">No ingredients have been added to this combo yet.</h5>
    <h4 v-else class="text-light display-4">Ingredients:</h4>
    <div v-for="ingredient in combo.ingredients" :key="ingredient.id">
      <div class="card">
        <div class="card-body">
            <h4>{{ ingredient.ing }}</h4>
          <button v-if="ownership" @click="handleClick(ingredient.id)" class="btn btn-outline-dark float-right">Delete</button>
        </div>
      </div>
      <br>
    </div>
    <AddIng v-if="ownership" :combo="combo" />
    <div v-if="error" class="text-danger">{{ error }}</div>
</div>
</template>

<script>
import AddIng from '@/components/AddIng.vue'
import useStorage from '@/composables/useStorage'
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  props: ['id'],
  components: { AddIng },
  setup(props) {
    const { error, document: combo } = getDocument('combos', props.id)
    const { user } = getUser()
    const { deleteDoc, updateDoc } = useDocument('combos', props.id)
    const { deleteImage } = useStorage()
    const router = useRouter()
    
    const ownership = computed(() => {
      return combo.value && user.value && user.value.uid == combo.value.userId
    })
    const handleDelete = async () => {
      await deleteImage(combo.value.filePath)
      await deleteDoc()
      router.push({ name: 'Home' }) 
    }
    const handleClick = async (id) => {
        const ingredients = combo.value.ingredients.filter((ingredient) => ingredient.id != id)
        await updateDoc({ ingredients }) 
      }

    return { error, combo, ownership, handleDelete, handleClick }
}
}
</script>