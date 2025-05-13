<template>
<section class="we" id="we" aria-label="we-title">
            <div class="we__main container">
                <h2 class="we__title h1" id="we-title">{{ weTitle }}</h2>
                <ul class="we__list">
                    <li class="we__item " v-for="(answer, index) in weAnswers" :key="'answer-' + index">
                        <h3 class="we__item-title">{{ answer.answer }}</h3>
                        <p class="we__item-text">{{ answer.text }}</p>
                    </li>
                </ul>
                <div class="we__description"><p>Правотека – это ваш надежный помощник в мире права. Доверьтесь нам, и мы поможем вам найти юриста, который 
                    защитит ваши интересы и поможет решить  правовые проблемы.</p></div>
            </div>
        </section>
</template>

<script setup>
import banner from '@/assets/images/why_pravoteka.png'

const weTitle = 'Почему Правотека?'

const weAnswers = [
    {
        answer: 'Насдежность',
        text:'Правотека – это надежная платформа, которая заботится о безопасности данных'
    },
    {
        answer: 'Квалификация',
        text:'Мы работаем только с квалифицированными юристами'
    },
    {
        answer: 'Скорость и удобство',
        text:'Правотека позволяет быстро и легко найти своего юриста'
    },
    {
        answer: 'Широкий выбор',
        text:'У нас вы найдете юристов по различным направлениям права'
    },
]

</script>

<style scoped lang="scss">
.we {
        position: relative;
        z-index: 1;
        margin-top: fluid(50, 30);
        
        &::before {
        content: "";//для прозрачности фона
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../assets/images/why_pravoteka.png');
        background-size: cover;
        background-position: center;
        opacity: 0.8;
        z-index: -1;
        } 

        &__main {
            padding: rem(85) rem(63);
        }

        &__list {
            margin-top: fluid(70, 50);
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: rem(40);

            @include laptop {
                grid-template-columns: repeat(2, 1fr);
            }

            @include laptop {
                grid-template-columns: 1fr;
            }
        }

        &__item-text, 
        &__description  {
            font-family: --font-family-additionally;
            font-size: fluid(20, 16);
            color: var(--color-light);
        }

        &__title,
        &__item-title {
            text-align: start;
            font-weight: 400;
            text-shadow:
            1px 1px 2px rgba(0,0,0,0.3),
            3px 3px 6px rgba(0,0,0,0.15);
            -webkit-text-stroke: 1px var(--color-light);
        }

        &__description {

        }
}
</style>