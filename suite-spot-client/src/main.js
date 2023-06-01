// import { createApp } from 'vue'
// import { createPinia } from 'pinia';
// import './style.css'
// import App from './App.vue'

// createApp(App).use(createPinia()).mount('#app');





import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/Routes.js'
import VueClickAway from "vue3-click-away";

const app = createApp(App)

app.use(VueClickAway)
app.use(createPinia())
app.use(router)

app.mount('#app')
