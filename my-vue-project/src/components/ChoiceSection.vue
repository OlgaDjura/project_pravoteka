<template>
    <section class="choice" id="choice" aria-label="choice-title">
        <div class="choice__main container">
            <h2 class="choice__title h1" id="choice-title">
                {{ choiceTitle }}
            </h2>
            <div class="choice__list-wrapper">
                <ul class="choice__list">
                    <li class="choice__item" v-for="(answer, index) in choiceAnswers" :key="'answer-' + index"
                        :class="'choice__item-' + (index + 1)">
                        <h3 class="choice__item-title">{{ answer.answer }}</h3>
                        <p class="choice__item-text" v-html="answer.text"></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script setup>
const choiceTitle = 'Как мы отбираем юристов?'

const choiceAnswers = [
    {
        answer: 'Образование',
        text: 'Проверяем наличие<br>высшего юридического образования<br> и наличие диплома в едином '
    },
    {
        answer: 'Опыт работы',
        text: 'Рассматриваем юристов<br> с релевантным опытом работы в <br>конкретных отраслях'
    },
    {
        answer: 'Успешные проекты',
        text: 'Наличие успешных проектов<br> также является важным <br>показателем профессионализма'
    },
    {
        answer: 'Этичсекие принципы',
        text: 'Для нас важно,<br> чтобы  юристы разделяли <br>  наши ценности '
    },
]
</script>

<style scoped lang="scss">
.choice {
    &__title {
        text-align: start;
    }

    &__list-wrapper {
        overflow-x: hidden; // убираем горизонтальный скролл на всякий случай
    }

    &__list {
        padding-block: fluid(70, 50);
        padding-top: fluid(80, 40);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: rem(20);
        text-align: center;

        @include tablet {
            grid-template-columns: repeat(2, 1fr);
        }

        @include mobile {
            grid-template-columns: 1fr;
        }
    }

    &__item {
        line-height: 1.6;

        @include mobile {
            line-height: 1.3;
        }
    }

    &__item-title {
        text-align: center;
        color: var(--color-brown);
        line-height: 2;

        @include mobile {
            line-height: 1.5;
        }
    }

    // Нумерация элементов
    @for $i from 1 through 4 {
        &__item-#{$i} {
            position: relative;
            padding-top: fluid(80, 60);

            &::before {
                content: "#{$i}";
                position: absolute;
                top: rem(10);
                left: 50%;
                transform: translateX(-50%);
                width: fluid(50, 30);
                height: fluid(50, 30);
                background-color: var(--color-burgundy);
                border-radius: rem(12);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: fluid(25, 20);
                font-weight: bold;
                color: var(--color-light);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

                opacity: 0;
                animation: floatIn 0.6s ease-out 0.3s forwards;
            }
        }
    }

    @keyframes floatIn {
        0% {
            transform: translateX(-50%) scale(0.8);
            opacity: 0;
        }
        100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
        }
    }
}
</style>