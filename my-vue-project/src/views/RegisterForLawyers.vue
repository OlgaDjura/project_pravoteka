<template>
    <div class="register-page">
        <!-- Фоновый градиент -->
        <div class="register-page__background">
            <div class="register-page__background-gradient"></div>
            <div class="register-page__background-pattern"></div>
        </div>

        <!-- Основной контент -->
        <div class="register-page__container">
            <!-- Заголовок и навигация -->
            <div class="register-page__header">
                <div class="register-page__logo">
                    <Logo></Logo>
                    <h1 class="register-page__logo-title">Правотека</h1>
                </div>
            </div>

            <!-- Заголовок страницы -->
            <div class="register-page__page-header">
                <h2 class="register-page__title h2">Регистрация для юристов</h2>
                <p class="register-page__subtitle">
                    Присоединяйтесь к платформе как юрист или адвокат. Получите доступ к клиентам и расширьте свою практику
                </p>
            </div>

            <!-- Форма -->
            <div class="register-page__form-section">
                <div class="register-page__form-container">
                    <div class="register-page__form-header">
                        <div class="register-page__form-header-content">
                            <h3 class="register-page__form-title">Создать аккаунт юриста</h3>
                            <p class="register-page__form-subtitle">Заполните форму, чтобы начать работу на платформе</p>
                        </div>
                        <RouterLink to="/register-page" custom v-slot="{ navigate }">
                            <ButtonMy @click="navigate" class="register-page__button">Для клиентов</ButtonMy>
                        </RouterLink>
                    </div>

                    <form @submit.prevent="handleSubmit" class="register-page__form">
                        <!-- Выбор типа юриста -->
                        <div class="register-page__form-group">
                            <label class="register-page__form-label">Тип юриста</label>
                            <div class="register-page__radio-group">
                                <label class="register-page__radio-label">
                                    <input 
                                        type="radio" 
                                        v-model="form.lawyerType" 
                                        value="lawyer"
                                        class="register-page__radio-input"
                                    >
                                    <span class="register-page__radio-custom"></span>
                                    <span class="register-page__radio-text">Юрист</span>
                                </label>
                                <label class="register-page__radio-label">
                                    <input 
                                        type="radio" 
                                        v-model="form.lawyerType" 
                                        value="advocate"
                                        class="register-page__radio-input"
                                    >
                                    <span class="register-page__radio-custom"></span>
                                    <span class="register-page__radio-text">Адвокат</span>
                                </label>
                            </div>
                        </div>

                        <!-- Личные данные -->
                        <div class="register-page__form-section-title">Личные данные</div>
                        
                        <div class="register-page__form-row">
                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.name }">
                                <label for="name" class="register-page__form-label">Имя *</label>
                                <input 
                                    id="name" 
                                    v-model="form.name" 
                                    type="text" 
                                    class="register-page__form-input" 
                                    placeholder="Ваше имя"
                                    @blur="validate('name')"
                                >
                                <span class="register-page__form-error" v-if="errors.name">{{ errors.name }}</span>
                            </div>

                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.surname }">
                                <label for="surname" class="register-page__form-label">Фамилия *</label>
                                <input 
                                    id="surname" 
                                    v-model="form.surname" 
                                    type="text" 
                                    class="register-page__form-input" 
                                    placeholder="Ваша фамилия"
                                    @blur="validate('surname')"
                                >
                                <span class="register-page__form-error" v-if="errors.surname">{{ errors.surname }}</span>
                            </div>
                        </div>

                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.patronymic }">
                            <label for="patronymic" class="register-page__form-label">Отчество *</label>
                            <input 
                                id="patronymic" 
                                v-model="form.patronymic" 
                                type="text" 
                                class="register-page__form-input" 
                                placeholder="Ваше отчество"
                                @blur="validate('patronymic')"
                            >
                            <span class="register-page__form-error" v-if="errors.patronymic">{{ errors.patronymic }}</span>
                        </div>

                        <div class="register-page__form-row">
                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.birthDate }">
                                <label for="birthDate" class="register-page__form-label">Дата рождения *</label>
                                <input 
                                    id="birthDate" 
                                    v-model="form.birthDate" 
                                    type="date" 
                                    class="register-page__form-input" 
                                    @blur="validate('birthDate')"
                                >
                                <span class="register-page__form-error" v-if="errors.birthDate">{{ errors.birthDate }}</span>
                            </div>

                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.city }">
                                <label for="city" class="register-page__form-label">Город проживания *</label>
                                <input 
                                    id="city" 
                                    v-model="form.city" 
                                    type="text" 
                                    class="register-page__form-input" 
                                    placeholder="Город постоянного места нахождения"
                                    @blur="validate('city')"
                                >
                                <span class="register-page__form-error" v-if="errors.city">{{ errors.city }}</span>
                            </div>
                        </div>

                        <div class="register-page__form-row">
                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.email }">
                                <label for="email" class="register-page__form-label">Email *</label>
                                <input 
                                    id="email" 
                                    v-model="form.email" 
                                    type="email" 
                                    class="register-page__form-input" 
                                    placeholder="example@mail.com"
                                    @blur="validate('email')"
                                >
                                <span class="register-page__form-error" v-if="errors.email">{{ errors.email }}</span>
                            </div>

                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.phone }">
                                <label for="phone" class="register-page__form-label">Номер телефона *</label>
                                <input 
                                    id="phone" 
                                    v-model="form.phone" 
                                    type="tel" 
                                    class="register-page__form-input" 
                                    placeholder="+7 (999) 123-45-67"
                                    @blur="validate('phone')"
                                >
                                <span class="register-page__form-error" v-if="errors.phone">{{ errors.phone }}</span>
                            </div>
                        </div>

                        <!-- Образование -->
                        <div class="register-page__form-section-title">Образование</div>
                        
                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.educationLevel }">
                            <label for="educationLevel" class="register-page__form-label">Уровень высшего профессионального образования *</label>
                            <select 
                                id="educationLevel" 
                                v-model="form.educationLevel" 
                                class="register-page__form-input"
                                @blur="validate('educationLevel')"
                            >
                                <option value="">Выберите уровень образования</option>
                                <option value="bachelor">Бакалавриат</option>
                                <option value="specialist">Специалитет</option>
                                <option value="master">Магистратура</option>
                                <option value="postgraduate">Аспирантура</option>
                            </select>
                            <span class="register-page__form-error" v-if="errors.educationLevel">{{ errors.educationLevel }}</span>
                        </div>

                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.educationInstitution }">
                            <label for="educationInstitution" class="register-page__form-label">Наименование образовательной организации *</label>
                            <input 
                                id="educationInstitution" 
                                v-model="form.educationInstitution" 
                                type="text" 
                                class="register-page__form-input" 
                                placeholder="Полное название вуза"
                                @blur="validate('educationInstitution')"
                            >
                            <span class="register-page__form-error" v-if="errors.educationInstitution">{{ errors.educationInstitution }}</span>
                        </div>

                        <!-- Специфичные поля для юристов -->
                        <div v-if="form.lawyerType === 'lawyer'">
                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.ogrn }">
                                <label for="ogrn" class="register-page__form-label">ОГРН образовательной организации *</label>
                                <input 
                                    id="ogrn" 
                                    v-model="form.ogrn" 
                                    type="text" 
                                    class="register-page__form-input" 
                                    placeholder="ОГРН вуза"
                                    @blur="validate('ogrn')"
                                >
                                <span class="register-page__form-error" v-if="errors.ogrn">{{ errors.ogrn }}</span>
                            </div>

                            <div class="register-page__form-row">
                                <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.diplomaSeries }">
                                    <label for="diplomaSeries" class="register-page__form-label">Серия диплома *</label>
                                    <input 
                                        id="diplomaSeries" 
                                        v-model="form.diplomaSeries" 
                                        type="text" 
                                        class="register-page__form-input" 
                                        placeholder="Серия"
                                        @blur="validate('diplomaSeries')"
                                    >
                                    <span class="register-page__form-error" v-if="errors.diplomaSeries">{{ errors.diplomaSeries }}</span>
                                </div>

                                <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.diplomaNumber }">
                                    <label for="diplomaNumber" class="register-page__form-label">Номер диплома *</label>
                                    <input 
                                        id="diplomaNumber" 
                                        v-model="form.diplomaNumber" 
                                        type="text" 
                                        class="register-page__form-input" 
                                        placeholder="Номер"
                                        @blur="validate('diplomaNumber')"
                                    >
                                    <span class="register-page__form-error" v-if="errors.diplomaNumber">{{ errors.diplomaNumber }}</span>
                                </div>
                            </div>

                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.diplomaDate }">
                                <label for="diplomaDate" class="register-page__form-label">Дата выдачи диплома *</label>
                                <input 
                                    id="diplomaDate" 
                                    v-model="form.diplomaDate" 
                                    type="date" 
                                    class="register-page__form-input" 
                                    @blur="validate('diplomaDate')"
                                >
                                <span class="register-page__form-error" v-if="errors.diplomaDate">{{ errors.diplomaDate }}</span>
                            </div>
                        </div>

                        <!-- Специфичные поля для адвокатов -->
                        <div v-if="form.lawyerType === 'advocate'">
                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.advocateNumber }">
                                <label for="advocateNumber" class="register-page__form-label">Регистрационный номер адвоката *</label>
                                <input 
                                    id="advocateNumber" 
                                    v-model="form.advocateNumber" 
                                    type="text" 
                                    class="register-page__form-input" 
                                    placeholder="Номер в реестре"
                                    @blur="validate('advocateNumber')"
                                >
                                <span class="register-page__form-error" v-if="errors.advocateNumber">{{ errors.advocateNumber }}</span>
                            </div>

                            <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.advocateIdNumber }">
                                <label for="advocateIdNumber" class="register-page__form-label">Номер удостоверения адвоката *</label>
                                <input 
                                    id="advocateIdNumber" 
                                    v-model="form.advocateIdNumber" 
                                    type="text" 
                                    class="register-page__form-input" 
                                    placeholder="Номер удостоверения"
                                    @blur="validate('advocateIdNumber')"
                                >
                                <span class="register-page__form-error" v-if="errors.advocateIdNumber">{{ errors.advocateIdNumber }}</span>
                            </div>
                        </div>

                        <!-- Опыт и специализация -->
                        <div class="register-page__form-section-title">Опыт и специализация</div>
                        
                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.experience }">
                            <label for="experience" class="register-page__form-label">Опыт (стаж) работы *</label>
                            <input 
                                id="experience" 
                                v-model="form.experience" 
                                type="number" 
                                class="register-page__form-input" 
                                placeholder="Количество лет"
                                min="0"
                                @blur="validate('experience')"
                            >
                            <span class="register-page__form-error" v-if="errors.experience">{{ errors.experience }}</span>
                        </div>

                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.specialization }">
                            <label for="specialization" class="register-page__form-label">Специализация *</label>
                            <textarea 
                                id="specialization" 
                                v-model="form.specialization" 
                                class="register-page__form-input" 
                                placeholder="Опишите ваши специализации"
                                rows="3"
                                @blur="validate('specialization')"
                            ></textarea>
                            <span class="register-page__form-error" v-if="errors.specialization">{{ errors.specialization }}</span>
                        </div>

                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.successfulProjects }">
                            <label for="successfulProjects" class="register-page__form-label">Успешные проекты</label>
                            <textarea 
                                id="successfulProjects" 
                                v-model="form.successfulProjects" 
                                class="register-page__form-input" 
                                placeholder="Опишите ваши успешные проекты"
                                rows="4"
                            ></textarea>
                        </div>

                        <!-- Услуги и условия -->
                        <div class="register-page__form-section-title">Услуги и условия</div>
                        
                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.remoteWork }">
                            <label class="register-page__form-label">Возможность дистанционной работы *</label>
                            <div class="register-page__radio-group">
                                <label class="register-page__radio-label">
                                    <input 
                                        type="radio" 
                                        v-model="form.remoteWork" 
                                        value="yes"
                                        class="register-page__radio-input"
                                    >
                                    <span class="register-page__radio-custom"></span>
                                    <span class="register-page__radio-text">Да</span>
                                </label>
                                <label class="register-page__radio-label">
                                    <input 
                                        type="radio" 
                                        v-model="form.remoteWork" 
                                        value="no"
                                        class="register-page__radio-input"
                                    >
                                    <span class="register-page__radio-custom"></span>
                                    <span class="register-page__radio-text">Нет</span>
                                </label>
                            </div>
                        </div>

                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.serviceCost }">
                            <label for="serviceCost" class="register-page__form-label">Стоимость услуг *</label>
                            <input 
                                id="serviceCost" 
                                v-model="form.serviceCost" 
                                type="text" 
                                class="register-page__form-input" 
                                placeholder="Например: от 5000 руб/час"
                                @blur="validate('serviceCost')"
                            >
                            <span class="register-page__form-error" v-if="errors.serviceCost">{{ errors.serviceCost }}</span>
                        </div>

                        <!-- Загрузка документов -->
                        <div class="register-page__form-section-title">Документы</div>
                        
                        <div class="register-page__form-group">
                            <label class="register-page__form-label">Копия диплома о высшем юридическом образовании</label>
                            <input 
                                type="file" 
                                accept=".pdf,.jpg,.jpeg,.png"
                                class="register-page__form-input"
                                @change="handleFileUpload('diploma', $event)"
                            >
                        </div>

                        <div class="register-page__form-group">
                            <label class="register-page__form-label">Копия паспорта (2 и 3 страницы)</label>
                            <input 
                                type="file" 
                                accept=".pdf,.jpg,.jpeg,.png"
                                class="register-page__form-input"
                                @change="handleFileUpload('passport', $event)"
                            >
                        </div>

                        <div v-if="form.lawyerType === 'advocate'" class="register-page__form-group">
                            <label class="register-page__form-label">Копия удостоверения адвоката</label>
                            <input 
                                type="file" 
                                accept=".pdf,.jpg,.jpeg,.png"
                                class="register-page__form-input"
                                @change="handleFileUpload('advocateId', $event)"
                            >
                        </div>

                        <div class="register-page__form-group">
                            <label class="register-page__form-label">Фотография</label>
                            <input 
                                type="file" 
                                accept=".jpg,.jpeg,.png"
                                class="register-page__form-input"
                                @change="handleFileUpload('photo', $event)"
                            >
                        </div>

                        <!-- Пароль -->
                        <div class="register-page__form-section-title">Безопасность</div>
                        
                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.password }">
                            <label for="password" class="register-page__form-label">Пароль *</label>
                            <input 
                                id="password" 
                                v-model="form.password" 
                                type="password" 
                                class="register-page__form-input" 
                                placeholder="Не менее 6 символов"
                                @blur="validate('password')"
                            >
                            <span class="register-page__form-error" v-if="errors.password">{{ errors.password }}</span>
                        </div>

                        <div class="register-page__form-group" :class="{ 'register-page__form-group--error': errors.confirmPassword }">
                            <label for="confirmPassword" class="register-page__form-label">Подтвердите пароль *</label>
                            <input 
                                id="confirmPassword" 
                                v-model="form.confirmPassword" 
                                type="password" 
                                class="register-page__form-input" 
                                placeholder="Повторите пароль"
                                @blur="validate('confirmPassword')"
                            >
                            <span class="register-page__form-error" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
                        </div>

                        <div class="register-page__form-checkbox">
                            <label class="register-page__checkbox-label">
                                <input 
                                    type="checkbox" 
                                    v-model="form.agreeToTerms"
                                    class="register-page__checkbox-input"
                                >
                                <span class="register-page__checkbox-custom"></span>
                                <span class="register-page__checkbox-text">
                                    Я согласен с <a href="#" class="register-page__link">условиями использования</a> и <a href="#" class="register-page__link">политикой конфиденциальности</a>
                                </span>
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            class="register-page__submit"
                            :class="{ 'register-page__submit--loading': isSubmitting }" 
                            :disabled="isSubmitting || !form.agreeToTerms"
                        >
                            <span v-if="!isSubmitting">Создать аккаунт юриста</span>
                            <span v-else>Создаем аккаунт...</span>
                        </button>
                    </form>

                    <div class="register-page__login-link">
                        <p>Уже есть аккаунт? <router-link to="/login-page" class="register-page__link">Войти</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonMy from '@/components/ButtonMy.vue'
