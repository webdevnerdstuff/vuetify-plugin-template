import '@/libraries/fontawesome';
import App from './App.vue';
import { createVCodeBlock } from '@wdns/vue-code-block';
import { createVPluginTemplate } from './plugin/index';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const app = createApp(App);

app.use(createVCodeBlock());
app.use(createVPluginTemplate());
app.use(createPinia());

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
