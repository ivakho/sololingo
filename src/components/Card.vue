<script setup lang="ts">
import { useCardsStore } from '@/stores/cards';
import { useResultStore } from '@/stores/result';
import { useTopicsStore } from '@/stores/topics';
import { useWordsStore } from '@/stores/words';
import { computed } from 'vue';

const wordsStore = useWordsStore()
const resultStore = useResultStore()
const cardsStore = useCardsStore()
const topicsStore = useTopicsStore()

const randomCards = computed(() => cardsStore.cards)

let isCorrect;

const hanleCardClick = (word: string) => {
  if (resultStore.popUp) return;

  const topic = topicsStore.topicName;
  const targetWord = wordsStore.computedRandomWord;
  isCorrect = false;

  if (topic === "Date numbers" || topic.startsWith("Unit")) {
    isCorrect = word === targetWord.jap;
  } else {
    isCorrect = false;
  }

  resultStore.setResult(isCorrect);
  resultStore.setIsHidden(false);
  resultStore.showPopUp();
}

const getCardClass = () => {
  return resultStore.popUp ? 'card__hidden' : 'card'
}
</script>

<template>
  <div :class=getCardClass() v-for="word in randomCards" :key="word" @click="() => hanleCardClick(word)">{{ word }}
  </div>
</template>

<style scoped>
.card,
.card__hidden {
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 170px;
  width: 100%;
  height: 300px;

  color: rgb(27, 27, 54);

  border-radius: 10px;

  border: 1px solid rgb(27, 27, 54);
}

.card:hover {
  background-color: rgb(27, 27, 54);
  color: #fff;
  cursor: pointer;
}
</style>
