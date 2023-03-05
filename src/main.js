// import { createApp } from 'vue'
// import { createPinia } from 'pinia';
// import './style.css'
// import App from './App.vue'

// createApp(App).use(createPinia()).mount('#app');





import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/Routes'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
