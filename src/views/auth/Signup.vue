<template>
  <div class="col-lg-6">
                <br>
                <div class="card">
                    <div class="card-header">
                        <h3 class="display-4 text-center">Sign up</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Display name" v-model="displayName">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="E-mail address" v-model="email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div>
                            <div v-if="error" class="text-danger">{{ error }}</div>
                            <!-- <div class="form-group">
                                <label>Upload your account image</label>
                                <input type="file" class="form-control-file" @change="handleChange">
                                <div class="text-danger">{{ fileError }}</div>
                            </div> -->
                            <button v-if="!isPending" style="margin: 25px;" class="btn btn-primary">Sign up</button>
                            <button v-if="isPending" disabled style="margin: 25px;" class="btn btn-primary">Loading...</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <h6 class="display-4 text-center text-light">Let's make ice cream !</h6>
                <img class="img-fluid" src="@/assets/ice-cream.png" alt="ice cream">
            </div>
</template>

<script>
import useSignup from '@/composables/useSignup'
import useStorage from '@/composables/useStorage'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const { error, signup, isPending } = useSignup()
        const { filepath, url, uploadAvatar } = useStorage()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')
        const file = ref(null)
        const fileError = ref(null)

        const router = useRouter()

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)
            if (file.value) {
                await uploadAvatar(file.value)
                // await res.user.updateProfile( url )
            }
            router.push({ name: 'Home' })
            if (!error.value) {
                console.log('user signed up')
            }
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
        return { email, password, displayName, isPending, error, handleSubmit, handleChange }
    }
}
</script>