<template>
    <header ref="headerRef" class="header" :class="$attrs.class">
        <div class="header__body">
            <div class="header__body-inner container">
                <RouterLink to="/" class="header__logo logo" aria-label="Home" title="Home">
                    <Logo></Logo>
                    <span>Правотека</span>
                </RouterLink>

                <div class="header__overlay" ref="overlayRef" data-js-header-overlay>
                    <div class="header__menuAndButton">
                    <nav class="header__menu">
                        <ul class="header__menu-list">
                            <li v-for="link in navLinks" :key="link.to" class="header__menu_item">
                                <RouterLink :to="link.to" class="header__menu-link" active-class="is-active" @click="closeMenu">
                                    {{ link.label }}
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <RouterLink to="/login-page" custom v-slot="{ navigate }">
                        <ButtonMy @click="() => { navigate(); closeMenu(); }" class="header__button">Вход</ButtonMy>
                    </RouterLink>
                    <RouterLink to="/register-page" custom v-slot="{ navigate }">
                        <ButtonMy @click="() => { navigate(); closeMenu(); }" class="header__button">Регистрация</ButtonMy>
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
import { RouterLink } from 'vue-router'
import ButtonMy from './ButtonMy.vue'
import Logo from './Logo.vue'


const isMenuOpen = ref(false)
const burgerButtonRef = ref(null)
const overlayRef = ref(null)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
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
    { to: '/', label: 'Главная' },
    { to: '/register-for-lawyers-page', label: 'Для юристов' },
    { to: '/register-page', label: 'Для клиентов' },
    { to: '/', label: 'Наши юристы' },
]


// Функция onButtonClick больше не нужна, так как используем RouterLink

const activeHref = ref('')
const headerRef = ref(null)


</script>

<style scoped lang="scss">
.header {
    overflow-x: hidden;
    position: sticky;
    z-index: 100;
    top: 0;
    animation-name: scrolling-header;
    animation-fill-mode: both;
    animation-timeline: scroll();
    animation-range: rem(100) rem(200);
    
    @keyframes scrolling-header {
        to {
            box-shadow: 0 0 1rem var(--color-brown);
        }
    }

    &__body {
        background-color: inherit;
        backdrop-filter: inherit;
        transition: inherit;
        
        @include mobile {
            padding-block: rem(20);
        }

        &-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: rem(20);
            min-height: rem(60);

            @include laptop {
                column-gap: rem(15);
            }
        }
    }

    &__overlay {
        @include mobile-above {
            display: contents;

        }

        @include mobile {
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            row-gap: rem(5);
            background-color: var(--color-brown);
            transition-duration: var(--transition-duration);
            opacity: 0.95;
            


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
        gap: fluid(15, 10);

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
            gap: rem(8);

            @include tablet {
                flex-wrap: wrap;
                gap: rem(12);
            }

            @include mobile {
                flex-direction: column;
                row-gap: 1rem;
            }
        }


        &-link {
            @include fluid-text(20, 17);
            padding: rem(14) rem(24);
            color: var(--color-light);
            text-decoration: none;
            display: inline-block;
            white-space: nowrap;
            text-align: center;

            &:hover {
                color: var(--color-sand);
            }

            @include laptop {
                padding: rem(10) rem(18);
            }

            @include mobile {
                color: var(--color-light);
                white-space: normal;
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
        @include fluid-text(40, 35);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        display: flex;
        column-gap: rem(10);
        color: var(--color-light);
        text-decoration: none;
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
        font-size: fluid(22, 15)
        
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
        background-color: var(--color-light);
        border-radius: 1rem;
        transition-duration: var(--transition-duration);

        &:last-child {
            align-self: end;
            width: 55%;
        }
    }
}
}
</style>