<template>
    <div class="register-form">
        <h2 class="register-form__title h2">Создать аккаунт</h2>
        <p class="register-form__description">Заполните форму, чтобы начать работу с платформой</p>

        <form @submit.prevent="handleSubmit" class="register-form__form">

            <div class="register-form__container">
                <div class="register-form__group" :class="{ 'register-form__group--error': errors.name }">
                    <label for="name" class="register-form__label">Имя</label>
                    <input id="name" v-model="form.name" type="text" class="register-form__input" placeholder="Ваше имя"
                        @blur="validate('name')">
                    <span class="register-form__error" v-if="errors.name">{{ errors.name }}</span>
                </div>

                <div class="register-form__group" :class="{ 'register-form__group--error': errors.surname }">
                    <label for="surname" class="register-form__label">Фамилия</label>
                    <input id="surname" v-model="form.name" type="text" class="register-form__input"
                        placeholder="Ваше фамилия" @blur="validate('surname')">
                    <span class="register-form__error" v-if="errors.surname">{{ errors.surname }}</span>
                </div>
            </div>


            <!-- Поле Email -->
            <div class="register-form__group" :class="{ 'register-form__group--error': errors.email }">
                <label for="email" class="register-form__label">Email</label>
                <input id="email" v-model="form.email" type="email" class="register-form__input"
                    placeholder="example@mail.com" @blur="validate('email')">
                <span class="register-form__error" v-if="errors.email">{{ errors.email }}</span>
            </div>

            <!-- Поле Пароль -->
            <div class="register-form__group" :class="{ 'register-form__group--error': errors.password }">
                <label for="password" class="register-form__label">Пароль</label>
                <input id="password" v-model="form.password" type="password" class="register-form__input"
                    placeholder="Не менее 6 символов" @blur="validate('password')">
                <span class="register-form__error" v-if="errors.password">{{ errors.password }}</span>
            </div>

            <!-- Кнопка -->
            <button type="submit" class="register-form__submit"
                :class="{ 'register-form__submit--loading': isSubmitting }" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Зарегистрироваться</span>
                <span v-else>Отправляем...</span>
            </button>
        </form>

        <!-- Ссылка на вход -->
        <p class="register-form__login-link">
            Уже есть аккаунт? <router-link to="/login-page" class="register-form__login-link">Войти</router-link>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Данные формы
const form = ref({
    name: '',
    surname: '',
    email: '',
    password: ''
})

// Ошибки валидации
const errors = ref({
    name: '',
    surname: '',
    email: '',
    password: ''
})

// Статус отправки
const isSubmitting = ref(false)

// Валидация
const validate = (field) => {
    const rules = {
        name: val => val.length >= 3 || 'Имя слишком короткое',
        surname: val => val.length >= 3 || 'Имя слишком короткое',
        email: val => /^\S+@\S+\.\S+$/.test(val) || 'Некорректный email',
        password: val => val.length >= 6 || 'Пароль должен быть от 6 символов'
    }

    errors.value[field] = rules[field](form.value[field]) || ''
}

// Отправка формы
const handleSubmit = async () => {
    Object.keys(form.value).forEach(field => validate(field))
    if (Object.values(errors.value).some(e => e)) return

    isSubmitting.value = true

    try {
        console.log('Отправка данных:', form.value)
        await new Promise(resolve => setTimeout(resolve, 1500))
        router.push('/')
    } catch (error) {
        errors.value.api = 'Ошибка регистрации'
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style lang="scss" scoped>
.register-form {
    width: fluid(1000, 290);
    background-color: var(--color-light);
    margin: 0 auto;
    margin-top: fluid(50, 30);
    padding: 2rem;
    border-radius: 12px;

    &__title {
        text-align: center;
        color: #333;
        margin-bottom: fluid(15, 12);
        font-weight: 600;
    }

    &__description {
        text-align: center;
        margin-bottom: fluid(15, 12);
        font-size: fluid(20, 18);
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: fluid(10, 8);
    }

    &__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: rem(40);
    }

    &__group {
        margin-bottom: 1.2rem;
        position: relative;

        &--error {
            .register-form__input {
                border-color: #ff4444;
            }
        }
    }

    &__label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        font-size: fluid(20, 18);
    }

    &__input {
        width: 100%;
        padding: rem(10);
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 1rem;
        transition: all 0.3s ease;

        &:focus {
            border-color: var(--color-dark-15) ;//rgb(34, 102, 221);
            box-shadow: 0 0 0 2px rgba(34, 102, 221, 0.2);
            outline: none;
        }
    }

    &__error {
        color: #ff4444;
        font-size: fluid(20, 18);
        margin-top: 0.3rem;
        display: block;
    }

    &__submit {
        width: fluid(200, 180);
        padding: 0.75rem;
        background: var(--color-dark-20);
        color: white;
        border: none;
        border-radius: rem(8);
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 1rem;

        &:hover {
            background: darken(rgb(34, 102, 221), 10%);
        }

        &:disabled {
            background: lighten(rgb(34, 102, 221), 20%);
            cursor: not-allowed;
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
                width: 20px;
                height: 20px;
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-top-color: white;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            }
        }
    }

    &__login-link {
        text-align: center;
        margin-top: 1.5rem;
        color: #666;
        font-size: 0.9rem;

        a {
            color: rgb(34, 102, 221);
            text-decoration: none;
            font-weight: 500;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

@keyframes spin {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>