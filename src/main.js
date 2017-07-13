// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import Home from './components/HelloFromVux'
import Hello from './components/Hello'
import Test from './components/Test'
import routerIndex from './router/index'
import store from './store/index'


FastClick.attach(document.body)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    // router, //未使用index.js的路由
    store,
    router: routerIndex,
    render: h => h(App)
}).$mount('#app-box')