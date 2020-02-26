import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '~/mainIndex/login'
import Layout from '~/layout'

import { routes } from '~/views'
import mainRoutes from '~/mainIndex'
routes.push(...mainRoutes)

const routers = [
    { path:'/login', name:'login', component:Login },
    { path:'/', name:'layout',  component: Layout,  meta:{title:"Layout"},
        redirect: '/dashboard',
        children: [].concat(routes)
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routers
})
  
const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router

export const routeTags = routes