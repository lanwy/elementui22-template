import { menus }  from '../views'

//外部链接
import outMenu from './outMenu'

const allMenu = [].concat(menus, outMenu)

/** 将可点击的页面整理成一个list,方便搜索 */
let menuList = []
function getMenu(menus){
    menus.forEach((menu, index) => {
        if(menu){
            if(menu.items){
                getMenu(menu.items)
            }else{
                menuList.push(menu)
            }
        }
    })
}

getMenu(allMenu);

export const searchMenus = menuList

//导出整个菜单    
export default allMenu