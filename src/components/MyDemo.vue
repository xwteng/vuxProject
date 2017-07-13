<template>
  <div>
      <p>this is my name {{name}}</p>

      <input type="text" v-model:value="childrens.name" /> 
  </div>
</template>

<<script>
export default {
  data(){
      return{
          name:"tengxiaowan",
          childrens: {  
                name: '小强',  
                age: 20,  
                sex: '男'  
            }
      }
  },
  watch:{  
            childrens:{  
                handler:function(val,oldval){  
                    console.log(val.name)  
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },  
            'childrens.name':function(val,oldval){  
                console.log(val)  
            }//键路径必须加上引号  
        }//以V-model绑定数据时使用的数据变化监测  
}
</script>

