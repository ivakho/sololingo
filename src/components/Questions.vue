<script setup lang="ts">
import { useWordsStore } from '@/stores/words';
import { onMounted, computed } from 'vue';
import PopUp from './PopUp.vue';
import { useCardsStore } from '@/stores/cards';
import Cards from './Cards.vue';
import { useTopicsStore } from '@/stores/topics';

const wordsStore = useWordsStore()
const cardsStore = useCardsStore()
const topicsStore = useTopicsStore()

const isLevelCompleted = computed(() => wordsStore.remainingWords.length === 0);

// onMounted(() => {
//     wordsStore.setRandomNumber()
//     cardsStore.setRandomCards()
// })

onMounted(() => {
    wordsStore.initializeWords();
    cardsStore.setRandomCards();
});

const getQuestion = computed(() => {
    const topic = topicsStore.topicName;
    const word = wordsStore.computedRandomWord;

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
    <div v-if="isLevelCompleted" class="completed">
        <h2 class="title">Congratulations! Unit Completed!</h2>
        <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <div v-else>
        <div class="container">
            {{ getQuestion }}
        </div>
        <Cards />
        <PopUp />
    </div>
</template>

<style scoped>
.completed {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
}

.title {
    margin: 0;
    color: rgb(254, 109, 31);
}

.container {
    margin: 0 auto;

    box-sizing: border-box;
}
</style>