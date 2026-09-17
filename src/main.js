import { createApp } from 'vue'
import './style.css' // <-- Esto es obligatorio para que Tailwind cargue
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')