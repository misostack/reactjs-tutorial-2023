import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
  },
  server: {
    port: 3015,
  },
  resolve: {
    alias: [
      {
        find: "@app",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
