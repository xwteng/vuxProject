<template>
    <section>
        <group>
            <cell title="用户名" >{{user.userName}}</cell>
            <cell title="密码" >{{user.userPassword}}</cell>
        </group>
    </section>
</template>
<script>
import { Cell, Group } from 'vux'
export default {
    data() {
        return {
            user: {
                userName: null,
                userPassword: null
            }
        }
    },
    methods: {

    },
    mounted() {
        console.log('this is mounted');
        this.$nextTick(() => {
            //this.user.userName=this.$route.query.name;
            //this.user.userPassword=this.$route.query.password;

            this.user.userName=this.$store.state.UserStore.name;
            this.user.userPassword=this.$store.state.UserStore.password;
        })
    },
    components: { Cell, Group }
}
</script>
<style lang="less">

</style>