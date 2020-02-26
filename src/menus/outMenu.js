//一些外部网站的链接

const xtype = "menu-href"
const target = "_blank"
const menus = [
    {"href":"https://www.iconfont.cn/","title":"iconfont", target, xtype},
]

const outMenu = {
    "title": "外部链接",
    "icon" : "el-icon-paperclip",
    "xtype": "sub-menu",
    "index": "a-out-href",
    "items": menus
}
export default outMenu