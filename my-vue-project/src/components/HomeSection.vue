<template>
    <section class="home" id="home" aria-label="home-title">
        <div class="home__main container">
            <div class="home__body">
                <h1 class="home__title" id="home-title">{{ title }}</h1>
                <div class="home__description">
                    <p v-for="(paragraph, index) in description" :key="index">
                        {{ paragraph }}
                    </p>
                </div>
                <RouterLink to="/register-page" custom v-slot="{ navigate }">
                        <ButtonMy @click="navigate" class="home__button">Регистрация</ButtonMy>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import ButtonMy from './ButtonMy.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = 'Найди своего юриста'

const description = [
    'Правотека – это пространство, где вы найдете юриста для решения правовых задач.',
    'Мы помогаем пользователям найти квалифицированных юристов, которые специализируются в различных областях права.',
]


</script>

<style scope lang="scss">
.home {
    
    //width: 100%;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;



    &__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgb(136, 41, 47, 0.7); 
        border-radius: rem(8);
        padding: fluid(20, 15);
    }

    &__title {
        color: var(--color-light);
    }

    &__description {
        //font-size: fluid(22, 14);
        color: var(--color-light);
        line-height: 2;
    }

    &__button {
        background-color: var(--color-coffee) !important;
        width: fluid(400, 300);
        height: fluid(50, 30);
        font-size: fluid(22, 18) !important;
    }





}
</style>