import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            find: /^@\/(.+)/,
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            sass: {
                additionalData: `@use "@/assets/sass/unitExample" as *\n@use "@/assets/sass/fonts"\n@use "@/assets/sass/global"`,
            },
        },
    },
});