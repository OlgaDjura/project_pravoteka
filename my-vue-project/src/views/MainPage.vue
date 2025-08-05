<template>
  <div class="main-page">
    <div class="container-hero">
      <Header @login="handleLogin"></Header>
      <HomeSection></HomeSection>
    </div>
    <main>
      <LawyersStats></LawyersStats>
      <HelpSection></HelpSection>
      <ChoiceSection></ChoiceSection>
      <WeSection></WeSection>
      <HowSection></HowSection>
      <Reviews></Reviews>
      <QuestionsSection></QuestionsSection>
    </main>
    <FooterMy></FooterMy>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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

const isLoggedIn = ref(false)

const handleLogin = () => {
  isLoggedIn.value = true
}
</script>

<style lang="scss" scoped>
.container-hero {
  position: relative;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('../assets/images/M.png') no-repeat center/cover;
  display: flex;
  flex-direction: column;
}
</style> 