import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faSpaceShuttle);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
    .component('ficon', FontAwesomeIcon)
    .mount('#app')
