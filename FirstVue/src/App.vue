<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
      <!-- <router-link to="/Home">home</router-link>
      <router-link to="/About">about</router-link> -->
      <!-- <router-view></router-view> -->
      <!-- <SelectControl></SelectControl> -->
      <!-- <InputControl></InputControl> -->
      <!-- <RuleForm></RuleForm> -->
      <!-- <Computed></Computed> -->
      <!-- <Counter></Counter> -->
      <!-- <Lazy></Lazy> -->
      <!-- <axios></axios> -->
      <!-- <ListFilter></ListFilter> -->
      <Popover></Popover>
  </div>
</template>
<script>

import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import about from './components/About'
import SelectControl from './components/SelectControl' 
import InputControl from './components/InputControl'
import RuleForm from './components/RuleForm'
import Computed from './components/Computed'
import Counter from './components/Counter'
import Axios from './components/Axios'
// import Lazy from './components/Lazy'
import ListFilter from './components/Filter'
import Popover from './components/Popover'

export default{
  name:'App',
  components:{
    HelloWorld,
    ListFilter,
    Popover
    // Home,
    // about,
    // SelectControl,
    // InputControl,
    // RuleForm,
    // Computed,
    // Counter,
    // Axios
    // Lazy
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
