<template>
    <div id="computed">
        <el-input v-model="originalValue" label="RMB" class="inputClass"></el-input>
        <el-input v-model="computedValue" label="Dollar" class="inputClass"></el-input>
    </div>
</template>
<script>
var exhangeRate=7.0905;
export default {
    name:"computed",
    data(){
        return {
            originalValue:""
        }
    },
    computed:{
        computedValue:function(){
            return this.originalValue/exhangeRate;
        }
    }
}
</script>

<style scoped>
.inputClass{
    width: 300px
}
</style>