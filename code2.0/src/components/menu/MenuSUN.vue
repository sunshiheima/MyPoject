<template>
  <el-menu
    :default-active="$route.path"
    background-color="rgba(0,0,0,0)"
    text-color="#314659"
    active-text-color="#0f8deb"
    unique-opened
    :menu-trigger="menuTrigger"
    :mode="mode"
    router
  >
    <SubMenu :subMenuList="menuList"  :mode="mode"/>
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
      default: [],
    },
    mode: {
      //菜单 水平  垂直 horizontal / vertical
      type: String,
      default: "horizontal",
    },
    menuTrigger: {
      //菜单 水平  垂直 horizontal / vertical
      type: String,
      default: "click",
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
  border-bottom: 0;//不要下边框
  /deep/ .el-menu-item {
    /* 选中菜单颜色 */
    font-size: 18px;
    &.is-active{
      border-bottom: 2px solid #1890ff !important;
      span{
        font-weight: bold;
      }
    }
    
  }
  /* 子级菜单项 */
  /deep/ .el-submenu {
    .el-submenu__title {
      display: flex;
      align-items: center;
      span{
        padding: 0 10px;
      }
      .el-icon-location{//前图标
        position: static;
        margin: 0;
        color:#013c807e;
      }
      span{
        font-size: 18px;
      }
      i{
        font-size: 18px ;
      }
      .el-icon-arrow-down{//后图标
        position: static;
        margin: 0;
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