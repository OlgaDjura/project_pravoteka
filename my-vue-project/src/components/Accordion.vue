<template>
    <div class="accordion">
        <div v-for="(item, index) in items" :key="index" class="accordion__item"
            :class="{ 'accordion__item--active': activeIndex === index }">
            <div class="accordion__header" @click="toggleItem(index)">
                <h3 class="accordion__title">{{ item.title }}</h3>
                <span class="accordion__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            :transform="activeIndex === index ? 'rotate(180 12 12)' : ''" />
                    </svg>
                </span>
            </div>

            <Transition name="accordion">
                <div v-show="activeIndex === index" class="accordion__content">
                    <p>{{ item.content }}</p>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        required: true,
        validator: (items) => items.every(item => 'title' in item && 'content' in item)
    },
    // Можно открывать несколько элементов одновременно
    multiple: {
        type: Boolean,
        default: false
    }
})

const activeIndex = ref(null)

const toggleItem = (index) => {
    if (props.multiple) {
        // Логика для множественного открытия
        if (!activeIndexes.value.includes(index)) {
            activeIndexes.value.push(index)
        } else {
            activeIndexes.value = activeIndexes.value.filter(i => i !== index)
        }
    } else {
        // Стандартное поведение (только один открытый)
        activeIndex.value = activeIndex.value === index ? null : index
    }
}
</script>

<style lang="scss" scoped>
.accordion {

    &__item {

        &--active {
            .accordion__header {
                background-color: #867777;
                border-radius: rem(5);
            }
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
            background-color: #867777;
            border-radius: rem(5);
        }
    }

    &__title {
        margin: 0;
        font-weight: 500;
    }

    &__icon {
        transition: transform 0.4s ease;

        svg {
            display: block;
        }
    }

    &__content {
        padding: 0 20px;
        overflow: hidden;

        p {
            margin: 0;
            padding: 16px 0;
            color: var(--color-dark-15);
            line-height: 1.5;
            
        }
    }
}

/* Анимации */
.accordion-enter-active,
.accordion-leave-active {
    transition:
        height 0.3s ease,
        opacity 0.3s ease;
    will-change: height, opacity;
}

.accordion-enter-from,
.accordion-leave-to {
    height: 0 !important;
    opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
    height: var(--accordion-content-height);
    opacity: 1;
}
</style>