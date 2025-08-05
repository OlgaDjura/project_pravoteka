<template>
    <header ref="headerRef" class="header">
        <div class="header__body">
            <div class="header__body-inner container">
                <a href="/" class="header__logo logo" aria-label="Home" title="Home">
                    <Logo></Logo>
                    <span>Правотека</span>
                </a>

                <div class="header__overlay" ref="overlayRef" data-js-header-overlay>
                    <div class="header__menuAndButton">
                    <nav class="header__menu">
                        <ul class="header__menu-list">
                            <li v-for="link in navLinks" :key="link.href" class="header__menu_item">
                                <a :href="link.href" class="header__menu-link">
                                    {{ link.label }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <RouterLink to="/login-page" custom v-slot="{ navigate }">
                        <ButtonMy @click="navigate" class="header__button">Вход</ButtonMy>
                    </RouterLink>
                    <RouterLink to="/register-page" custom v-slot="{ navigate }">
                        <ButtonMy @click="navigate" class="header__button">Регистрация</ButtonMy>
                    </RouterLink>
                    </div>
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
import { ref, watch } from 'vue'
import ButtonMy from './ButtonMy.vue'
import Logo from './Logo.vue'


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



// Router и emit больше не нужны, так как используем RouterLink


const navLinks = [
    { href: '#home', label: 'Главная' },
    { href: '#how', label: 'Для юристов' },
    { href: '#help', label: 'Для клиентов' },
    { href: '#choice', label: 'Наши юристы' },
]


// Функция onButtonClick больше не нужна, так как используем RouterLink

const activeHref = ref('')
const headerRef = ref(null)


</script>

<style scoped lang="scss">
.header {
    position: sticky;
    z-index: 100;
    top: 0;
    animation-name: scrolling-header;
    animation-fill-mode: both;
   // background-color: var(--color-brown);

    @keyframes scrolling-header {
        to {
            box-shadow: 0 0 1rem var(--color-brown);
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
            background-color: var(--color-brown);
            transition-duration: var(--transition-duration);
            opacity: 0.9;
            


            &:not(.is-active) {
                @include hide;

                translate: 100%;
            }
        }
    }

    &__menuAndButton {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: fluid(10, 8);

        @include mobile  {
            flex-direction: column;
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


        &-link {
            padding: rem(14) rem(24);
            color: var(--color-light);

            &:hover {
                color: var(--color-sand);
            }

            @include laptop {
                padding: rem(10) rem(18);
            }

            @include mobile {
                color: var(--color-light);
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
        font-size: fluid(50, 23);
        font-weight: 500;
        display: flex;
        column-gap: rem(10);
        color: var(--color-light);
    }

    &__contact-us-link {
        @include mobile {
            width: 100%;
            max-width: rem(300);
            align-self: center;
        }
    }

    &__button {
        height: fluid(40, 20);
        font-size: fluid(22, 18)
        
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
        color: var(--color-brown);
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