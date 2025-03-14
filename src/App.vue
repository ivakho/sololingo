<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Cards from './components/Cards.vue'
import Input from './components/Input.vue'
import { ref } from 'vue'
import { useWordsStore } from './stores/words'
import GuessWord from './components/GuessWord.vue'

const wordsStore = useWordsStore()

const message = ref('Введите слово')
const handleAddWord = (newWord: string) => {
  message.value = newWord
}

</script>

<template>
  <header>
    <div class="wrapper">
      <GuessWord />
      <Cards />

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-width: 375px;

  padding: 10px;
}

</style>
