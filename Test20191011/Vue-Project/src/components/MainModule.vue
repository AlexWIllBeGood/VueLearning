<template>
    <div id="MainModule">
        <p>get value from SubModule</p>
        <SubModule @valueChange="subValueChange" :lessonTypeList="lessonTypeList" :visible.sync="childShow"></SubModule>
        <el-button @click="showSub">show</el-button>
    </div>
</template>

<script>
import SubModule from './SubModule'
export default {
    data:function(){
        return{
            lessonType:"",
            childShow:true,
            lessonTypeList:[
                {
                    id:1,
                    enName:"StudyWord",
                    name:"单词学习"
                },
                {
                    id:2,
                    enName:"StudySyntax",
                    name:"句型学习"
                },
                {
                    id:3,
                    enName:"StudyDialogue",
                    name:"对话学习"
                },
                {
                    id:4,
                    enName:"TestParam",
                    name:"测试传参"
                }
            ]
        }
    },
    methods:{
        subValueChange:function(e){
            this.lessonType=e;
        },
        showSub:function(){
            this.childShow=true;
        }
    },
    components:{
        SubModule
    },
    watch:{
        childShow:function(nval,oval){
            console.log(`from ${oval} to ${nval}`);
        }
    }
}
</script>

<style scoped>

</style>