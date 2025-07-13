<template>
    <section class="footer" id="contacts" aria-label="footer">
        <div class="footer__main container">
            <nav class="footer__menu">
                <div class="footer__menu--list">
                    <div class="footer__menu--list-logo"><Logo></Logo>
                    <h2 class="footer__menu--title">Правотека</h2></div>
                    
                    <p>Надёжная платформа для поиска квалифицированных юристов
                    </p>
                </div>
                <div class="footer__menu--list-wrapper">
                    <h2 class="footer__menu--title">Услуги</h2>
                    <List :items="service" @item-click="logItem" />
                </div>
                <div class="footer__menu--list-wrapper">
                    <h2 class="footer__menu--title">Информация</h2>
                    <List :items="info" @item-click="logItem" />
                </div>
                <div class="footer__menu--list-wrapper">
                    <h2 class="footer__menu--title">Контакты</h2>
                    <List :items="contacts" @item-click="logItem" :icons="contactsIcons" />
                </div>
            </nav>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import List from './List.vue';
import Logo from './Logo.vue';

const service = ref(['Поиск юристов', 'Оценка проблемы', 'Консультации', 'Представительство в суде',]);
const info = ref(['О нас', 'Как это работает', 'Отзывы', 'Блог',]);
const contacts = ref(['+7 (800) 555-35-35', 'info@pravoteka.ru', 'Москва, ул. Примерная, 123',]);
const contactsIcons = [`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
</svg>`, 
`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>`
];

// Обработчик клика (общий для всех списков)
const logItem = (item) => {
    console.log('Выбрано:', item);
};
</script>

<style scoped lang="scss">
.footer {
    background-color: var(--color-dark-15);
    color: var(--color-light);
    padding: rem(50) 0;

    &__menu {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        @include mobile {
            grid-template-columns: repeat(2, 1fr);
            gap: rem(13);
        }

        &--list-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: start;
            gap: rem(10);
        }

        &--title {
            text-align: start;
            font-size: fluid(30, 25);
        }

        &--list {
            &-logo {
                display: flex;
                column-gap: rem(5);
            }
        }

    }


}
</style>