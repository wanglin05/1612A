// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import './utils/flexble';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui';
// import './static/scss/common.scss';
import router from './router/index';
import elui from "../src/plugins/elui"
Vue.use(elui);
Vue.use(ElementUI);
// Vue.component("el-header",head)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
        // render(createElement) {
        //     console.log(createElement(App));
        //} // 渲染 返回vnode vnode会变成真实dom节点替换el
})