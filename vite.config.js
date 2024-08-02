import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ["/react-rating-app/src/main.jsx"], // Add the module path that needs to be externalized
    },
  },
};
