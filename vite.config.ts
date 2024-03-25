import { defineConfig } from 'vite'
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin()
  ],
})
