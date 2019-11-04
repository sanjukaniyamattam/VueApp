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
      name: 'Lgoin',
      component: Login
    },
    {
      path: '/Dash',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/LeadAdd',
      name: 'LeadAdd',
      component: LeadAdd
    },
    {
      path: '/LeadManage',
      name: 'LeadManage',
      component: LeadManage
    }
  ]
})
