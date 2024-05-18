import {resolve} from "path";

import {defineConfig} from "vite";
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/

const root = resolve(__dirname, "src");

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": resolve(root, "components"),
            "@pages": resolve(root, "pages"),
            "@assets": resolve(root, "assets"),
            "@models": resolve(root, "models"),
            "@services": resolve(root, "services"),
            "@hooks": resolve(root, "hooks"),
        },
    },
});