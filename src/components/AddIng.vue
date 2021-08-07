<template>
    <div>
        <button v-if="!showForm" class="btn btn-outline-light" @click="showForm = true" >Add a new ingredient</button>
        <div v-if="showForm"  class="card">
            <div class="card-header">
                <h3 class="display-4">Add a new ingredient</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Ingredient" required v-model="ing">
                    </div>
                    <button class="btn btn-outline-dark">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useDocument from '@/composables/useDocument'
    export default {
        props: ['combo'],
        setup(props) {
            const ing = ref('')
            const showForm = ref(false)
            const { updateDoc } = useDocument('combos', props.combo.id)
            const handleSubmit = async () => {
                const newIng = {
                    ing: ing.value,
                    id: Math.floor(Math.random() * 1000000)
                }
                await updateDoc({
                    ingredients: [...props.combo.ingredients, newIng]
                })
                ing.value = ''
            }
            return { ing, showForm, handleSubmit }
        }
    }
</script>