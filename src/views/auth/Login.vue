<template>
    <div class="col-lg-6">
        <br>
        <div class="card">
            <div class="card-header">
                <h3 class="display-4 text-center">Login</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="E-mail address" v-model="email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                    </div>
                    <div v-if="error" class="text-danger">{{ error }}</div>
                    <button v-if="!isPending" style="margin: 25px;" class="btn btn-primary">Login</button>
                    <button v-if="isPending" disabled style="margin: 25px;" class="btn btn-primary">Loading...</button>
                    <router-link to="/signup">
                        <button style="margin: 25px;" class="btn btn-secondary">Create an account</button>
                    </router-link>
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
    import useLogin from '@/composables/useLogin'
    import { ref } from '@vue/reactivity'
    import { useRouter } from 'vue-router'
    export default {
        setup() {
            const { error, login, isPending } = useLogin()
            const email = ref('')
            const password = ref('')
            const router = useRouter()
            const handleSubmit = async () => {
                const res = await login(email.value, password.value)
                router.push({
                    name: 'Home'
                })
                if (!error.value) {
                    console.log('user logged in')
                }
            }
            return { email, password, handleSubmit, error, isPending }
        }
    }
</script>