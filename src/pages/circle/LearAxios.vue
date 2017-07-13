<template>
  <section>

  </section>
</template>
<script>
import Axios from 'axios'

export default {
  data(){
      return{

      }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
        Axios.get('https://api.bootcdn.cn/libraries.min.json')
        .then((res)=>{
            console.log('----------------------res data is ---------------------------');
            console.log(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  }
}
</script>

