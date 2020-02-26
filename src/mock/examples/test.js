import Mock from 'mockjs'

let data = Mock.mock({
    'list|10': [{'id|+1': 1}]
})

export default {
    getSimpleList() {
        return data
    },

    getImage() {
        console.log(Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js'))
        return "aaaa"
    }
}