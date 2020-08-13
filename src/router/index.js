import Vue from 'vue'
import Router from 'vue-router'


//懒加载
const index=()=>import('../views/index/index')
const categroy=()=>import('../views/category/category')
const shopcard=()=>import('../views/shopcard/shopcard')
const profile=()=>import('../views/profile/profile')



Vue.use(Router)
const route=[
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:index,
  },
  {
    path:'/categroy',
    component: categroy,
  },
  {
    path:'/shopcard',
    component:shopcard,
  },
  {
    path:'/profile',
    component:profile,
  },

]
export default new Router({
  routes:route,
  mode:'history',
})
