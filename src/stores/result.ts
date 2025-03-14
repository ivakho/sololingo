import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface ResultProps {
    text: string
    status: boolean
}

export const useResultStore = defineStore("result", () => {
  const result = ref<ResultProps>({text:'', status: false});
  const popUp = ref<boolean>(false);
  const isHidden = ref<boolean>(true);

  function setResult(value: boolean) {
    if (value) {
        result.value = {text: 'You are right!', status: true};
    } else {
        result.value = {text: 'Your are wrong!', status: false};
    }
  }

  function setIsHidden(value: boolean) {
      isHidden.value = value;
  }

  function showPopUp() {
    popUp.value = true
  }

  function hidePopUp() {
    popUp.value = false
  }

  const computedResult = computed(() => result.value);
  const computedPopUp = computed(() => popUp.value);

  return { result, setResult, computedResult, popUp, showPopUp, hidePopUp, computedPopUp, isHidden, setIsHidden };
});
