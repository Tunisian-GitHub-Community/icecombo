<template>
<div>
    <div v-if="error" class="text-danger">Could not fetch the data</div>
    <div v-if="documents">
      <ComboView :combos="documents" />
    </div>
</div>
</template>

<script>
import ComboView from '../components/ComboView.vue'
import getCollection from '@/composables/getCollection'

export default {
  name: 'Home',
  components: { ComboView },
  setup() {
    const { error, documents } = getCollection('combos')

    return { error, documents }
  }
}
</script>
