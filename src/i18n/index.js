/**
 * 使用案例如： $t("m.name")
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

//使用引入
Vue.use(VueI18n);

// 准备翻译的语言环境信息
// 具体的数据在index.html中引入
const messages = {
  en: window.en_us,
  cn: window.zh_cn
}

// 通过选项创建 VueI18n 实例
export default new VueI18n({
  locale: 'cn', 
  messages
})


