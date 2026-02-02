<script setup lang="ts">
import { ref } from "vue";

const isDarkMode = ref<boolean>(false);
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  document.body.setAttribute("arco-theme", isDarkMode.value ? "dark" : "");
};
</script>

<template>
  {{ isDarkMode ? "黑暗模式" : "明亮模式" }}
  <a-switch
    :checked="isDarkMode"
    checked-text="暗黑"
    unchecked-text="明亮"
    @change="toggleTheme"
  />
</template>

<style scoped></style>
