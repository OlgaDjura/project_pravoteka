<template>
    <button :class="computedClass" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    variant: {
        type: String,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['click'])

const computedClass = computed(() => `button button--${props.variant}`)

function handleClick(event) {
    if (!props.disabled) {
        emit('click', event)
    }
}
</script>


<style scoped lang="scss">
.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: rem(8) rem(20);
    font-size: rem(18);
    color: var(--color-light);
    background-color: var(--color-burgundy);
    border-radius: rem(8);
    border: none;


    @include hover {
        background-color: var(--color-coffee);
    }

    &-accent {
        color: var(--color-dark);
        font-weight: 500;
        background-color: var(--color-accent);
        border-color: var(--color-accent);
        border-radius: rem(8);
    }

    &-dark-gray {
        background-color: var(--color-dark-10);
    }

}
</style>