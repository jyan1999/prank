import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import lvProgressbar from 'lightvue/progress-bar' 
createApp(App).component('progressbar', lvProgressbar).mount('#app')
