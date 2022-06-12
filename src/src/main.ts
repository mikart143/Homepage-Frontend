import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.errorHandler = (err) => {
    console.error(`ERROR|${new Date().toISOString()}: `, err);
};

app.config.warnHandler = (warn) => {
    console.warn(`WARN|${new Date().toISOString()}: `, warn);
};

app.use(createPinia());
app.use(router);

app.mount('#app');
