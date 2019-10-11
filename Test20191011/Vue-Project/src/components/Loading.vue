<template>
    <div id="loading">
        <el-button @click="showLoading" v-loading.fullscreen.lock="fullscreenLoading">click me to show loading</el-button>
    </div>
</template>

<script>
import { timeout } from 'q';
export default {
    name:"#loading",
    data:function(){
        return {
            fullscreenLoading:false
        }
    },
    methods:{
        showLoading:function(){
            this.fullscreenLoading=true;
            setTimeout(() => {
                this.fullscreenLoading=false;
            }, 2000);
        }
    }
}
</script>

<style scoped>

</style>