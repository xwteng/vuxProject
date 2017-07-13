<template>
    <section>
        <group>
            <x-input title="用户名" v-model="user.userName" placeholder="请输入用户名"></x-input>
            <x-input title="密码" v-model="user.userPassword" placeholder="请输入密码"></x-input>
        </group>
        <div style="padding:15px;">
            <x-button @click.native="userLogin" type="primary"> 登录</x-button>
        </div>
    </section>
</template>
<script>
import Vue from 'vue'
import { XInput, XButton, Group } from 'vux'
import { mapState, mapMutations, mapActions } from 'vuex'


// Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     userName:null,
//     userPassword: null
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

export default {
    data() {
        return {
            user: {
                userName: null,
                userPassword: null,
            }
        }
    },
    computed: {
        ...mapState({
            myname: state => state.UserStore.name,
            myage: state => state.UserStore.age,
            mypassword: state => state.UserStore.password
        })
    },
    mounted() {
        console.log('-------------- myname is : ----------------------');
        console.log(this.myname);


        console.log('-------------- myage is : ----------------------');
        console.log(this.myage);

        //这里设置的是：mutations的写法
        console.log('-------------- my age is : ----------------------');
        console.log(this.$store.state.age);

        //this.$store.commit('addAge');
        this.setAge(33);

        console.log('-------------- my age is : ----------------------');
        console.log(this.$store.state.age);

        //actions 写法：
        //this.$store.dispatch('setAgeByAction',22);
        this.setAge2(77);

        console.log('--------------actions my age is : ----------------------');
        console.log(this.$store.state.age);

        console.log('--------------my user name is : ----------------------');
        console.log(this.$store.state.UserStore.name);

    },
    methods: {
        ...mapActions([
            'setAgeByAction', 'setAge2' // 映射 this.increment() 为 this.$store.dispatch('increment')
        ]),
        ...mapMutations([
            'setAge','setName','setPassword' // 映射 this.increment() 为 this.$store.commit('increment')
        ]),
        userLogin() {
            console.log(this.user);
            //console.log('-----------------'+this.$store.state.user.userName);
            //this.$router.push(`show?name=${this.user.userName}&password=${this.user.userPassword}`);
            //this.$router.push({ path: '/login/show', query: { name: `${this.user.userName}`, password: `${this.user.userPassword}` } })

            //此处设置值无效
            //this.myage=this.user.userName;
            //this.mypassword=this.user.userPassword;

            //尝试使用state来设置值,有效
            //this.$store.state.UserStore.name=this.user.userName;
            //this.$store.state.UserStore.password=this.user.userPassword;

            //set方法设置值有效
            this.setName(this.user.userName);
            this.setPassword(this.user.userPassword);
            this.$router.push({ path: '/login/show'});
        }
    },
    components: { XInput, XButton, Group }
}
</script>
<style lang="less">

</style>



