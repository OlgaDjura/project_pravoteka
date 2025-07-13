<template>
    <ul class="custom-list">
        <li v-for="(item, index) in items" :key="index" class="custom-list__item">
            <div class="custom-list__icon" v-if="item.icon" v-html="item.icon"></div>
            <div class="custom-list__content">
                <h3 class="custom-list__title" v-if="item.title">{{ item.title }}</h3>
                <p class="custom-list__text" v-if="item.text">{{ item.text }}</p>
            </div>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
        validator: items => items.every(item =>
            ('title' in item || 'text' in item) &&
            (item.icon === undefined || typeof item.icon === 'string')
        )
    }
})
</script>

<style lang="scss" scoped>
.custom-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    

    &__item {
        display: flex;
        gap: fluid(16, 10);
        padding: fluid(20, 15);
        border-radius: fluid(8, 6);
        background: #fff;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        margin-bottom: rem(16);
        text-align: center;
    }

    &__icon {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: fluid(50, 25);
        height: fluid(50, 25);
        background-color: rgb(205, 151, 201, 0.5);
        border-radius: rem(5);
        padding: rem(20);
        
    }

    &__content {
        flex-grow: 1;
    }

    &__title {
        margin: 0 0 8px 0;
        font-size: 18px;
        color: #333;
    }

    &__text {
        margin: 0;
        color: #666;
        line-height: 1.5;
    }
}
</style>