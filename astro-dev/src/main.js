import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
    .component('ficon', FontAwesomeIcon)
    .mount('#app')
