import '@/libraries/fontawesome';
import App from './App.vue';
import { createVCodeBlock } from '@wdns/vue-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { makeServer } from './server';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as MyComponents from './index';

makeServer({ environment: 'demo' });

const app = createApp(App);

app.use(createVCodeBlock());
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);
app.component('VPluginTemplate', MyComponents.VPluginTemplate);

registerPlugins(app);

app.mount('#app');
