import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloFromVux'
import A from '@/components/A'
import B from '@/components/B'
import Test from '@/components/Test'
import LearnVuex from '@/components/LearnVuex'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/vux',
            component: require('../components/routerView'),
            children: [{
                path: '/',
                component: require('../pages/circle/Detail'),
            }, {
                path: 'address',
                component: require('../pages/circle/Address')
            }, {
                path: 'axios',
                component: require('../pages/circle/LearAxios')
            }]
        },
        {
            path: '/login',
            component: require('../components/routerView'),
            children: [{
                path: '/',
                component: require('../pages/login/login'),
            }, {
                path: 'show',
                component: require('../pages/login/show')
            }]
        },
        {
            path: '/vuex',
            component: LearnVuex
        },
        {
            path: '/learnSlot',
            component: require('../components/LearnSlot')
        }
    ]
})