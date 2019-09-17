<template>
  <div id="app">
    <img src="./assets/logo.png">
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
      <router-view></router-view>
      <!-- <SelectControl></SelectControl> -->
      <!-- <InputControl></InputControl> -->
  </div>
</template>
<script>

import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import about from './components/about'
import SelectControl from './components/SelectControl' 
import InputControl from './components/InputControl'

export default{
  name:'App',
  components:{
    HelloWorld,
    Home,
    about,
    SelectControl,
    InputControl
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
