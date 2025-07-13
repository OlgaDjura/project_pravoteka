<template>
    <section class="advantages">
        <h2 class="advantages__title h2"></h2>
        <p class="advantages__title-description"></p>
        <ListIcon :items="featuresList"></ListIcon>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import ListIcon from './ListIcon.vue';

const featuresList = ref([
    {
        icon: `<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
    </linearGradient>
  </defs>
  <path d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z" 
        fill="none" stroke="url(#shieldGradient)" strokeWidth="2" strokeLinejoin="round"/>
  <path d="M9 12L11 14L15 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`,
        title: "Проверенные специалисты",
        text: "Все юристы проходят строгую проверку квалификации и имеют подтвержденный опыт работы"
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
    </linearGradient>
  </defs>
  <circle fill="none" cx="12" cy="12" r="10" fill="url(#clockGradient)" stroke="url(#clockGradient)" strokeWidth="2"/>
  <path fill="none" d="M12 6V12L16 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12" cy="12" r="1" fill="black"/>
</svg>`,
        title: "Быстрый подбор",
        text: "Найдите подходящего юриста за несколько минут благодаря умному алгоритму поиска"
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="awardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#7C3AED" />
    </linearGradient>
  </defs>
  <circle cx="12" cy="8" r="6" fill="url(#awardGradient)" stroke="url(#awardGradient)" strokeWidth="2"/>
  <path d="M15 13L12 17L9 13" fill="url(#awardGradient)" stroke="url(#awardGradient)" strokeWidth="2" strokeLinejoin="round"/>
  <path d="M12 2L13.5 5.5L17 6L14.5 8.5L15 12L12 10L9 12L9.5 8.5L7 6L10.5 5.5L12 2Z" 
          fill="white" strokeWidth="1"/>
</svg>`,
        title: "Прозрачные цены",
        text: "Никаких скрытых комиссий. Все цены указаны заранее, оплата только за результат"
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
    </linearGradient>
  </defs>
  <path d="M12 3V21M8 21H16M10 3H14" stroke="url(#scaleGradient)" strokeWidth="2" strokeLinecap="round"/>
  <path d="M5 8L7 12H9L11 8H5Z" fill="none" stroke="url(#scaleGradient)" strokeWidth="2" strokeLinejoin="round"/>
  <path d="M13 8L15 12H17L19 8H13Z" fill="none" stroke="url(#scaleGradient)" strokeWidth="2" strokeLinejoin="round"/>
  <path d="M3 8H11M13 8H21" stroke="url(#scaleGradient)" strokeWidth="2" strokeLinecap="round"/>
</svg>`,
        title: "Гарантия качества",
        text: "Система рейтингов и отзывов помогает выбрать лучшего специалиста для вашей задачи"
    }
])
</script>

<style scoped lang="scss">
.advantages {
  margin: fluid(20, 5);
}

</style>