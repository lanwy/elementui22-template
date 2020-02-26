<!-- 
hideSidebar 必须放在最外层的div, 
对左边的sidebar和中间模块同时变化 
否则页面会卡死哦：内存溢出了
-->
<template>   
    <div :class="{'hide-sidebar':hideSidebar}">
        <side-bar class="sidebar-container"  />
        <div class="main-container">
            <ve-sticky>
                <nav-bar />
                <tags-view />
            </ve-sticky>
            <app-main style="margin-top:20px;" />
        </div>
    </div>
    
</template>

<script>
import SideBar from './modules/SideBar'
import NavBar from './modules/navbar'
import TagsView from './modules/tagsView'
import AppMain from './modules/AppMain'
import { mapState } from 'vuex'
export default {
    name:'Layout',
    data() {
        return {

        };
    },
    computed: {
        ...mapState({
            sidebar: state => state.app.sidebar,
            device: state => state.app.device,
        }),
        hideSidebar() {
            return !this.sidebar.opened
        }
    },
    components: { AppMain, NavBar, TagsView, SideBar }
}
</script>

<style lang="scss" scoped>
    $sideBarWidth: 17%;

    .sidebar-container {
        transition: width 0.28s;
        width: $sideBarWidth;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    }

    .main-container {
        min-height: 100%;
        transition: margin-left .28s;
        margin-left: $sideBarWidth;
        position: relative;
    }

    .hide-sidebar {
        .sidebar-container {
            width: 54px !important;
        }
        .main-container {
            margin-left: 54px;
        }
    }


</style>