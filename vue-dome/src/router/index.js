import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home =()=>
  import ("../views/Home/index.vue")
const Sort =()=>
  import ("../views/Sort/index.vue")
const Message =()=>
  import ("../views/Message/index.vue")
const Application =()=>
  import ("../views/Application/index.vue")
const Examine =()=>
  import ("../views/Examine/index.vue")
const Login =()=>
  import ("../views/Login/index.vue")
const router= new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home,
      meta:{
        title:"首页"
      }
    },
    {
      path:"/sort",
      component:Sort,
      meta:{
        title:"筛选"
      }
    },
    {
      path:"/message",
      component:Message,
      meta:{
        title:"信息表"
      }
    },
    {
      path:"/examine",
      component:Examine,
      meta:{
        title:"审批历史"
      }
    },
    {
      path:"/application",
      component:Application,
      meta:{
        title:"申请表"
      }
    },
    {
      path:"/login",
      component:Login,
      meta:{
        title:"登录"
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  document.title=to.meta.title;
  next();
})
export default router;