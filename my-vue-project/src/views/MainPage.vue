
<template>
  <div class="main-page">
    <!-- Общий фон -->
    <div class="hero-wrapper" ref="heroContainer">
      <Header class="main-header" :class="{ 'header--scrolled': isScrolled }" />
      <HomeSection />
    </div>

    <main>
      <LawyersStats />
      <HelpSection />
      <ChoiceSection />
      <WeSection />
      <HowSection />
      <Reviews />
      <QuestionsSection />
    </main>

    <FooterMy />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue'
import HomeSection from '../components/HomeSection.vue'
import LawyersStats from '../components/LawyersStats.vue'
import HowSection from '../components/HowSection.vue'
import HelpSection from '../components/HelpSection.vue'
import ChoiceSection from '../components/ChoiceSection.vue'
import WeSection from '../components/WeSection.vue'
import Reviews from '../components/Reviews.vue'
import QuestionsSection from '../components/QuestionsSection.vue'
import FooterMy from '../components/FooterMy.vue'

const isScrolled = ref(false)
const heroContainer = ref(null)

const handleScroll = () => {
  if (!heroContainer.value) return
  const heroHeight = heroContainer.value.offsetHeight
  isScrolled.value = window.scrollY > heroHeight * 0.1
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.main-page {
  position: relative;
}

.hero-wrapper {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('../assets/images/M.png') no-repeat center/cover;
  min-height: 100vh;
}

/* Хедер прозрачный по умолчанию */
.main-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: transparent;
  backdrop-filter: none;
  transition: all 0.4s ease;

  &.header--scrolled {
    background: var(--color-coffee);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
}
</style>
