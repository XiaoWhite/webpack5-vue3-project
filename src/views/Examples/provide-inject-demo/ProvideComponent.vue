<template>
  <div class="page">
    <h1>this is provide component</h1>
    <InjectComponent />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import InjectComponent from './InjectComponent.vue';

const name = ref('Provide');

function updateName(newName) {
  name.value = newName;
}

provide('pro_name', {
  name,
  updateName,
});
</script>

<style scoped lang="scss"></style>
