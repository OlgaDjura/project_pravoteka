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
        background-image: linear-gradient(90deg,rgba(58, 37, 23, 1) 9%, rgba(136, 41, 47, 1) 87%);;

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

        &__item {
            background: var(--color-coffee);
            box-shadow: 0 rem(5) rem(10) var(--color-brown);
            border-radius: rem(8);
            padding: fluid(20, 15);
        }

        &__item-text, 
        &__description  {
            font-size: fluid(20, 16);
            color: var(--color-light);
        }

        &__title,
        &__item-title {
            text-align: start;
            font-weight: 400;
            color: var(--color-light);
            
        }

        &__item-title {
            margin-bottom: fluid(20, 15);
        }

}
</style>