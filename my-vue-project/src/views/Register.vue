<template>
    <section class="register auth-overlay">
        <div class="register__scroll-container">
        <div class="register__auth-modal">
            <div class="register__call">
                <div class="register__call--icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="19" y1="8" x2="19" y2="14" />
                        <line x1="22" y1="11" x2="16" y2="11" />
                    </svg>
                </div>
                <div class="register__call--title h2">Присоединяйтесь к нам</div>
                <div class="register__call--description">
                    Получите доступ к более чем 500 проверенным юристам и решите свои правовые вопросы
                </div>
                <svg class="register__call--wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f3f4f5" fill-opacity="0.5"
                        d="M0,224L30,224C60,224,120,224,180,240C240,256,300,288,360,282.7C420,277,480,235,540,213.3C600,192,660,192,720,197.3C780,203,840,213,900,197.3C960,181,1020,139,1080,133.3C1140,128,1200,160,1260,186.7C1320,213,1380,235,1410,245.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
                    </path>
                </svg>

            </div>

            
                <RegisterForm></RegisterForm>
                <PlatformAdvantagesSection></PlatformAdvantagesSection>
            

            <ButtonMy class="register__button" @click="close">Закрыть</ButtonMy>
            <FooterMy></FooterMy>

        </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'
import { useScrollLock } from '@/composables/useScrollLock'
import { onMounted } from 'vue'
import ButtonMy from '@/components/ButtonMy.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import PlatformAdvantagesSection from '@/components/PlatformAdvantagesSection.vue'
import FooterMy from '@/components/FooterMy.vue'

const router = useRouter()

const close = () => {
    router.push('/') // Возвращаемся на главную
}

const { lock } = useScrollLock()

onMounted(() => {
    lock() // Блокируем скролл body при открытии
})


// При монтировании
/*document.body.classList.add('no-scroll')

// При размонтировании
onBeforeUnmount(() => {
    document.body.classList.remove('no-scroll')
    // Восстановление позиции скролла
    const scrollY = document.body.style.top
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
})*/
</script>

<style scoped lang="scss">
@keyframes wave {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.auth-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    /* Изменили на flex-start */
    padding: 20px;
    overflow-y: auto;
    /* Основной скролл здесь */
}

.register {
    &__auth-modal {
        display: flex;
        flex-direction: column;
        row-gap: fluid(30, 20);
        width: fluid(1200, 390);
        //height: 100%;
        background-color: var(--color-gray-60);
        border-radius: fluid(8, 5);
        max-height: 100%;
        margin: 0 auto;
        min-height: 0;
        /* Критически важно */

    }

    &__call {
        background-color: var(--color-dark-15); //rgb(34, 102, 221);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: fluid(10, 8);
        padding: fluid(50, 30);
        color: var(--color-light);
        font-size: fluid(20, 15);
        position: relative;
        overflow: hidden;
        padding-top: 80px 20px 20px;
        flex-shrink: 0;

        &--icon {
            width: fluid(50, 20);
            height: fluid(50, 20);
        }

        &--title {
            font-weight: 600;
        }

        &--wave {
            position: absolute;
            bottom: 0;
            left: 0;
            animation: wave 10s linear infinite;
            width: 200%;
            /* Для анимации */
        }
    }

    &__button {
        max-width: rem(200);
        color: var(--color-light);
    }

    /* Добавляем контейнер для скролла */
    &__scroll-container {
        max-height: calc(100vh - 40px); /* Учитываем padding overlay */
    overflow-y: auto;
    }
}
</style>