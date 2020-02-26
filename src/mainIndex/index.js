import profile from './profile'
import documentation from './documentation'
import dashboard from './dashboard/admin'
const routes = [
    {path:"/dashboard", component: dashboard, name:'dashboard', meta:{title:"首 页", affix:true} },
    {path:"/profile", component: profile, name:'profile', meta:{title:"个人中心" } },
    {path:"/documentation", component: documentation, name:'Documentation', meta:{title:"文 档",affix:true} }
]

export default routes