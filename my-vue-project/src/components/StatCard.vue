<template>
    <div class="stat-card" :class="{ 'stat-card--positive': isPositive }">
        <div class="stat-card__icon" v-html="iconSvg"></div>
        <div class="stat-card__value">{{ value }}</div>
        <div class="stat-card__label">{{ label }}</div>
        <div class="stat-card__trend">
            <span class="stat-card__trend-arrow">{{ trendArrow }}</span>
            {{ trendText }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    value: {
        type: [String, Number],
        required: true
    },
    label: {
        type: String,
        required: true
    },
    trendText: {
        type: String,
        default: ''
    },
    trendDirection: {
        type: String,
        default: 'up' // 'up', 'down' или 'neutral'
    },
    iconType: {
        type: String,
        default: 'default' // 'default', 'case', 'lawyer', 'rating'
    },
    isPositive: {
        type: Boolean,
        default: true
    }
});

// Встроенные SVG-иконки
const icons = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`,
    case: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
    lawyer: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    rating: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
};

const iconSvg = icons[props.iconType] || icons.default;

const trendArrow = {
    up: '↑',
    down: '↓',
    neutral: '→'
}[props.trendDirection] || '';
</script>

<style lang="scss" scoped>
.stat-card {
    background: var(--color-sand);
    padding: 1.5rem;
    border-radius: rem(8);
    text-align: center;
    transition: all 0.3s ease;
    max-width: rem(250);
    margin: 0 auto;

    &__icon {
        width: fluid(40, 23);
        height: fluid(40, 23);
        margin: 0 auto 1rem;
        color: #d4af37;

        :deep(svg) {
            width: 100%;
            height: 100%;
        }
    }

    &__value {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-brown);
        margin-bottom: 0.5rem;
    }

    &__label {
        font-size: 1rem;
        color: var(--color-coffee);
        margin-bottom: 0.5rem;
    }

    &__trend {
        
        color: #b8860b;
        

        &-arrow {
            display: inline-block;
            margin-right: 0.3rem;
        }
    }

    &--positive &__trend {
        color: var(--color-burgundy);
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px var(--color-brown);
    }
}
</style>