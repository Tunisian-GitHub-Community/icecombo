<template>
      <div class="card">
            <div class="card-header">
                <h3 class="display-4">Let's create our combo !</h3>
            </div>
            <div class="card-body row">
                <div class="col-lg-8">
                    <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input type="text" required class="form-control" placeholder="Title" v-model="title">
                    </div>
                    <div class="form-group">
                        <input required class="form-control" placeholder="Ingredients" rows="3" v-model="ingredients">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Description (optional)" rows="3" v-model="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Upload combo cover image</label>
                        <input type="file" class="form-control-file" @change="handleChange" >
                        <div class="text-danger">{{ fileError }}</div>
                    </div>
                    <div class="text-danger"></div>
                    <button v-if="!isPending" class="btn btn-outline-dark">Create</button>
                    <button v-else disabled class="btn btn-outline-dark">Saving...</button>
                </form>
                </div>
                <img class="col-lg-4" src="https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.gif" alt="">
            </div>
        </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)

        const handleSubmbit = () => {
        }

        // allowed file types
        const types = ['image/png', 'image/jpeg']

        const handleChange = (e) => {
            const selected = e.target.files[0]
            console.log(selected)
            if (selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null
                fileError.value = 'Please select an image file (png or jpg)'
            }
        }

        return { title, description, handleSubmbit, handleChange, fileError }
    }
}
</script>

<style>

</style>