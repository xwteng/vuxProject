<template>
  <section>
      <group>
        <x-address  
        :title="title" 
        v-model="value" 
        :list="addressData" 
        placeholder="请选择地址" 
        :hide-district="true"
        ></x-address>
    </group>

  </section>
</template>
<script>

import { Group, XAddress, ChinaAddressV3Data, XButton, Cell, Value2nameFilter as value2name } from 'vux'
export default {
    components:{
        Group, XAddress, XButton, Cell
    },
  data(){
      return{
          title:'这是我的第一个地址选择器',
          value:[],
          addressData: ChinaAddressV3Data,
      }
  },
  watch:{
      value(newVal){
          console.log('----------------new address is-------------------');
          console.log(newVal);
      }
  }
}
</script>

