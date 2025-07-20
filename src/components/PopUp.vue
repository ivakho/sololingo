<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCardsStore } from '@/stores/cards';
import { useResultStore } from '@/stores/result';
import { useWordsStore } from '@/stores/words';
import { computed } from 'vue';

const router = useRouter();
const resultStore = useResultStore()
const cardsStore = useCardsStore()
const wordsStore = useWordsStore()

const isLevelCompleted = computed(() => wordsStore.remainingWords.length === 0);

const getPopUpClass = () => {
  if (resultStore.isHidden) {
    return 'hidden'
  }
  return resultStore.computedResult.status ? 'popUp correct' : 'popUp wrong'
}

// const onContinueClick = () => {

//   wordsStore.setRandomNumber()
//   cardsStore.setRandomCards()
//   resultStore.setIsHidden(true)
//   resultStore.hidePopUp()
// }

const onContinueClick = () => {
  // if (wordsStore.remainingWords.length === 0) {
  //   resultStore.setIsHidden(true);
  //   resultStore.hidePopUp();
  //   router.push({ name: 'home' });

  //   return;
  // }

  wordsStore.setNextRandomWord();
  cardsStore.setRandomCards();
  resultStore.setIsHidden(true);
  resultStore.hidePopUp();
};

</script>

<template>

  <!-- <div class="popUp correct" v-if="isLevelCompleted">
    <div class="popUp__text">Congratulations, the topic is completed</div>
    <button class="popUp__button" @click="onContinueClick">Go back</button>
  </div> -->
  <div :class=getPopUpClass()>
    <div class="popUp__text">{{ resultStore.result.text }}</div>
    <button class="popUp__button" @click="onContinueClick">Continue</button>
  </div>
</template>

<style scoped>
.popUp {
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  max-width: 1280px;
  min-width: 375px;
  width: 100%;

  padding: 16px;

  font-size: 18px;
  color: white;

  border-radius: 8px;
  background-color: rgb(27, 27, 54);
  transition: opacity 0.7s;
  box-sizing: border-box;
}

.hidden {
  display: none;
}

.popUp__button {
  width: 100%;

  padding: 10px;

  color: rgb(27, 27, 54);

  border-radius: 5px;
  border: none;
}

.correct .popUp__button {
  background-color: rgb(28, 255, 126);
}

.wrong .popUp__button {
  background-color: rgb(255, 60, 60);
}

.popUp__text {
  font-weight: 700;
}

.correct .popUp__text {
  color: rgb(28, 255, 126);
}

.wrong .popUp__text {
  color: rgb(255, 60, 60);
}

.popUp__button:hover {
  outline: 1px solid #fff;
  cursor: pointer;
}
</style>