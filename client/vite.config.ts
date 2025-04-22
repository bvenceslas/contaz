import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: [
      "@trpc/server/unstable-core-do-not-import",
      "@trpc/server/observable",
      "@trpc/server/rpc",
    ],
  },
  build: {
    rollupOptions: {
      external: [
        "@trpc/server/unstable-core-do-not-import",
        "@trpc/server/observable",
        "@trpc/server/rpc",
      ],
    },
  },
});
