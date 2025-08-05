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
            <div class="footer__extra">
                <div class="footer__extra-menu">
                    <ul class="footer__extra-menu-list">
                        <li class="footer__extra-menu-item">
                            <a href="/" class="footer__extra-menu-link">
                                Условия использования
                            </a>
                        </li>
                        <li class="footer__extra-menu-item">
                            <a href="/" class="footer__extra-menu-link">
                                Политика конфендонциальности
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__soc1als soc1als">
                    <ul class="soc1als__list">
                        <li class="soc1als__item">
                            <a href="/" class="soc1als__link" target="_blank" aria-label="Twitter" title="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.0571 7.18114C21.0664 7.39235 21.0664 7.59395 21.0664 7.80515C21.0756 14.2084 16.3712 21.6004 7.76793 21.6004C5.23048 21.6004 2.73933 20.842 0.600098 19.4212C0.970528 19.4692 1.34096 19.4884 1.71139 19.4884C3.81358 19.4884 5.86021 18.7588 7.51789 17.4052C5.51756 17.3668 3.75802 16.0132 3.14681 14.0356C3.85063 14.1796 4.57296 14.1508 5.25826 13.9492C3.08198 13.5076 1.51691 11.5204 1.50765 9.20675C1.50765 9.18755 1.50765 9.16835 1.50765 9.14915C2.15591 9.52355 2.88751 9.73475 3.62837 9.75395C1.58174 8.33315 0.942746 5.50114 2.18369 3.28353C4.5637 6.31714 8.06427 8.15075 11.8241 8.35235C11.4445 6.67234 11.9631 4.90594 13.1762 3.71553C15.0561 1.88193 18.0196 1.97793 19.7977 3.92673C20.8441 3.71553 21.8535 3.31233 22.7704 2.74593C22.4185 3.86913 21.6869 4.81954 20.7145 5.42434C21.6406 5.30914 22.5481 5.04994 23.4001 4.66594C22.7704 5.64514 21.9739 6.48994 21.0571 7.18114Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li class="soc1als__item">
                            <a href="/" class="soc1als__link" target="_blank" aria-label="Medium" title="Medium">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.5374 12.2281C13.5374 15.9988 10.5069 19.0556 6.76883 19.0556C3.03073 19.0556 0 15.9981 0 12.2281C0 8.45806 3.0305 5.40039 6.76883 5.40039C10.5072 5.40039 13.5374 8.45737 13.5374 12.2281Z"
                                        fill="white" />
                                    <path
                                        d="M20.9627 12.2285C20.9627 15.7778 19.4474 18.6563 17.5783 18.6563C15.7091 18.6563 14.1938 15.7778 14.1938 12.2285C14.1938 8.67922 15.7089 5.80078 17.578 5.80078C19.4472 5.80078 20.9625 8.67829 20.9625 12.2285"
                                        fill="white" />
                                    <path
                                        d="M24 12.228C24 15.4073 23.4672 17.9862 22.8097 17.9862C22.1522 17.9862 21.6196 15.408 21.6196 12.228C21.6196 9.04797 22.1525 6.46973 22.8097 6.46973C23.467 6.46973 24 9.04774 24 12.228Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li class="soc1als__item">
                            <a href="/" class="soc1als__link" target="_blank" aria-label="LinkedIn" title="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.8647 1.59961H3.13554C2.72832 1.59961 2.33777 1.76138 2.04982 2.04933C1.76187 2.33728 1.6001 2.72783 1.6001 3.13505V20.8642C1.6001 21.2714 1.76187 21.6619 2.04982 21.9499C2.33777 22.2378 2.72832 22.3996 3.13554 22.3996H20.8647C21.2719 22.3996 21.6624 22.2378 21.9504 21.9499C22.2383 21.6619 22.4001 21.2714 22.4001 20.8642V3.13505C22.4001 2.72783 22.2383 2.33728 21.9504 2.04933C21.6624 1.76138 21.2719 1.59961 20.8647 1.59961ZM7.79965 19.3186H4.67243V9.38516H7.79965V19.3186ZM6.23388 8.00861C5.87915 8.00661 5.53296 7.89958 5.239 7.70102C4.94504 7.50246 4.71649 7.22127 4.58219 6.89294C4.44789 6.56461 4.41386 6.20386 4.48439 5.8562C4.55492 5.50855 4.72686 5.18958 4.9785 4.93955C5.23014 4.68952 5.5502 4.51964 5.8983 4.45134C6.2464 4.38304 6.60693 4.41939 6.93439 4.5558C7.26185 4.6922 7.54156 4.92255 7.73823 5.21778C7.9349 5.51301 8.03971 5.85988 8.03943 6.21461C8.04278 6.45211 7.99827 6.68784 7.90857 6.90777C7.81887 7.1277 7.68582 7.32732 7.51733 7.49473C7.34884 7.66215 7.14837 7.79392 6.92787 7.88221C6.70736 7.97049 6.47134 8.01348 6.23388 8.00861ZM19.3263 19.3273H16.2005V13.9005C16.2005 12.3001 15.5202 11.8061 14.642 11.8061C13.7147 11.8061 12.8047 12.5052 12.8047 13.9409V19.3273H9.67743V9.39239H12.6848V10.7689H12.7252C13.0271 10.1579 14.0844 9.11361 15.6979 9.11361C17.4428 9.11361 19.3278 10.1493 19.3278 13.1826L19.3263 19.3273Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <p class="footer__copyright">© <time datetime="2024">2025</time> Правотека. Все права защищены.</p>
            </div>
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
    background-color: var(--color-brown);
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
            font-size: fluid(25, 20);
        }

        &--list {
            &-logo {
                display: flex;
                column-gap: rem(5);
            }
        }

    }

    &__extra {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;
        padding-block: rem(40);
        font-size: fluid(14, 12);

        @include laptop {
            padding-block: rem(24);
        }

        @include mobile {
            flex-direction: column;
            row-gap: rem(20);
        }

        &-menu {
            &-list {
                display: flex;
                
            }

            &-item {
                &:not(:last-child) {
                    &::after {
                        content: '|';
                        margin-inline: rem(11);
                    }
                }
            }
        }
    }

}

.soc1als {
    &--3-cols {
        width: 100%;
        max-width: rem(308);

        .soc1als {
            &__list {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                row-gap: rem(10);

                @include laptop {
                    column-gap: rem(10);
                }
            }

            &__link {
                @include flex-center;
                width: 100%;
                height: rem(60);
                background-color: var(--color-dark-10);
                border: var(--border);
                border-radius: rem(6);
    
                @include laptop {
                    height: rem(48);
                }

                @include hover {
                    border-color: var(--color-accent);
                }
            }
        }      
    }
    &__list {
        display: flex;
        column-gap: rem(20);

        @include laptop {
            column-gap: rem(14);
        }
    }
    &__item {
        display: flex;
    }

    &__link {
        --size: #{rem(24)};
        color: var(--color-light);

        @include square(var(--size));
        @include laptop {
            --size: #{rem(20)};
        }
    }
}
</style>