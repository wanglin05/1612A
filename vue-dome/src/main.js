// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./utils/flexble"
import '@/static/fonts/iconfont.css'
import axios from "axios";
import Vuex from "./store/index"
import store from '../src/store'
Vue.config.productionTip = false
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    Vuex,
    store,
    components: { App },
    template: '<App/>'
})