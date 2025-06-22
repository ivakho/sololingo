<script setup lang="ts">
import Topics from './Topics.vue';
</script>

<template>
    <div class="container__start">
        <h1 class="start__title">Sololingo</h1>
        <img src="../assets/images/logo.png" alt="logo" />
        <div class="start__select">Choose topic:</div>
        <Topics />
    </div>

</template>

<style scoped>
.container__start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    min-width: 375px;

    padding: 10px;

    color: rgb(27, 27, 54);

    box-sizing: border-box;
}

.start__title {
    margin: 0;

    color: rgb(27, 27, 54);
}

.start__button {
    padding: 10px;

    color: #fff;

    border-radius: 5px;
    border: none;
    background-color: rgb(27, 27, 54);
}

.start__button:hover {
    cursor: pointer;
    background-color: rgba(27, 27, 54, 0.756);
}
</style>