import Logo from '@/components/Logo.vue'

const router = useRouter()

// Данные формы
const form = ref({
    lawyerType: '',
    name: '',
    surname: '',
    patronymic: '',
    birthDate: '',
    city: '',
    email: '',
    phone: '',
    educationLevel: '',
    educationInstitution: '',
    ogrn: '',
    diplomaSeries: '',
    diplomaNumber: '',
    diplomaDate: '',
    advocateNumber: '',
    advocateIdNumber: '',
    experience: '',
    specialization: '',
    successfulProjects: '',
    remoteWork: '',
    serviceCost: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    files: {
        diploma: null,
        passport: null,
        advocateId: null,
        photo: null
    }
})

// Ошибки валидации
const errors = ref({
    name: '',
    surname: '',
    patronymic: '',
    birthDate: '',
    city: '',
    email: '',
    phone: '',
    educationLevel: '',
    educationInstitution: '',
    ogrn: '',
    diplomaSeries: '',
    diplomaNumber: '',
    diplomaDate: '',
    advocateNumber: '',
    advocateIdNumber: '',
    experience: '',
    specialization: '',
    remoteWork: '',
    serviceCost: '',
    password: '',
    confirmPassword: ''
})

// Статус отправки
const isSubmitting = ref(false)

// Валидация
const validate = (field) => {
    const rules = {
        name: val => val.length >= 2 || 'Имя должно содержать минимум 2 символа',
        surname: val => val.length >= 2 || 'Фамилия должна содержать минимум 2 символа',
        patronymic: val => val.length >= 2 || 'Отчество должно содержать минимум 2 символа',
        birthDate: val => val || 'Укажите дату рождения',
        city: val => val.length >= 2 || 'Укажите город проживания',
        email: val => /^\S+@\S+\.\S+$/.test(val) || 'Введите корректный email',
        phone: val => /^\+?[0-9\s\-\(\)]{10,}$/.test(val) || 'Введите корректный номер телефона',
        educationLevel: val => val || 'Выберите уровень образования',
        educationInstitution: val => val.length >= 5 || 'Укажите название образовательной организации',
        ogrn: val => form.value.lawyerType === 'lawyer' ? (val.length >= 10 || 'Укажите корректный ОГРН') : '',
        diplomaSeries: val => form.value.lawyerType === 'lawyer' ? (val.length >= 1 || 'Укажите серию диплома') : '',
        diplomaNumber: val => form.value.lawyerType === 'lawyer' ? (val.length >= 1 || 'Укажите номер диплома') : '',
        diplomaDate: val => form.value.lawyerType === 'lawyer' ? (val || 'Укажите дату выдачи диплома') : '',
        advocateNumber: val => form.value.lawyerType === 'advocate' ? (val.length >= 1 || 'Укажите регистрационный номер') : '',
        advocateIdNumber: val => form.value.lawyerType === 'advocate' ? (val.length >= 1 || 'Укажите номер удостоверения') : '',
        experience: val => val >= 0 || 'Укажите опыт работы',
        specialization: val => val.length >= 10 || 'Опишите специализацию (минимум 10 символов)',
        remoteWork: val => val || 'Укажите возможность дистанционной работы',
        serviceCost: val => val.length >= 5 || 'Укажите стоимость услуг',
        password: val => val.length >= 6 || 'Пароль должен содержать минимум 6 символов',
        confirmPassword: val => val === form.value.password || 'Пароли не совпадают'
    }

    errors.value[field] = rules[field](form.value[field]) || ''
}

