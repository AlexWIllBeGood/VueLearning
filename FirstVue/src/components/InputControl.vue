<template>
    <div id="InputControl">
        <input id="messageInput" v-model="message" placeholder="please enter message" @change="inputChange()">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name:"InputControl",
    data(){
        return {
            message:""
        }
    },
    methods:{
        inputChange:function(){
            console.log(this.message);
        }
    }
}
</script>