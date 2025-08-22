import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '@playcanvas/web-components/dist/pwc.mjs'

const app = createApp(App)
const vuetify = createVuetify()
app.use(router)
app.use(vuetify)
app.mount('#app')
