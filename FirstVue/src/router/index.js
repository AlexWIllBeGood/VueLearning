import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import RuleForm from '@/components/RuleForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Ruleform'
    },
    {
      path: '/RuleForm',
      name: 'RuleForm',
      component: RuleForm
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
