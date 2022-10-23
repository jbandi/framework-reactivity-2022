<template>
  <h2>Display of Counter!</h2>
  <h1>{{ val1 }}</h1>
  <h1>{{ val2 }}</h1>
  <button @click="increment">Increment</button>
  <button @click="change">Change</button>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";

let state = reactive({ count: 0, name: "Jonas" });

function increment() {
  state.count++;
  console.log("incremented", state);
}

function change() {
  state.name = new Date().toISOString();
  console.log("changed", state);
}

const val1 = computed(() => {
  console.log("computed val1");
  return state.count;
});
const val2 = computed(() => {
  console.log("computed val2");
  return state.name;
});
</script>

<style scoped></style>
