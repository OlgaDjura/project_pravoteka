<template>
    <div class="login-page">
        <!-- Фоновый градиент -->
        <div class="login-page__background">
            <div class="login-page__background-gradient"></div>
            <div class="login-page__background-pattern"></div>
        </div>

        <!-- Основной контент -->
        <div class="login-page__container">
            <!-- Левая часть с информацией -->
            <div class="login-page__info">
                <div class="login-page__logo">
                    <Logo></Logo>
                    <h1 class="login-page__logo-title">Правотека</h1>
                </div>
                
                <div class="login-page__content">
                    <h2 class="login-page__title h2">Добро пожаловать обратно</h2>
                    <p class="login-page__subtitle">
                        Войдите в свой аккаунт, чтобы получить доступ к проверенным юристам и решить ваши правовые вопросы
                    </p>
                    
                    <div class="login-page__benefits">
                        <div class="login-page__benefit">
                            <div class="login-page__benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                    <path d="M2 17l10 5 10-5"/>
                                    <path d="M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <span>Быстрый доступ к юристам</span>
                        </div>
                        <div class="login-page__benefit">
                            <div class="login-page__benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 12l2 2 4-4"/>
                                    <circle cx="12" cy="12" r="10"/>
                                </svg>
                            </div>
                            <span>Безопасные консультации</span>
                        </div>
                        <div class="login-page__benefit">
                            <div class="login-page__benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22,4 12,14.01 9,11.01"/>
                                </svg>
                            </div>
                            <span>Персональная поддержка</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Правая часть с формой -->
            <div class="login-page__form-section">
                <div class="login-page__form-container">
                    <div class="login-page__form-header">
                        <h3 class="login-page__form-title">Войти в аккаунт</h3>
                        <p class="login-page__form-subtitle">Введите свои данные для входа</p>
                    </div>

                    <form @submit.prevent="handleSubmit" class="login-page__form">
                        <div class="login-page__form-group" :class="{ 'login-page__form-group--error': errors.email }">
                            <label for="email" class="login-page__form-label">Email</label>
                            <input 
                                id="email" 
                                v-model="form.email" 
                                type="email" 
                                class="login-page__form-input" 
                                placeholder="example@mail.com"
                                @blur="validate('email')"
                            >
                            <span class="login-page__form-error" v-if="errors.email">{{ errors.email }}</span>
                        </div>

                        <div class="login-page__form-group" :class="{ 'login-page__form-group--error': errors.password }">
                            <label for="password" class="login-page__form-label">Пароль</label>
                            <input 
                                id="password" 
                                v-model="form.password" 
                                type="password" 
                                class="login-page__form-input" 
                                placeholder="Введите пароль"
                                @blur="validate('password')"
                            >
                            <span class="login-page__form-error" v-if="errors.password">{{ errors.password }}</span>
                        </div>

                        <div class="login-page__form-options">
                            <label class="login-page__checkbox-label">
                                <input 
                                    type="checkbox" 
                                    v-model="form.rememberMe"
                                    class="login-page__checkbox-input"
                                >
                                <span class="login-page__checkbox-custom"></span>
                                <span class="login-page__checkbox-text">Запомнить меня</span>
                            </label>
                            <a href="#" class="login-page__forgot-link">Забыли пароль?</a>
                        </div>

                        <button 
                            type="submit" 
                            class="login-page__submit"
                            :class="{ 'login-page__submit--loading': isSubmitting }" 
                            :disabled="isSubmitting"
                        >
                            <span v-if="!isSubmitting">Войти</span>
                            <span v-else>Входим...</span>
                        </button>
                    </form>

                    <div class="login-page__register-link">
                        <p>Нет аккаунта? <router-link to="/register-page" class="login-page__link">Зарегистрироваться</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '@/components/Logo.vue'

const router = useRouter()

// Данные формы
const form = ref({
    email: '',
    password: '',
    rememberMe: false
})

// Ошибки валидации
const errors = ref({
    email: '',
    password: ''
})

// Статус отправки
const isSubmitting = ref(false)

// Валидация
const validate = (field) => {
    const rules = {
        email: val => /^\S+@\S+\.\S+$/.test(val) || 'Введите корректный email',
        password: val => val.length >= 1 || 'Введите пароль'
    }

    errors.value[field] = rules[field](form.value[field]) || ''
}

