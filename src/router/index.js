import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import DashBoard from '@/components/DashBoard'
import LeadAdd from '@/components/LeadAdd'
import LeadManage from '@/components/LeadManage'
// import LeadManage from '@components/LeadAdd'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Login
    },
    {
      path: '/Dash',
      name: 'HelloWorld',
      component: DashBoard
    },
    {
      path: '/LeadAdd',
      name: 'HelloWorld',
      component: LeadAdd
    },
    {
      path: '/LeadManage',
      name: 'HelloWorld',
      component: LeadManage
    }
  ]
})
