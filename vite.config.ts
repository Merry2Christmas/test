import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig(() => {
  const env = loadEnv("", process.cwd());
  return {
    base: `/${env.VITE_APP_PRODUCT_CODE}/`,
    esbuild: {
      drop:
        process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
