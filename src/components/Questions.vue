<script setup lang="ts">
import { useWordsStore } from '@/stores/words';
import { onMounted, computed } from 'vue';
import PopUp from './PopUp.vue';
import { useCardsStore } from '@/stores/cards';
import Cards from './Cards.vue';
import { useTopicsStore } from '@/stores/topics';

const wordsState = useWordsStore()
const cardsStore = useCardsStore()
const topicsStore = useTopicsStore()

onMounted(() => {
    wordsState.setRandomNumber()
    cardsStore.setRandomCards()
})

const getQuestion = computed(() => {
    const topic = topicsStore.topicName;
    const word = wordsState.computedRandomWord;

    if (topic === "Date numbers") {
        return `What is "${word.number}日" in Japanese?`;
    }

    if (topic.startsWith("Unit")) {
        return `How do you say "${word.eng}" in Japanese?`;
    }

    return "No question available.";
});
</script>

<template>
    <div class="container">
        {{ getQuestion }}
    </div>
    <Cards />
    <PopUp />
</template>

<style scoped>
.container {
    margin: 0 auto;

    box-sizing: border-box;
}
</style>