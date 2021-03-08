
<template >
  <div class="box">
    <template v-for="(item, index) in subMenuList">
      <el-submenu
        v-if="item.children && item.children.length > 0"
        :key="index + 'el-submenu'"
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.meta.icon&&item.meta.icon"></i>
          <span>{{ item.meta.name }}</span>
        </template>
        <SubMenu :subMenuList="item.children" />
      </el-submenu>
      <el-menu-item v-else :key="index + item.path" :index="item.path">
         <template slot="title">
          <i :class="item.meta.icon&&item.meta.icon"></i>
          <span>{{ item.meta.name }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>
         
<script>
import SubMenu from "./subMenu";

export default {
  name: "SubMenu", //必须要 递归组件的关键，并且要与引入组件的变量名称一致
  components: {
    SubMenu,
  },
  props: {
    subMenuList: {
      //接收到的菜单信息
      type: Array,
      defalut: [],
    },
    authority: {
      //填报权限 0 1不展示
      type: Number,
      defalut: 0,
    },
  },
  data() {
    return {
    };
  },
  computed:{
    
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
</style>