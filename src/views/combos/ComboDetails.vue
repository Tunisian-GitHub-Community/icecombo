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
    <div v-if="error" class="text-danger">{{ error }}</div>
</div>
</template>

<script>
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'
import { computed } from '@vue/runtime-core'

export default {
props: ['id'],
setup(props) {
    const { error, document: combo } = getDocument('combos', props.id)
    const { user } = getUser()

    const ownership = computed(() => {
      return combo.value && user.value && user.value.uid == combo.value.userId
    })

    return { error, combo, ownership }
}
}
</script>

<style>

</style>