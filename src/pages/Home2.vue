<script setup lang="ts">
import { ref, onMounted } from "vue";

import { RouterView } from "vue-router";
import ChangeTheme from "@/components/ChangeTheme.vue";
import copyText from "@/utils/copyText.ts";
import { isArray } from "@/utils/is.ts";

function onCopy() {
  copyText("231313")
    .then(() => {
      alert("复制成功");
    })
    .catch(() => {
      alert("复制失败");
    });
}

onMounted(() => {
  console.log("???", isArray("8"), isArray(["8"]));
});
</script>

<template>
  <div
    :style="{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }"
  >
    <div>
      <button @click="onCopy" style="margin-bottom: 20px">复制按钮</button>
    </div>
    <div
      :style="{
        width: '300px',
        height: '300px',
        backgroundColor: 'rgb(var(--primary-6))',
      }"
    >
      <ChangeTheme />
    </div>
  </div>
</template>

<style scoped></style>
