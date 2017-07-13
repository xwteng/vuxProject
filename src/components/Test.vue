<template>
  <div class="test-container">
      <input type="text" v-model="name" @input="change"/>
      <p ref="myp">super name is:{{supername}}</p>
      <zhangwei :link.sync="myLink" @update="myupdate"></zhangwei>
      <zhangwei :src="mysrc" @update="myupdate"></zhangwei>
      <zhangwei v-bind="{src:mysrc,link:myLink}" @clickHappen="clickTest"></zhangwei>


      <p v-if="index==0">显示的内容是v-if</p>
      <p v-else>显示的内容是else</p>

      <p v-show="index==1">this is v-show content </p>

      <ul>
          <li v-for="(item,index) in list" @click="show(index)">
                
                   <p> {{ `${item.name}-${item.age}-${item.sex}` }}</p>
                   <p> {{`the index is : ${index}`}}</p>
          </li>
      </ul>
  </div>
</template>
<script>


export default {
    components:{
        'zhangwei':require('./zhangwei')
    },
  data(){
      return{
          mysrc:'www.badidu.com',
          myLink:'www.bootcdn.com',
          list:[
                {
                    name:"my name is zhangwei",
                    age:18,
                    sex:'man'
                },
                {
                    name:"my name is xiaowang",
                    age:19,
                    sex:'woman'
                },
                 {
                    name:"my name is wulingmei",
                    age:20,
                    sex:'woman'
                },
                 {
                    name:"my name is qingxin",
                    age:21,
                    sex:'woman'
                },
          ],
          index:1,
          name:'我的名字叫：张威',
          age:[],
          email:{
            myemail:'zhangwei900808@126.com'//todo:watch如何监听
          }
      }
  },
  computed:{
      supername(){
          return `我的supername是：晓婉，${this.name}`;
      }
  },
  watch:{
       name(val){
           console.log(`新的值是：${val}`)
       }
  },
  created(){
      console.log('this is created');
      this.getData();
  },
  mounted(){
      //应用场景：从数据库获取列表数据要展示在页面上面，就要通过ajax，一开始就加载数据就放到mounted里面
      console.log('this is mounted');
      this.$nextTick(()=>{
          this.$refs.myp.style.color='red';
          this.getData();
      })
  },
  methods:{
      myupdate(val){
            console.log('this is my update ')
            console.log(val);
      },
      show(index){
            console.log(`the index has:${index}`)
      },
    change(){
        console.log('文本已经修改了')
    },
    getData(){
        //ajax
        console.log('this is ajax')
    },
    clickTest(val){
        console.group("group1 begin");
        console.log(`------------click test----------${val.name}-------------`);
        console.groupEnd();
        console.group("group2 begin");
        console.log(`------------click test----------${val.name}-------------`);
        console.groupEnd();
        var result=2012;
        //console.assert(result==2015);

        console.time('time begin');
        for(var i=0;i<999;i++){
            for(var j=0;j<9999;j++){

            }
        }
        console.timeEnd('time end');
    }
  }
}
</script>
<style>

</style>

