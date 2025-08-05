<template>
    <section class="reviews">
        <h2 class="reviews__title h1">Отзывы наших клиентов</h2>
        <div class="reviews__grid">
            <div v-for="(review, index) in reviews" :key="index" class="reviews__card">
                <div class="reviews__header">
                    <div class="reviews__avatar">
                        <img :src="review.avatar" 
                        :alt="review.author" 
                        class="reviews__avatar-img"
                        @error="handleImageError">
                    </div>
                    <div class="reviews__author-info">
                        <h3 class="reviews__author">{{ review.author }}</h3>
                        <div class="reviews__date">{{ review.date }}</div>
                    </div>
                </div>
                <div class="reviews__rating">
                    <span v-for="star in 5" :key="star" class="reviews__star"
                        :class="{ 'reviews__star--active': star <= review.rating }">★</span>
                </div>
                <p class="reviews__text">{{ review.text }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import Profile from '@/assets/images/reviews/Profile.png'
import Profile1 from '@/assets/images/reviews/Profile (1).png'

const reviews = [
    {
        author: 'Анна К.',
        date: '15 мая 2024',
        rating: 5,
        text: 'Быстро нашли для меня идеального юриста по семейным делам. Профессионал высшего класса!',
        avatar: Profile 
    },
    {
        author: 'Игорь С.',
        date: '3 июня 2024',
        rating: 4,
        text: 'Удобный сервис, но хотелось бы больше специалистов по налоговому праву.',
        avatar: Profile1
    },
    {
        author: 'Игорь С.',
        date: '3 июня 2024',
        rating: 4,
        text: 'Удобный сервис, но хотелось бы больше специалистов по налоговому праву.',
        avatar: Profile1
    },
    
];


const handleImageError = (event) => {
    event.target.style.display = 'none';
    console.log('Аватар не загрузился, можно показать инициалы');
};
</script>
<style lang="scss" scoped>
.reviews {
    $self: &;
    padding: 3rem 0;

    &__title {
        text-align: center;
        margin-bottom: fluid(20, 15);
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(rem(300), 1fr));
        gap: rem(30);
        max-width: var(--container-width);
        margin: 0 auto;
        padding: 0 1rem;
    }

    &__card {
        background: rgb(136, 41, 47);
        padding: 1.5rem;
        border-radius: rem(8);
        box-shadow: 0 4px 12px rgba(136, 41, 47, 0.1);
        transition: transform 0.3s;

        &:hover {
            transform: translateY(-5px);
        }
    }

    &__header {
        display: flex;
        align-items: center;
        gap: rem(10);
        margin-bottom: rem(10);
    }

    &__avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;

        &-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__author {
        margin: 0;
    }

    &__date {
        font-size: 0.8rem;
        color: var(--color-light);
    }

    &__rating {
        margin: 0.5rem 0;
    }

    &__star {
        color: #D2B48C;
        /* Песочный (неактивная звезда) */
        font-size: 1.2rem;
        margin-right: 0.2rem;

        &--active {
            color: var(--color-brown);
            /* Акцентный цвет для активных звёзд */
        }
    }

    &__text {
        color: var(--color-light);
        /* Тёмный кофейный для текста */
        line-height: 1.5;
    }

    /* Адаптив */
    @media (max-width: 768px) {
        &__grid {
            grid-template-columns: 1fr;
        }
    }
}
</style>