<script setup lang="ts">
import { useTopicsStore } from '@/stores/topics';
import { useRouter } from 'vue-router';
import { computed, watch } from 'vue';
import Questions from './Questions.vue';

const router = useRouter();
const topicsStore = useTopicsStore();

const goToStartScreen = () => {
    router.push({ name: 'home' });
};

const topic = computed(() => {
    return topicsStore.getTopicName(topicsStore.topicName);
});

watch(
    () => topicsStore.topicName,
    (newVal) => {
        if (!newVal) {
            router.replace({ name: 'home' });
        }
    },
    { immediate: true }
);


</script>

<template>
    <div class="container__topic">
        <h2 class="topic__title">{{ topicsStore.topicName }}</h2>
        <Questions />
        <button class="topic__button" @click="goToStartScreen">Go back</button>
    </div>
</template>


<style scoped>
.container__topic {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    min-width: 375px;

    padding: 10px;

    box-sizing: border-box;
}

.topic__button {
    padding: 10px;

    color: #fff;

    border-radius: 5px;
    border: none;
    background-color: rgb(27, 27, 54);
}

.topic__button:hover {
    cursor: pointer;
    background-color: rgba(27, 27, 54, 0.756);
}
</style>
