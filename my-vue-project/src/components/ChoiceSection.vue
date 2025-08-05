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
        @include laptop {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-left: rem(20);
            padding-right: rem(20);

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    &__list {
        margin-top: fluid(70, 50);
        padding-block: fluid(70, 50) ;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: rem(20);
        text-align: center;
       // border-top: rem(3) solid var(--color-burgundy);
        padding-top: fluid(80, 40);

        @include mobile {
                display: flex;
                flex-wrap: nowrap;
                gap: rem(16);
                min-width: max-content; // чтобы всё помещалось  
        }
    }

    &__item {
        line-height: 1.6;
        min-width: rem(280); // или сколько тебе нужно
        flex-shrink: 0; // чтобы не сжимались

        @include mobile {
            line-height: 1.3;
        }
    }

    &__item-title {
        text-align: center;
        color: var(--color-dark);
        line-height: 2;

        @include mobile {
            line-height: 1.5;
        }
    }

    &__item-1 {
        position: relative;

        &::before {
            content: "1"; // заменяем цифру по необходимости
            position: absolute;
            top: calc(-1 * #{fluid(100, 60)}); // адаптивный отступ вверх
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
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

    &__item-2 {
        position: relative;

        &::before {
            content: "2"; // заменяем цифру по необходимости
            position: absolute;
            top: calc(-1 * #{fluid(100, 60)}); // адаптивный отступ вверх
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
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

    &__item-3 {
        position: relative;

        &::before {
            content: "3"; // заменяем цифру по необходимости
            position: absolute;
            top: calc(-1 * #{fluid(100, 60)}); // адаптивный отступ вверх
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
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

    &__item-4 {
        position: relative;

        &::before {
            content: "4"; // заменяем цифру по необходимости
            position: absolute;
            top: calc(-1 * #{fluid(100, 60)}); // адаптивный отступ вверх
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
            width: fluid(50, 30);
            height: fluid(50, 30);
            background-color: var(--color-burgundy);
            border-radius: fluid(12, 8);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: fluid(25, 20);
            font-weight: bold;
            color: var(--color-light);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

            opacity: 0;
            animation: floatIn 0.6s ease-out 0.3s forwards ;
        }
    }


    @keyframes floatIn {
        0% {
            transform: translateX(-50%) translateY(-20px);
            opacity: 0;
        }

        100% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
}
</style>