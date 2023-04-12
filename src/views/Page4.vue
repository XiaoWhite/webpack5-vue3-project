<template>
  <div class="page">
    <button @click="addField">Click</button>

    <ul>
      <li v-for="(value, key) in info" :key="key">{{ `${key}: ${value}` }}</li>
    </ul>

    <button @click="changeColor">changeColor</button>
    <ul>
      <li v-for="(value, key) in flower" :key="key">{{ `${key}: ${value}` }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const info = ref({});
let count = 0;

function addField() {
  count++;
  info.value[`name_${count}`] = 'Vue';
}

const flower = ref({
  color: 'white',
  height: 60,
});
function changeColor() {
  flower.value.color = 'pink';
}
</script>

<style scoped lang="scss"></style>
