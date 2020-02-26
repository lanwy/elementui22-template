<template>
  <el-dropdown trigger="click" @command="handleSetLang">
    <div>
      <i class="iconfont ve-icon-lang" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item 
        v-for="item of langOptions" 
        :key="item.value" 
        :disabled="lang===item.value" 
        :command="item.value">
        {{ item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name:'LangSelect',
  data() {
    return {
      langOptions: [
        { label: '中文', value: 'CN' },
        { label: 'English', value: 'EN' }
      ]
    }
  },
  computed: {
    lang() {
      return 'CN'
    }
  },
  methods: {
    handleSetLang(lang) {
      //this.$ELEMENT.size = size
      //this.$store.dispatch('app/setSize', size)
      //this.refreshView()
      this.$message({
        message: 'Switch Lang Success',
        type: 'success'
      })
    },
    refreshView() {
      // In order to make the cached page re-rendered
      //this.$store.dispatch('tagsView/delAllCachedViews', this.$route)

      const { fullPath } = this.$route

      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    }
  }

}
</script>
