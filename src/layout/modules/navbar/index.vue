<!-- 下列元素有对应id的，是为了guide服务的 -->
<template>
  <div class="navbar">
    <hamburger 
      id="hamburger-container"
      :is-active="sidebar.opened" 
      class="hamburger-container" 
      @toggle-click="toggleSideBar"/>
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="right-menu">
      <header-search id="header-search" class="right-menu-item" />
      <error-log class="right-menu-item"  />
      <screenfull id="screenfull" class="right-menu-item hover-effect" />
      <size-select id="size-select" class="right-menu-item hover-effect" />
      <lang-select id="lang-select" class="right-menu-item hover-effect" />
      <about-me class="right-menu-item hover-effect" />
    </div>
  </div>
</template>

<script>
import Breadcrumb from './modules/Breadcrumb'
import Hamburger from './modules/Hamburger'
import HeaderSearch from './modules/HeaderSearch'
import ErrorLog from './modules/ErrorLog'
import Screenfull from './modules/Screenfull'
import SizeSelect from './modules/SizeSelect'
import LangSelect from './modules/LangSelect'
import AboutMe from './modules/AboutMe'
import { mapGetters } from 'vuex'
export default {
    name:'NavBar',
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    components: {
      Breadcrumb,
      Hamburger,
      HeaderSearch,
      ErrorLog,
      Screenfull,
      SizeSelect,
      LangSelect,
      AboutMe
    },
    
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
  }
}
</style>
