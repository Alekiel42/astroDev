import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue';
import './index.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faSpaceShuttle);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

app.component('ficon', FontAwesomeIcon);
app.component('base-button', BaseButton);

app.mount('#app')
