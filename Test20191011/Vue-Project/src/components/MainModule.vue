<template>
    <div id="MainModule">
        <p>get value from SubModule</p>
        <SubModule @valueChange="subValueChange" ></SubModule>
        <el-button @click="showSub">show</el-button>
    </div>
</template>

<script>
import SubModule from './SubModule'
export default {
    data:function(){
        return{
            lessonType:"",
            childShow:false
        }
    },
    methods:{
        subValueChange:function(e){
            this.lessonType=e;
        },
        showSub:function(){

        }
    },
    components:{
        SubModule
    }
}
</script>

<style scoped>

</style>