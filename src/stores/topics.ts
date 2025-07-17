import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import type { TopicsStoreProps } from "@/types/types";
import {
  DATES,
  UNIT3,
  UNIT4,
  UNIT5,
  UNIT6,
  UNIT7,
  UNIT8,
  UNIT9,
  UNIT10,
  UNIT11,
} from "@/data/words";

export const useTopicsStore = defineStore("topics", () => {
  const topics = ref<TopicsStoreProps[]>([
    { id: nanoid(), name: "Date numbers", value: DATES },
    { id: nanoid(), name: "Unit #3", value: UNIT3 },
    { id: nanoid(), name: "Unit #4", value: UNIT4 },
    { id: nanoid(), name: "Unit #5", value: UNIT5 },
    { id: nanoid(), name: "Unit #6", value: UNIT6 },
    { id: nanoid(), name: "Unit #7", value: UNIT7 },
    { id: nanoid(), name: "Unit #8", value: UNIT8 },
    { id: nanoid(), name: "Unit #9", value: UNIT9 },
    { id: nanoid(), name: "Unit #10", value: UNIT10 },
    { id: nanoid(), name: "Unit #11", value: UNIT11 },
  ]);

  const topicName = ref<string>("");

  function setTopicName(name: string) {
    topicName.value = name;
  }

  function getTopicName(name: string): TopicsStoreProps {
    const result = topics.value.find((topic) => topic.name === name);
    return result ?? { id: "", name: "", value: [] };
  }

  return { topics, topicName, setTopicName, getTopicName };
});
