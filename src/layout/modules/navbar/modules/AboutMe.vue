<template>
    <el-dropdown trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <template v-slot:dropdown>
            <el-dropdown-menu>
                <router-link to="/profile">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                </router-link>
                <router-link to="/">
                    <el-dropdown-item>首页</el-dropdown-item>
                </router-link>
                <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
                    <el-dropdown-item>Github</el-dropdown-item>
                </a>
                <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
                    <el-dropdown-item>Docs</el-dropdown-item>
                </a>
                <el-dropdown-item divided @click.native="logout">
                    <span style="display:block;">退出登录</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
      </el-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'AboutMe',
    computed: {
        ...mapGetters([
            'avatar'
        ])
    },
    methods: {
         logout() {

         }
    }
}
</script>

<style lang="scss" scoped>
    .avatar-wrapper {
        margin-top: 5px;
        margin-right: 20px;
        position: relative;
        .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }
    }

    .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
    }
</style>


