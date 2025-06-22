import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import type { TopicsStoreProps } from "@/types/types";
import { DATES, UNIT10 } from "@/data/words";

export const useTopicsStore = defineStore("topics", () => {
  const topics = ref<TopicsStoreProps[]>([
    { id: nanoid(), name: "Date numbers", value: DATES },
    { id: nanoid(), name: "Unit #10", value: UNIT10 },
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
