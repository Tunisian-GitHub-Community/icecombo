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
    </div>
  </div>
<div v-if="combo" class="col-lg-9">
    <div v-if="error" class="text-danger">{{ error }}</div>
</div>
</template>

<script>
import getDocument from '@/composables/getDocument'

export default {
props: ['id'],
setup(props) {
    const { error, document: combo } = getDocument('combos', props.id)

    return { error, combo }
}
}
</script>

<style>

</style>