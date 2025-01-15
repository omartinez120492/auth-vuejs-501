<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useUserStore } from '../store'

const store = useUserStore();
const { loginUser } = store;
const router = useRouter()

const email = ref('cursortest@gmail.com')
const password = ref('grupo501')
const isActive = computed(() => {
    if (email.value.length > 4 && password.value.length >= 4) return false;
    return true;
})

const handledSubmit = () => {
    try {
        loginUser(email.value, password.value, router)
        email.value = password.value = ''
    } catch (error) {
        console.log({'ErrorLogin': error});
    }
}

</script>

<template>
    <div class="row">
        <div class="col-4"> </div>
        <div class="col-4">
            <h1 class=" text-center text-primary display-6"> Login </h1>
            <hr class="text-primary">
            <form @:submit.prevent="handledSubmit">
                <div class="form-floating mb-3">
                    <input id="correo" class="form-control" type="email" placeholder="omar1204@gmail.com" name="email"
                        v-model="email">
                    <label for="correo" class="text-primary">Email</label>

                </div>
                <div class="form-floating mb-3">
                    <input id="password" class="form-control" type="password" name="password" v-model="password">
                    <label for="password" class="text-primary">Password</label>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary p-2" :disabled="isActive"> Login </button>
                </div>
            </form>
        </div>
        <div class="col-4"> </div>
    </div>
</template>
