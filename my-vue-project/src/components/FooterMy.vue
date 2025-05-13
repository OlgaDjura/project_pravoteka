<template>
    <section class="contacts" id="contacts" aria-label="contacts-title">
            <div class="contacts__main container">
                <h2 class="contacts__title h1" id="contacts-title">Остались вопросы? Пишите мы всегда на связи</h2>
                <div class="contacts__contacts">
                    <a href="/" class="contacts__button"><span>Чат</span></a>
                    <a href="/" class="contacts__button"><span>Telegram</span></a>
                    <a href="/" class="contacts__button"><span>WhatsApp</span></a>
                </div>
            </div>
    </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.contacts {
    background-image: linear-gradient(29deg,rgba(173, 173, 173, 1) 0%, rgba(207, 207, 207, 1) 33%, rgba(207, 207, 207, 1) 46%, rgba(189, 189, 189, 1) 63%, rgba(235, 235, 235, 1) 100%);
    &__main {
        margin-top: fluid(100, 50);
    }

    &__title {
        padding-top: fluid(100, 50);
    }

    &__contacts {
        margin-top: fluid(70, 50);
        display: flex;
        justify-content: space-around;

    }

    &__button {
        font-size: fluid(25, 20);
        background-color: var(--color-gray-50);
        padding: fluid(20, 10);
        border-radius: fluid(12, 8);

        @include hover {
            background-color: var(--color-dark-20);
            color: var(--color-light);
        }
    }
}
</style>