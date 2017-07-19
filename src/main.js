import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import App from './App.vue'
import store from './store/store';
import { routes } from './routes'


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.http.options.root = "https://tdc-es6.firebaseio.com/";

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})