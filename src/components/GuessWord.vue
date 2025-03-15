<script setup lang="ts">
import { useWordsStore } from '@/stores/words';
import { computed, onMounted } from 'vue';
import PopUp from './PopUp.vue';
import { useCardsStore } from '@/stores/cards';

const wordsState = useWordsStore()
const cardsStore = useCardsStore()

onMounted(() => {
    wordsState.setRandomNumber()
    cardsStore.setRandomCards()
})

</script>

<template>
    <div class="container">
        What is "{{ wordsState.computedRandomWord.number }}日" in Japanese?
    </div>
    <PopUp />
</template>

<style scoped>
.container {
    margin: 0 auto;
    box-sizing: border-box;
}
</style>