<template>
    <section class="how" id="how" aria-label="how-title">
        <div class="how__main container">
            <h2 class="how__title-line h1" id="how-title">{{ titleH2 }}</h2>
            <ul class="how__list">
                <li v-for="(step, index) in steps" :key="'step-' + index" class="how__item">
                    <h3 class="how__item--title">{{ step.title }}</h3>
                    <p class="how__item--description" v-for="(paragraph, pIndex) in step.description"
                        :key="'desc-' + pIndex">
                        {{ paragraph }}
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const titleH2 = 'Как это работает'

const steps = [
    {
        title: 'Шаг 1: Опишите вопрос',
        description: [
            'Опишите ситуацию, в которой вам необходима юридическая помощь. Не стесняйтесь быть подробными – это поможет юристам лучше понять запрос и предложить наиболее эффективное решение.',
            'Юриста также можно подобрать самостоятельно из каталога.',
        ],
    },
    {
        title: 'Шаг 2: Найдите юриста',
        description: [
            'Запрос поможет нам индивидуально подойти к ситуации и с помощью алгоритма подобрать специалиста, чья квалификация и опыт наиболее подходят для решения проблемы.',
        ],
    },
]
</script>

<style scope lang="scss">
.how {
    &__main {   
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: fluid(70, 50);
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;       
        gap: fluid(200, 50);
        margin-top: fluid(40, 20);

        @include mobile {
            grid-template-columns: 1fr;

        }
    }

    &__item {
        line-height: 2;
        background: var(--color-coffee);
            box-shadow: 0 rem(5) rem(10) var(--color-brown);
            border-radius: rem(8);
            padding: fluid(20, 15);
            color: var(--color-light);

        @include mobile {
            line-height: 1.5;
        }

        &--title {
            margin-bottom: rem(10);
            font-weight: 600;
        }
    }
    
}
.line {
    position: relative;
    display: inline-block; // важно! иначе margin: auto не сработает

    &::after {
        content: "";
        display: block;
        width: fluid(70, 40); /* длина линии */
        height: fluid(5, 2);  /* толщина линии */
        background-color: black;
        margin: rem(15) auto 0 auto; /* отступ сверху + по центру */
    }
}
</style>