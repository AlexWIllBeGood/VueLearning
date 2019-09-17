<template>
  <div>
    <h1>this is a select control demo</h1>
    <select id="select" name="coupan-choose" v-model="selectedCoupan" @change="getSelectedCoupan()">
        <!-- 属性前面加上:表示后面是表达式 否则为字面量-->
       <option :key="coupan.id" :value="coupan.id" v-for="coupan in coupanList">{{coupan.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
    name:"SelectControl",
    data(){
        return {
            selectedCoupan:"",
            coupanList:[
                {
                    id:1,
                    name:"coupan1"
                },
                {
                    id:2,
                    name:"coupan2"
                },
                {
                    id:3,
                    name:"coupan3"
                }
            ]
        }
    },
    created(){
        this.selectedCoupan=this.coupanList[0].id;
    },
    methods:{
        getSelectedCoupan:function(){
            console.log(this.selectedCoupan);
        }
    }
}
</script>