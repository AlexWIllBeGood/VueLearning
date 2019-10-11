<template>
    <div id="filterTest">
        <el-select v-model="selectedValue">
            <el-option
            v-for="f in filteredList"
            :key="f.id"
            :label="f.title"
            :value="f.id"></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data(){
        return{
            originalList:[
           {
               id:1,
               title:"A",
               lessonType:1
           },
           {
               id:2,
               title:"B",
               lessonType:1
           },
           {
               id:3,
               title:"C",
               lessonType:2
           },
           {
               id:4,
               title:"D",
               lessonType:3
           },
           {
               id:5,
               title:"E",
               lessonType:3
           }
       ],
       selectedValue:""
        }
    },
    computed:{
        filteredList:function(){
            
            return this.originalList.filter(function(item){
                return item.lessonType==3;
            });
        }
    }
}
</script>