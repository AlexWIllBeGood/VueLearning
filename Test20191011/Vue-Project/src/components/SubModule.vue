<template>
    <div id="SubModule">
        <el-select v-model="selectedLesson" @change="selectChange" v-show="visible">
            <el-option
            v-for="lesson in lessonTypeList"
            :key="lesson.id"
            :value="lesson.id"
            :label="lesson.name"
            >{{lesson.enName+lesson.name}}</el-option>
        </el-select>
        <el-button @click="doClose">closeSub</el-button>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            selectedLesson:""
        }
    },
    methods:{
        selectChange:function(e){
            this.$emit("valueChange",e);
        },
        doClose:function(){
            this.$emit("update:visible",false);
        }
    },
    props:{
        lessonTypeList:{
            type:Array,
            // isRequired:true,
            default:function(){
                return [
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
                }
            ];
            }
        },
        visible:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>

</style>