<template>
    <div id="About">
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        <P>{{details()}}</P>
        <ol>
           <li :key="fruit.id" v-for="fruit in FruitsList">{{fruit.name}}</li> 
        </ol>
    </div>
</template>

<script>
var data={
    title:"this is about title",
    content:"this is about content",
    FruitsList:[
        {
            id:1,
            name:"Apple",
            price:1
        },
        {
            id:2,
            name:"Banana",
            price:2
        },
        {
            id:3,
            name:"Orange",
            price:3
        },
        {
            id:4,
            name:"Grape",
            price:4
        },
    ]
}
export default {
    data(){
        return data
    },
    name:"About",
    components:[

    ],
    methods:{
        details:function(){
            return "this is method";
        }
    }
}
</script>