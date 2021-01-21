<template>
      <el-menu
      default-active
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      mode="horizontal" 
      router
    >
      <template v-for="(item,index) in menuList">
        <el-submenu v-if="item.children&&item.children.length>0" :key="index+'el-submenu'" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.meta.name}}</span>
          </template>
          <MenuSUN :menuList="item.children"/> 
        </el-submenu>
        <el-menu-item v-else :key="index+'el-menu-item'" :index="item.path">{{item.meta.name}}</el-menu-item>
      </template>
    </el-menu>
</template>
         
<script>
import MenuSUN from "@/components/menu/MenuSUN.vue";
export default {
    name:'MenuSon',//必须要 递归组件的关键，并且要与引入组件的变量名称一致
    components:{
        MenuSUN,
    },
    props:{
       menuList:{//接收到的菜单信息
           type:Array,
           defalut:[]
       } 
    },
  data() {
    return {};
  },
//生命周期 - 创建完成
  created() {},
  //DOM挂载完毕
  mounted() {},
  methods: {},
};
</script>
<style lang='less' scoped>
</style>