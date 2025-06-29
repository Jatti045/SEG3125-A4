import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: './',
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, "./src"),
    },
  }
});