<script setup lang="ts">
import { useTopicsStore } from '@/stores/topics';
import { useRouter } from 'vue-router';

const router = useRouter();

const topicsStore = useTopicsStore()

const goToTopic = (name: string) => {
    topicsStore.setTopicName(name)
    router.push({ name: 'topic' });
};

</script>

<template>
    <div class="container__topics">
        <button class="topics__button" v-for="topic in topicsStore.topics" @click="() => goToTopic(topic.name)">
            {{ topic.name }}</button>
    </div>
</template>

<style scoped>
.container__topics {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    min-width: 375px;

    padding: 10px;

    box-sizing: border-box;
}

.topics__button {
    width: 100%;

    padding: 10px;

    color: #fff;

    border-radius: 5px;
    border: none;
    background-color: rgb(27, 27, 54);
}

.topics__button:hover {
    cursor: pointer;
    background-color: rgba(27, 27, 54, 0.756);
}
</style>
