let user = {
    state: {
        name: 'tengxiaowang',
        age: 18,
        password: '123'
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        },
        setAge(state, value) {
            state.age = value;
        },
        setPassword(state, value) {
            state.password = value;
        }
    },
    actions: {
        setName(context, value) {
            context.commit('setName', value);
        },
        setAge(context, value) {
            context.commit('setAge', value);
        },
        setPassword(context, value) {
            context.commit('setPassword', value);
        }
    }
}

export default user;