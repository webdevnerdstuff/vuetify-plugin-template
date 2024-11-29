import '@/libraries/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createVCodeBlock } from '@wdns/vue-code-block';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createVPluginTemplate } from '../../plugin/index';
import { registerPlugins } from '../../plugins';
import PlaygroundApp from './PlaygroundApp.vue';


const app = createApp(PlaygroundApp);

app.use(createVPluginTemplate());
app.use(createVCodeBlock());
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);

app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
