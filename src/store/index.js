import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        UserStore
    },
    state: {
        count: 0,
        age: 18
    },
    mutations: {
        increment(state) {
            state.count++
        },
        addAge(state) {
            state.age++;
        },
        setAge(state, value) {
            state.age = value;
        }
    },
    actions: {
        setAgeByAction(context, value) {
            context.commit('setAge', value);
        },
        setAge2(context, value) {
            context.commit('setAge', value);
        }
    }
})

export default store;