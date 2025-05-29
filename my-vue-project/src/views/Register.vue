<template>
    <div class="auth-overlay">
        <div class="auth-modal">
            <h2>Регистрация</h2>
            <form>
                <!-- поля формы -->
            </form>
            <ButtonMy @click="close">Закрыть</ButtonMy>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ButtonMy from '@/components/ButtonMy.vue'
const router = useRouter()

const close = () => {
    router.push('/') // Возвращаемся на главную
}
</script>

<style scoped>
.auth-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.auth-modal {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
</style>