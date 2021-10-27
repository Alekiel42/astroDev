import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
    .component('ficon', FontAwesomeIcon)
    .mount('#app')
