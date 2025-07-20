import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useTopicsStore } from "./topics";
import type { WordProps } from "../types/types";
import { topicWordsMap } from "../data/words";

// export const useWordsStore = defineStore("words", () => {
//   const topicsStore = useTopicsStore();

//   const words = computed(() => {
//     const topic = topicsStore.topicName;
//     return topicWordsMap[topic] || [];
//   });

//   const randomWord = ref<WordProps>({
//     jap: "",
//     eng: "",
//     number: "",
//     kanji: "",
//     rus: "",
//   });

//   function getRandomJapWord() {
//     if (words.value.length === 0) return "No words";
//     const randomIndex = Math.floor(Math.random() * words.value.length);
//     return words.value[randomIndex].jap;
//   }

//   function setRandomNumber() {
//     if (words.value.length === 0) return;
//     const randomIndex = Math.floor(Math.random() * words.value.length);
//     randomWord.value = words.value[randomIndex];
//   }

//   const computedRandomWord = computed(() => randomWord.value);

//   return {
//     words,
//     getRandomJapWord,
//     setRandomNumber,
//     computedRandomWord,
//   };
// });

export const useWordsStore = defineStore("words", () => {
  const topicsStore = useTopicsStore();

  const words = computed(() => {
    const topic = topicsStore.topicName;
    return topicWordsMap[topic] || [];
  });

  const randomWord = ref<WordProps>({
    jap: "",
    eng: "",
    number: "",
    kanji: "",
    rus: "",
  });

  const remainingWords = ref<WordProps[]>([]);

  function initializeWords() {
    const topic = topicsStore.topicName;
    const selectedWords = [...(topicWordsMap[topic] || [])];

    remainingWords.value = selectedWords.sort(() => Math.random() - 0.5);
    
    setNextRandomWord();
  }

  function setNextRandomWord() {
    if (remainingWords.value.length === 0) {
      randomWord.value = {
        jap: "",
        eng: "",
        number: "",
        kanji: "",
        rus: "",
      };
      return;
    }

    const nextWord = remainingWords.value.pop()!;
    randomWord.value = nextWord;
  }

  function getRandomJapWord() {
    if (words.value.length === 0) return "No words";
    const randomIndex = Math.floor(Math.random() * words.value.length);
    return words.value[randomIndex].jap;
  }

  const computedRandomWord = computed(() => randomWord.value);
  const isLevelCompleted = computed(() => remainingWords.value.length === 0);

  return {
    words,
    computedRandomWord,
    getRandomJapWord,
    initializeWords,
    setNextRandomWord,
    remainingWords,
    isLevelCompleted,
  };
});

