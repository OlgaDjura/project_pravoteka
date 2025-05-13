<template>
  <div id="app" class="body">
    <Header @login="handleLogin"></Header>
    <main>
      <router-view v-if="isLoggedIn"></router-view>
      <HomeSection></HomeSection>
      <HowSection></HowSection>
      <HelpSection></HelpSection>
      <ChoiceSection></ChoiceSection>
      <WeSection></WeSection>
      <QuestionsSection></QuestionsSection>
      <MaterialsSection></MaterialsSection>
    </main>
    <FooterMy></FooterMy>
  </div> 
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import HomeSection from './components/HomeSection.vue'
import HowSection from './components/HowSection.vue'
import HelpSection from './components/HelpSection.vue'
import ChoiceSection from './components/ChoiceSection.vue'
import WeSection from './components/WeSection.vue'
import QuestionsSection from './components/QuestionsSection.vue'
import MaterialsSection from './components/MaterialsSection.vue'

import FooterMy from './components/FooterMy.vue'


const isLoggedIn = ref(false)  // Флаг, который определяет, авторизован ли пользователь

// Функция для обработки входа
const handleLogin = () => {
  isLoggedIn.value = true
}
</script>

<style lang="scss">
    
</style>
