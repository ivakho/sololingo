<script setup lang="ts">
import { ref, defineEmits } from 'vue';
const inputValue = ref('')
const emit = defineEmits(['addWord'])

const addWordButton = () => {
    if (inputValue.value.trim()) {
        emit('addWord', inputValue.value)
        inputValue.value = ''
    }
}
</script>

<template>
    <div class="container">
        <input className="input" v-model="inputValue" />
        <button className="button" @click="addWordButton">Add</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    gap: 10px;
}

.input {
    width: 100%;

    padding: 10px;

    border: 1px solid black;
    border-radius: 5px;
}

.button {
    padding: 10px;

    color: #fff;

    border: none;
    border-radius: 5px;
    background-color: rgb(27, 27, 54);
}

.button:hover {
    cursor: pointer;
    background-color: rgba(27, 27, 54, 0.756);
}
</style>