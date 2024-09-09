import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
createApp(App).use(router).mount('#app')
