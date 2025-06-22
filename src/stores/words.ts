import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useTopicsStore } from "./topics";
import type { WordProps } from "../types/types";
import { topicWordsMap } from "../data/words";

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

  function getRandomJapWord() {
    if (words.value.length === 0) return "Нет слов";
    const randomIndex = Math.floor(Math.random() * words.value.length);
    return words.value[randomIndex].jap;
  }

  function setRandomNumber() {
    if (words.value.length === 0) return;
    const randomIndex = Math.floor(Math.random() * words.value.length);
    randomWord.value = words.value[randomIndex];
  }

  const computedRandomWord = computed(() => randomWord.value);

  return {
    words,
    getRandomJapWord,
    setRandomNumber,
    computedRandomWord,
  };
});
