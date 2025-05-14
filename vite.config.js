import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/sharkweb/', // <-- SLASH al inicio y al final
    plugins: [react()],
})