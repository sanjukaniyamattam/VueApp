import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import DashBoard from '@/components/dashboard/DashBoard'
import LeadAdd from '@/components/leads/LeadAdd'
import LeadManage from '@/components/leads/LeadManage'
import LeadEdit from '@/components/leads/LeadEdit'
import ListImages from '@/components/gallery/ListImages'

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
    },
    {
      path: '/LeadEdit/:id/edit',
      name: 'LeadEdit',
      component: LeadEdit,
      params:true
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: ListImages,
      params:true
    }
  ]
})
