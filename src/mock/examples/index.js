// 测试时请在main.js页面引入该js文件： 
//     import './mock'


import Mock from 'mockjs'
import testApi from './test'
import userApi from './user'

Mock.mock(/\/test001\/list\/simple/, 'get', testApi.getSimpleList)
Mock.mock(/\/test001\/list\/image/, 'get', testApi.getImage)

Mock.mock(/\/user\/list/, 'get', userApi.getUserList)