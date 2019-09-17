<template>
  <!-- 属性绑定 -->
  <div v-bind:id="'home-'+id">
    <h1>{{title}}</h1>
    <p>{{content}}</p>
    <!-- 双向绑定对话框 -->
    <!-- 监听事件 -->
    <input v-model="message" placeholder="please enter something" v-on:input="inputEvent()" v-on:change="changeEvent()">
    <p>the message is {{message}}</p>
    <!-- 判断是否显示 仅仅在初始渲染的时候进行判断-->
    <p v-if="showTips">be patient to learn</p>
          <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
  </div>
</template>
<script>
import about from './About'
export default {
  name:"home",
  data(){
    return {
      id:1,
      title:"this is home title",
      content:"this is home content",
      message:"",
      showTips:false,
      value:true
    }
  },
  components:{
    about
  },
  methods:{
    inputEvent:function(){
      console.log("input event!")
    },
    changeEvent:function(){
      console.log("change event!")
    }
  }
}
</script>