// Отправка формы
const handleSubmit = async () => {
    Object.keys(form.value).forEach(field => {
        if (field !== 'rememberMe') {
            validate(field)
        }
    })
    
    if (Object.values(errors.value).some(e => e)) return

    isSubmitting.value = true

    try {
        console.log('Отправка данных входа:', form.value)
        await new Promise(resolve => setTimeout(resolve, 1500))
        // Очищаем историю и переходим на главную
        router.replace('/')
    } catch (error) {
        console.error('Ошибка входа:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style lang="scss" scoped>
.login-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-color: var(--color-sand);

    &__background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;

        &-gradient {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--color-sand) 0%, var(--color-light) 100%);
        }

        &-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 20% 80%, var(--color-coffee) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, var(--color-burgundy) 0%, transparent 50%);
            opacity: 0.1;
        }
    }

    &__container {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: fluid(60, 30);
        width: 100%;
        max-width: var(--container-width);
        margin: 0 auto;
        padding: fluid(40, 20);

        @include tablet {
            grid-template-columns: 1fr;
            gap: fluid(40, 20);
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: fluid(40, 20);

        @include tablet {
            text-align: center;
        }
    }

    &__logo {
        display: flex;
        align-items: center;
        gap: rem(15);

        &-img {
            width: rem(50);
            height: rem(50);
            object-fit: contain;
        }

        &-title {
            font-size: fluid(32, 24);
            font-weight: 600;
            color: var(--color-brown);
        }
    }

    &__title {
        color: var(--color-brown);
        margin-bottom: rem(15);
    }

    &__subtitle {
        font-size: fluid(20, 16);
        line-height: 1.6;
        color: var(--color-coffee);
        margin-bottom: rem(30);
    }

    &__benefits {
        display: flex;
        flex-direction: column;
        gap: rem(20);
    }

    &__benefit {
        display: flex;
        align-items: center;
        gap: rem(15);
        font-size: fluid(18, 16);
        color: var(--color-brown);

        &-icon {
            width: rem(24);
            height: rem(24);
            color: var(--color-burgundy);
            flex-shrink: 0;
        }
    }

    &__form-section {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__form-container {
        width: 100%;
        max-width: rem(500);
        background-color: var(--color-light);
        padding: fluid(40, 30);
        border-radius: rem(16);
        box-shadow: 0 rem(20) rem(40) rgba(0, 0, 0, 0.1);
        border: rem(1) solid rgba(106, 78, 55, 0.1);
    }

    &__form-header {
        text-align: center;
        margin-bottom: rem(30);
    }

    &__form-title {
        font-size: fluid(28, 24);
        font-weight: 600;
        color: var(--color-brown);
        margin-bottom: rem(10);
    }

    &__form-subtitle {
        font-size: fluid(16, 14);
        color: var(--color-coffee);
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: rem(20);
    }

    &__form-group {
        display: flex;
        flex-direction: column;
        gap: rem(8);

        &--error {
            .login-page__form-input {
                border-color: var(--color-burgundy);
                box-shadow: 0 0 0 rem(2) rgba(136, 41, 47, 0.2);
            }
        }
    }

    &__form-label {
        font-size: fluid(16, 14);
        font-weight: 500;
        color: var(--color-brown);
    }

    &__form-input {
        padding: rem(12) rem(16);
        border: rem(2) solid rgba(106, 78, 55, 0.2);
        border-radius: rem(8);
        font-size: fluid(16, 14);
        background-color: var(--color-light);
        color: var(--color-brown);
        transition: all var(--transition-duration);

        &::placeholder {
            color: var(--color-coffee);
            opacity: 0.6;
        }

        &:focus {
            outline: none;
            border-color: var(--color-burgundy);
            box-shadow: 0 0 0 rem(3) rgba(136, 41, 47, 0.1);
        }
    }

    &__form-error {
        font-size: fluid(14, 12);
        color: var(--color-burgundy);
        margin-top: rem(4);
    }

    &__form-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: rem(10);
    }

    &__checkbox-label {
        display: flex;
        align-items: center;
        gap: rem(12);
        cursor: pointer;
    }

    &__checkbox-input {
        display: none;
    }

    &__checkbox-custom {
        width: rem(20);
        height: rem(20);
        border: rem(2) solid var(--color-coffee);
        border-radius: rem(4);
        background-color: var(--color-light);
        flex-shrink: 0;
        position: relative;
        transition: all var(--transition-duration);

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: rem(10);
            height: rem(10);
            background-color: var(--color-burgundy);
            border-radius: rem(2);
            transition: transform var(--transition-duration);
        }
    }

    &__checkbox-input:checked + &__checkbox-custom {
        border-color: var(--color-burgundy);
        background-color: var(--color-burgundy);

        &::after {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    &__checkbox-text {
        font-size: fluid(14, 12);
        color: var(--color-coffee);
    }

    &__forgot-link {
        font-size: fluid(14, 12);
        color: var(--color-burgundy);
        text-decoration: none;
        font-weight: 500;
        transition: color var(--transition-duration);

        &:hover {
            color: var(--color-coffee);
        }
    }

    &__submit {
        width: 100%;
        padding: rem(16) rem(24);
        background-color: var(--color-burgundy);
        color: var(--color-light);
        border: none;
        border-radius: rem(8);
        font-size: fluid(18, 16);
        font-weight: 500;
        cursor: pointer;
        transition: all var(--transition-duration);
        margin-top: rem(10);

        &:hover:not(:disabled) {
            background-color: var(--color-coffee);
            transform: translateY(rem(-2));
        }

        &:disabled {
            background-color: var(--color-coffee);
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        &--loading {
            position: relative;
            color: transparent;

            &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: rem(20);
                height: rem(20);
                border: rem(2) solid rgba(255, 255, 255, 0.3);
                border-top-color: var(--color-light);
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            }
        }
    }

    &__register-link {
        text-align: center;
        margin-top: rem(25);
        font-size: fluid(16, 14);
        color: var(--color-coffee);
    }

    &__link {
        color: var(--color-burgundy);
        text-decoration: none;
        font-weight: 500;
        transition: color var(--transition-duration);

        &:hover {
            color: var(--color-coffee);
        }
    }
}

@keyframes spin {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style> 