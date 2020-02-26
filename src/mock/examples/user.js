import Mock from 'mockjs'

const List = []

for (let i = 0; i < 16; i++) {
  List.push(
    Mock.mock({
        id: '@increment',
        name: '@cname',
        age: '@integer(20, 55)',
        sex: '@pick(["男", "女"])',
        birthday: '@date',
        email: '@email',
        city: '@county(true)'
    })
  )
}

export default {
    getUserList() {
        return List;
    }
}