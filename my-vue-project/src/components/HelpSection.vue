<template>
    <section class="help" id="help" aria-label="help-title">
        <div class="help__main container">
            <!-- Заголовок секции -->
            <h2 class="how__title-line h1" id="help-title">{{ sectionTitle }}</h2>

            <!-- Список карточек, генерируем с помощью v-for -->
            <ul class="help__list">
                <li v-for="(card, index) in helpCards" :key="'card-' + index" class="help__item">
                    <a href="/" class="help__help-card">
                        <!-- Подставляем путь к изображению -->
                        <img :src="card.image" alt="" class="help__help-card-image" width="320" height="220" />

                        <!-- Подпись под картинкой -->
                        <div class="help__help-card-description">
                            <p>{{ card.text }}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import card1 from '../assets/images/card-1-1.jpeg'
import card2 from '../assets/images/card-2-2.jpg'
import card3 from '../assets/images/card-3-3.png'
// Заголовок секции
const sectionTitle = 'Кому помогают юристы'

// Массив карточек — можно легко добавить новые, просто добавив объект
const helpCards = [
    {
        image: card1,
        text: 'Физическим лицам',
    },
    {
        image: card2,
        text: 'Бизнесу',
    },
    {
        image: card3,
        text: 'Индивидуальным предпринимателям',
    },
]
</script>

<style scope lang="scss">
.help {
    padding-block: fluid(100, 50);
    
    &__main {        
        display: flex;
        flex-direction: column;
        gap: fluid(70, 50);
        text-align: center;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: fluid(40, 10);
        height: auto;

        @include mobile {
            grid-template-columns: 1fr;
            
        }
    }

    &__item {
        background-color: var(--color-coffee);
        border-radius: fluid(22, 12);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        color: var(--color-light);

        display: block;
        max-width: 100%;
        height: auto;
        transition: transform 0.3s ease;

        @include hover {
            transform: scale(1.05) translateY(-5px);
            box-shadow: 0 10px 20px var(--color-coffee);
            }

        @include mobile {
            margin-left: rem(20);
            margin-right: rem(20);
        }
    }

    &__help-card {
        display: flex;
        flex-direction: column;
        gap: fluid(10, 7);
        padding: fluid(30, 20);
        text-align: start; 
    }

    &__help-card-image {
        width: 100%;
        border-radius: fluid(22, 12);

        @include mobile {
            width: auto;
            object-fit: contain;
        }
    }

    &__help-card-description {
        @include tablet {
            font-size: rem(12);
        }
        p{
            margin: 0;
        }
        margin: 0;
    }
}
</style>