// Обработка загрузки файлов
const handleFileUpload = (fileType, event) => {
    const file = event.target.files[0]
    if (file) {
        form.value.files[fileType] = file
    }
}

// Отправка формы
const handleSubmit = async () => {
    Object.keys(form.value).forEach(field => {
        if (field !== 'agreeToTerms') {
            validate(field)
        }
    })
    
    if (Object.values(errors.value).some(e => e) || !form.value.agreeToTerms) return

    isSubmitting.value = true

    try {
        console.log('Отправка данных:', form.value)
        await new Promise(resolve => setTimeout(resolve, 2000))
        // Очищаем историю и переходим на главную
        router.replace('/')
    } catch (error) {
        console.error('Ошибка регистрации:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style lang="scss" scoped>
.register-page {
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
        display: flex;
        flex-direction: column;
        gap: fluid(40, 20);
        width: 100%;
        max-width: rem(800);
        margin: 0 auto;
        padding: fluid(40, 20);
    }

    &__header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: rem(20);

        @include mobile {
            flex-direction: column;
            gap: rem(15);
        }
    }

    &__page-header {
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: rem(30);
    }

    &__logo {
        display: flex;
        align-items: center;
        justify-content: center;
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
        background-color: var(--color-light);
        padding: fluid(50, 30);
        border-radius: rem(16);
        box-shadow: 0 rem(20) rem(40) rgba(0, 0, 0, 0.1);
        border: rem(1) solid rgba(106, 78, 55, 0.1);
    }

    &__form-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: rem(30);
        gap: rem(20);

        @include mobile {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }

    &__form-header-content {
        flex: 1;
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

    &__form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: rem(20);

        @include tablet {
            grid-template-columns: 1fr;
        }
    }

    &__form-group {
        display: flex;
        flex-direction: column;
        gap: rem(10);
        margin-bottom: rem(15);

        &--error {
            .register-page__form-input {
                border-color: var(--color-burgundy);
                box-shadow: 0 0 0 rem(2) rgba(136, 41, 47, 0.2);
            }
        }
    }

    &__form-label {
        font-size: fluid(16, 14);
        font-weight: 600;
        color: var(--color-brown);
        margin-bottom: rem(5);
    }

    &__form-input {
        padding: rem(14) rem(18);
        border: rem(2) solid rgba(106, 78, 55, 0.2);
        border-radius: rem(8);
        font-size: fluid(16, 14);
        background-color: var(--color-light);
        color: var(--color-brown);
        transition: all var(--transition-duration);
        min-height: rem(48);

        &::placeholder {
            color: var(--color-coffee);
            opacity: 0.6;
        }

        &:focus {
            outline: none;
            border-color: var(--color-burgundy);
            box-shadow: 0 0 0 rem(3) rgba(136, 41, 47, 0.1);
        }

        &[type="file"] {
            padding: rem(10) rem(14);
            cursor: pointer;
            min-height: rem(44);
        }

        &[type="date"] {
            padding: rem(14) rem(18);
        }

        &[type="number"] {
            padding: rem(14) rem(18);
        }
    }

    &__form-section-title {
        font-size: fluid(20, 18);
        font-weight: 600;
        color: var(--color-brown);
        margin: rem(35) 0 rem(20) 0;
        padding: rem(15) rem(20);
        background-color: rgba(106, 78, 55, 0.05);
        border-radius: rem(8);
        border-left: rem(4) solid var(--color-burgundy);
    }

    &__radio-group {
        display: flex;
        gap: rem(20);
        margin-top: rem(8);
    }

    &__radio-label {
        display: flex;
        align-items: center;
        gap: rem(8);
        cursor: pointer;
    }

    &__radio-input {
        display: none;
    }

    &__radio-custom {
        width: rem(18);
        height: rem(18);
        border: rem(2) solid var(--color-coffee);
        border-radius: 50%;
        background-color: var(--color-light);
        position: relative;
        transition: all var(--transition-duration);

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: rem(8);
            height: rem(8);
            background-color: var(--color-burgundy);
            border-radius: 50%;
            transition: transform var(--transition-duration);
        }
    }

    &__radio-input:checked + &__radio-custom {
        border-color: var(--color-burgundy);

        &::after {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    &__radio-text {
        font-size: fluid(16, 14);
        color: var(--color-brown);
    }

    &__form-error {
        font-size: fluid(14, 12);
        color: var(--color-burgundy);
        margin-top: rem(4);
    }

    &__form-checkbox {
        margin-top: rem(10);
    }

    &__checkbox-label {
        display: flex;
        align-items: flex-start;
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
        margin-top: rem(2);
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
        line-height: 1.4;
    }

    &__submit {
        width: 100%;
        padding: rem(18) rem(32);
        background-color: var(--color-burgundy);
        color: var(--color-light);
        border: none;
        border-radius: rem(8);
        font-size: fluid(18, 16);
        font-weight: 600;
        cursor: pointer;
        transition: all var(--transition-duration);
        margin-top: rem(30);
        min-height: rem(56);

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

    &__login-link {
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

    &__button {
        width: fluid(200, 150);
        
    }
}

@keyframes spin {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style> 