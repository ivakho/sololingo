import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useWordsStore } from "./words";

export const useCardsStore = defineStore("cards", () => {
    const wordsStore = useWordsStore()
    const cards = ref<string[]>([])

    const setRandomCards = () => {
        if (wordsStore.computedRandomWord.jap.length === 0) {
            cards.value = [];
            return;
        }
        
        const selectedWords: Set<string> = new Set();
        selectedWords.add(wordsStore.computedRandomWord.jap);
    
        while (selectedWords.size < 4 && wordsStore.words.length >= 4) {
            selectedWords.add(wordsStore.getRandomJapWord());
        }
    
        cards.value = Array.from(selectedWords).sort(() => Math.random() - 0.5); 
    };

  return { cards, setRandomCards };
});
