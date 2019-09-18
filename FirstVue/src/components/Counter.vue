<template>
    <div id="counter">
        <el-input v-model="count" class="inputStyle"></el-input>
        <el-button class="buttonStyle" @click="count++" type="primary">click me!</el-button>
    </div>
</template>

<script>
export default {
    name:"counter",
    data(){
        return {
            count:1
        }
    },
    //监控值的变化
    watch:{
        count(nval,oval){
            console.log("Value changed from "+oval+" to "+nval);
        }
    }
}
</script>

<style scoped>
.inputStyle{
    font-size:15px;
    width: 300px
}
.buttonStyle{
    font-size: 15px;
    width: 100px
}
</style>