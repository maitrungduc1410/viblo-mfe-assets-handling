import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  preview: {
    port: 3003,
  },
  plugins: [
    vue(),
    federation({
      name: "vue_mfe_app",
      filename: "remoteEntry.js",
      exposes: {
        "VueAppLoader": "./src/loader.ts",
      },
      shared: ["vue"],
    }),
  ],
});
