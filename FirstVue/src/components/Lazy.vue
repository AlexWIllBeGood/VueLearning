<template>
    <div id="Lazy">
        <el-input v-model.lazy="value" label="TestValue" style="width:300px"></el-input>
        <p>{{value}}</p>
        <SimpleTemplate></SimpleTemplate>
    </div>
</template>

<script>
export default {
    name:"Lazy",
    data(){
        return{
            value:""
        }
    }
}
</script>