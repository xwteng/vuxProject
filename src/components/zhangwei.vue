<template>
  <section>
      {{name}}
      <a v-bind:href="link">this is link </a>
      <a v-bind:href="src">this is src </a>
      <input type="text" @input="change" v-model="name"/>
      <div @click="clickTest">click me</div>
  </section>
</template>
<script>
export default {
  data(){
      return{
          name:'this is zhangwei components data'
      }
  },
  props:['link','src'],
  methods:{
      change(){
            this.$emit('update',{
                tail:'124',
                shot:false
            })
      },
      clickTest(){
          this.$emit('clickHappen',{
              name:'xwteng'
          })
      }
  }
}
</script>

