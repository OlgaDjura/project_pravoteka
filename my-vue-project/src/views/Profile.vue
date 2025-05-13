<template>
    <div>
        <h2>Личный кабинет</h2>
        <p>Добро пожаловать!</p>
        <button @click="logout">Выйти</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
    localStorage.removeItem('token')
    router.push('/login')
}
</script>