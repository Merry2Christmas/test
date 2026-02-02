import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { useStorage } from "@vueuse/core";

// 版本, 用于需要重置所有人的本地数据时, 升级版本号即可初始化
const VERSION = 1;
export const useThemeStore = defineStore("useThemeStore", () => {
  const initialData = {
    version: VERSION,
    theme: "light",
  };

  const currentThemeRaw = useStorage("userId-rem-fontSize", initialData);
  if (currentThemeRaw.value?.version !== VERSION) {
    currentThemeRaw.value = initialData;
  }

  watch(
    () => currentThemeRaw.value.theme,
    (newVal) => {
      if (newVal === "dark") {
        document.body.setAttribute("arco-theme", "dark");
      } else {
        document.body.removeAttribute("arco-theme");
      }
    },
    { immediate: true },
  );

  const currentTheme = computed(() => currentThemeRaw.value.theme);

  const obj = {
    currentTheme,
    ToggleTheme() {
      if (currentThemeRaw.value.theme === "light") {
        currentThemeRaw.value.theme = "dark";
      } else {
        currentThemeRaw.value.theme = "light";
      }
    },
  };
  return obj;
});
