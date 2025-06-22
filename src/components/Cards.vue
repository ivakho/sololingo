<script setup lang="ts">
import Card from './Card.vue';
</script>

<template>
    <div class="container__cards">
        <Card />
    </div>
</template>


<style scoped>
.container__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    box-sizing: border-box;
}
</style>