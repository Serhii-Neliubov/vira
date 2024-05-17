// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { resolve } from "path";

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/

let __dirname;
const root = resolve(__dirname, "src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(root, "components"),
      "@pages": resolve(root, "pages"),
      "@assets": resolve(root, "assets"),
    },
  },
});