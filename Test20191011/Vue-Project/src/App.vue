<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <MainModule></MainModule>
    <!-- <Loading></Loading> -->
  </div>
</template>

<script>
import MainModule from './components/MainModule'
import Loading from './components/Loading'
export default {
  name: 'App',
  components:{
    MainModule,
    Loading
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
