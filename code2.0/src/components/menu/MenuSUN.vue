<template>
  <el-menu
    :default-active="this.$route.path"
    background-color="rgba(0,0,0,0)"
    text-color="#314659"
    active-text-color="#0f8deb"
    unique-opened
    mode="horizontal"
    router
  >
    <SubMenu :subMenuList="menuList" />
  </el-menu>
</template>
         
<script>
import SubMenu from './subMenu'
export default {
  components: {
    SubMenu,
  },
  props: {
    menuList: {
      //接收到的菜单信息
      type: Array,
      defalut: [],
    },
    mode: {
      type: String,
      defalut: "horizontal",
    },
    menuDefalut: {
      type: String,
      defalut: "",
    },
  },
  data() {
    return {
      authority:0,
    };
  },
  //生命周期 - 创建完成
  created() {
   
  },
  //DOM挂载完毕
  mounted() {},
  methods: {},
};
</script>
<style lang='less' scoped>
.el-menu {
  // border: 0;
  .el-menu-item,
  .el-submenu {
    width: 100%;
    min-width: auto;
    font-size: 18px;
  }

  /deep/ .el-menu-item {
    &.is-active{
      border-bottom: 2px solid #1890ff !important;
      span{
        font-weight: bold;
      }
    }
    
  }
  /deep/ .el-submenu {
    .el-submenu__title {
      .el-icon-location{
        margin: 0;
        color:#013c807e;
      }
      span{
        font-size: 18px;
      }
      i{
        font-size: 18px ;
      }
      .el-icon-arrow-down{
        // margin-left: 10px;
        font-size: 18px;
       span{
        font-size: 18px;
      }
      i{
        font-size: 18px ;
      }
    }
    }
  }
}
</style>