<template>
    <div class="login">
        <h2>Вход</h2>
        <form @submit.prevent="onLogin">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Пароль" required />
            <button type="submit">Войти</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function onLogin() {
    if (email.value === 'test@test.com' && password.value === '123456') {
        localStorage.setItem('token', 'fake-jwt-token')
        router.push('/profile')
    } else {
        error.value = 'Неверный email или пароль'
    }
}
</script>

<style scoped>
.login {
    max-width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
}

input,
button {
    margin-top: 10px;
}

.error {
    color: red;
}
</style>