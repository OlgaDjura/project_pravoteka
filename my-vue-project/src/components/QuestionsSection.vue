<template>
    <section class="questions" id="questions" aria-label="questions-title">
            <div class="questions__main container">
                <h2 class="questions__title h1">Часто задаваемые вопросы</h2>
                <ul class="questions__list">
                    <li class="questions__item" v-for="(question, index) in questions" :key="'question-' + index">{{ question }}</li>
                </ul>
            </div>
        </section>

</template>

<script setup>
const questionsTitle = 'Часто задаваемые вопросы'

const questions = [
    'Как найти нужного юриста?', 
    'Как вы отбираете юристов?',
    'Где посмотреть отзывы на юристов?',
    'Какая стоимость юридических услуг?',
    'Как связаться с юристом?',
    'Нужно ли заключать договор с юристом?',
    'Мне не понравилась работа юриста. Как поступить в такой ситуации?'
]

</script>

<style scoped lang="scss">
.questions {
    &__main {
        margin-top: fluid(100, 50);
    
    }

    &__title {
        text-align: start;
    }

    &__list {
        display: flex;
        flex-direction: column;
        row-gap: rem(20);
        margin-top: fluid(50, 30);
        font-size: fluid(30, 18);
    }
}
</style>