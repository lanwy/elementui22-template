<template>
    <!-- menu设置了router item中的route才能生效哦 -->
    <el-scrollbar>
        <ve-menu 
            router
            :items="menus"
            :default-active="activeMenu" 
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        </ve-menu> 
    </el-scrollbar>
</template>
<script>
import menus from '~/menus'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            menus
        }
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        },
        isCollapse() {
            return !this.sidebar.opened
        }
    }
}
</script>

