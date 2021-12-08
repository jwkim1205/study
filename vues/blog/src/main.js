import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import blogRouter from './router.js'

createApp(App).use(blogRouter).mount('#app')
