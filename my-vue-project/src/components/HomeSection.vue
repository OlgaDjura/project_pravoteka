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
            </div>
            <div class="home__banner">
                <img :src="banner.src" :alt="banner.alt" class="home__banner--image" :width="banner.width"
                    :height="banner.height" />
            </div>
        </div>
    </section>
</template>

<script setup>
const title = 'Найди своего юриста'

const description = [
    'Правотека – это пространство, где вы найдете юриста для решения правовых задач.',
    'Мы помогаем пользователям найти квалифицированных юристов, которые специализируются в различных областях права.',
]

const banner = {
    src: new URL('../assets/images/lawyers-banner.jpeg', import.meta.url).href,
    alt: 'lawyers',
    width: 421,
    height: 581,
}
</script>

<style scope lang="scss">
.home {
    &__main {
        display: grid;
        grid-template-columns: 60% 1fr;
        grid-template-areas: "text image";
        align-items: center;
        margin-top: fluid(200, 50);

        @include tablet {
            grid-template-columns: 1fr;
            grid-template-areas: 
            "image"
            "text"; // поменяли местами!
            gap: rem(30);

        }
    }

    &__body {
        grid-area: text;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        
    }

    &__description {
        font-size: fluid(22, 16);
        line-height: 2;
    }

    &__banner {
        grid-area: image;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-radius: fluid(12, 10);
        overflow: hidden;
        width: rem(421); 
        height: rem(581);
        
        justify-self: end; // на десктопе
    
        @include tablet {
          justify-self: center; // ВОТ ЭТО ВАЖНО — на планшете по центру!
          width: rem(321); // можно убрать фиксированную ширину
          height: rem(481); // и высоту, пусть картинка сама растёт

        }

        @include mobile {
            width: rem(321); // можно убрать фиксированную ширину
            height: rem(381);
        }

        img {
        display: block;
        max-width: 100%;
        height: auto;
        transition: transform 0.3s ease;
        }
        @include hover {
        transform: scale(1.05) translateY(-5px);
        box-shadow: 0 10px 20px var(--color-dark-20);
        }
        }
    


}
</style>