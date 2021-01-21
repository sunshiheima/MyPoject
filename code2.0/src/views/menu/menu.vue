<template>
  <div class=''>
      <MenuSun :menuList="$router.options.routes[0].children"/>
  </div>
</template>
         
<script>
import MenuSun from '../../components/menu/MenuSUN'
export default {
    components:{
        MenuSun,
    },
  data() {
    return {
        menuList:[]
    };
  },
//生命周期 - 创建完成
  created() {
      console.log('菜单',this.$router.options.routes[0].children)
  },
  //DOM挂载完毕
  mounted() {},
  methods: {},
};
</script>
<style lang='less' scoped>
</style>