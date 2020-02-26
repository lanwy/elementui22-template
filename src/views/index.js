

let troutes = []
let tmenus = []

import Demo from './Demo'
troutes.push({path:"/demo", title:"Demo",component: Demo, name:'Demo', meta:{title:'Demo'} })
tmenus.push({"index":"/demo", "title":"Demo", "icon":"el-icon-document"})
tmenus.push({"index":"5", "title":"导航五", "icon":"el-icon-setting", "disabled":true})


export const routes = troutes
export const menus = tmenus
