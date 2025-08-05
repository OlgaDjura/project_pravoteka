<template>
    <div class="stats container">
        <h2 class="stats__title h1">Наша статистика</h2>
        <div class="stats__grid">
            <StatCard v-for="stat in stats" :key="stat.id" :icon-type="stat.iconType" :value="stat.value"
                :label="stat.label" :trend-text="stat.trendText" :trend-direction="stat.trendDirection"
                class="stats__card" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import StatCard from './StatCard.vue';

const stats = ref([
    {
        id: 1,
        iconType: 'case',
        value: '10,000+',
        label: 'Успешных дел',
        trendText: '+15% за год',
        trendDirection: 'up'
    },
    {
        id: 2,
        iconType: 'lawyer',
        value: '5,200+',
        label: 'Юристов в базе',
        trendText: 'Проверенные специалисты',
        trendDirection: 'neutral'
    },
    {
        id: 3,
        iconType: 'default',
        value: '98%',
        label: 'Довольных клиентов',
        trendText: 'Высокий уровень доверия',
        trendDirection: 'up'
    },
    {
        id: 4,
        iconType: 'rating',
        value: '4.9',
        label: 'Средний рейтинг',
        trendText: '25,000 отзывов',
        trendDirection: 'up'
    }
]);
</script>

<style lang="scss" scoped>
.stats {
    margin-block: fluid(50, 30);
    padding: fluid(15, 10);
    background-color: rgb(136, 41, 47, 0.9);//rgba(111, 78, 55, 0.7);
    border-radius: rem(12);
    box-shadow: 0 5px 10px var(--color-brown);

    &__title {
        text-align: center;
        color: var(--color-light);
        margin-bottom: 2rem;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(rem(250), 1fr));
        gap: fluid(10, 8);
    }

    &__card {

        // Модификаторы для карточек (пример)
        &--highlight {
            border: 2px solid var(--color-brown);
        }
    }
}
</style>