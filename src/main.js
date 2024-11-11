import './assets/style/base.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/router.ts';
// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Skeletor
import { Skeletor } from 'vue-skeletor';
import 'vue-skeletor/dist/vue-skeletor.css';
const vuetify = createVuetify({
    components,
    directives,
});
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component(Skeletor.name, Skeletor);
app.use(vuetify).mount('#app');
