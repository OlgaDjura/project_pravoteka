<template>
    <header ref="headerRef" class="header">
        <div class="header__body">
            <div class="header__body-inner container">
                <a href="/" class="header__logo logo" aria-label="Home" title="Home">
                    <span>Правотека</span>
                </a>

                <div class="header__overlay" ref="overlayRef" data-js-header-overlay>
                    <nav class="header__menu">
                        <ul class="header__menu-list">
                            <li v-for="link in navLinks" :key="link.href" class="header__menu_item">
                                <a :href="link.href" class="header__menu-link"
                                    :class="{ 'is-active': activeHref === link.href }"
                                    @click.prevent="scrollToSection(link.href)">
                                    {{ link.label }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <RouterLink to="/login">
                        <ButtonMy @click="onButtonClick">Вход</ButtonMy>
                    </RouterLink>
                    <RouterLink to="/register">
                        <ButtonMy @click="onButtonClick">Регистрация</ButtonMy>
                    </RouterLink>
                </div>

                <button class="header__burger-button burger-button visible-mobile" type="button" aria-label="Open menu"
                    title="Open menu" ref="burgerButtonRef" @click="toggleMenu">
                    <span class="burger-button__line"></span>
                    <span class="burger-button__line"></span>
                    <span class="burger-button__line"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import ButtonMy from './ButtonMy.vue'
import { useRouter } from 'vue-router'  // Импортируем useRouter
import { defineEmits } from 'vue'


const isMenuOpen = ref(false)
const burgerButtonRef = ref(null)
const overlayRef = ref(null)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, (newVal) => {
    const html = document.documentElement

    if (burgerButtonRef.value && overlayRef.value) {
        burgerButtonRef.value.classList.toggle('is-active', newVal)
        overlayRef.value.classList.toggle('is-active', newVal)
    }

    html.classList.toggle('is-lock', newVal)
})



const router = useRouter()  // Получаем доступ к маршрутизатору

const emit = defineEmits()


const navLinks = [
    { href: '#home', label: 'ГЛАВНАЯ' },
    { href: '#how', label: 'КАК РАБОТАЕТ' },
    { href: '#help', label: 'КОМУ ПОМОГАЕМ' },
    { href: '#choice', label: 'ОТБОР' },
    { href: '#we', label: 'ПОЧЕМУ МЫ' },
    { href: '#questions', label: 'ВОПРОСЫ' },
    { href: '#materials', label: 'ПОЛЕЗНЫЕ МАТЕРИАЛЫ' },
    { href: '#contacts', label: 'КОНТАКТЫ' },
]


const onButtonClick = () => {
    // Логика для входа — пример с переходом на личный кабинет
    console.log('Попытка входа в личный кабинет');
    // Эмитим событие о том, что пользователь вошел
    emit('login')
    // Здесь может быть проверка авторизации, например:
    // если авторизован, переходим на /dashboard (личный кабинет)
    router.push('/dashboard')  // Перенаправление на личный кабинет
}

const activeHref = ref('')
const headerRef = ref(null)

const updateActiveLink = () => {
    const scrollY = window.scrollY + (headerRef.value?.offsetHeight || 0) + 10

    navLinks.forEach(link => {
        const section = document.querySelector(link.href)
        if (!section) return

        const top = section.offsetTop
        const height = section.offsetHeight

        if (scrollY >= top && scrollY < top + height) {
            console.log('Активная секция:', link.href) // ВРЕМЕННО

            activeHref.value = link.href
        }
    })
}


const scrollToSection = (href) => {
    const headerHeight = headerRef.value?.offsetHeight || 0
    const section = document.querySelector(href)

    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        const scrollPosition = sectionTop - headerHeight

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        })
    }

    isMenuOpen.value = false
}


onMounted(() => {
    window.addEventListener('scroll', updateActiveLink)
    updateActiveLink() // сразу выделить активную
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveLink)
})
</script>

<style scoped lang="scss">
.header {
    position: sticky;
    z-index: 100;
    top: 0;
    animation-name: scrolling-header;
    animation-fill-mode: both;
    animation-timeline: scroll();
    //animation-range: rem(100) rem(200);
    border-top: var(--border);
    border-bottom: var(--border);
    background-color: var(--color-gray-50);

    @keyframes scrolling-header {
        to {
            box-shadow: 0 0 1rem var(--color-dark-20);
        }
    }

    &__body {


        @include mobile {
            padding-block: rem(20);
        }

        &-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: 1rem;
        }
    }

    &__overlay {
        display: flex;

        @include mobile-above {
            display: contents;

        }

        @include mobile {
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 3rem;
            padding: 1rem;
            background-color: var(--color-gray-50);
            transition-duration: var(--transition-duration);
            opacity: 0.8;


            &:not(.is-active) {
                @include hide;

                translate: 100%;
            }
        }
    }

    &__menu {

        @include mobile {
            overflow-y: auto;
        }

        &-list {
            display: flex;
            align-items: center;
            //column-gap: rem(16);

            @include laptop {
                flex-wrap: wrap;
            }

            @include mobile {
                flex-direction: column;
                row-gap: 1rem;
            }
        }

        &_item {
            font-size: fluid(16, 14);
        }


        &-link {
            padding: rem(14) rem(24);
            color: var(--color-dark);

            &:hover {
                background-color: var(--color-dark-20);
                color: var(--color-light);
            }

            @include laptop {
                padding: rem(10) rem(18);
            }

            &.is-active {
                color: var(--color-light);
                font-weight: 500;
                background-color: var(--color-dark-20);
                pointer-events: none;
            }
        }
    }

    &__logo {
        font-size: fluid(30, 15);
        font-weight: 500;
    }

    &__contact-us-link {
        @include mobile {
            width: 100%;
            max-width: rem(300);
            align-self: center;
        }
    }


}

.burger-button {
    @include square(rem(34));

    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    padding: rem(8.5) rem(4.25);
    color: var(--color-light);
    background-color: transparent;
    border: none;

    @include hover {
        color: var(--color-dark-20);
    }

    &.is-active {

        .burger-button__line {
            &:first-child {
                rotate: 45deg;
                transform-origin: 0;
                translate: 0.25em -0.1em;
            }

            &:nth-child(2) {
                rotate: -45deg;
            }

            &:last-child {
                width: 0;
            }
        }
    }

    &__line {
        width: 100%;
        height: rem(2);
        background-color: currentColor;
        border-radius: 1rem;
        transition-duration: var(--transition-duration);

        &:last-child {
            align-self: end;
            width: 55%;
        }
    }
}
</style>