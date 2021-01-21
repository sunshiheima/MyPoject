<template>
  <div class="home fx_col">
    <div id="nav" class="fx">
      <router-link class="fx fx_row_center fx_col_center" to="/wordOut"
        ><span>导出html</span></router-link
      >
      <router-link class="fx fx_row_center fx_col_center" to="/arcgisImg"
        ><span>arcgisImg</span></router-link
      >
      <router-link class="fx fx_row_center fx_col_center" to="/button"
        ><span>按钮</span></router-link
      >
      <router-link class="fx fx_row_center fx_col_center" to="/menu"
        ><span>菜单</span></router-link
      >
      <router-link class="fx fx_row_center fx_col_center" to="/imgTochBox"
        ><span>图片框</span></router-link
      >
    </div>
    <router-view class="router_view fx_1" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getListByCode } from "@/api/test.js";
export default {
  name: "Home",
  components: {},
  created() {},
  mounted() {
    getListByCode("002").then((res) => {
      console.log(res.data);
    });
  },
};
</script>
<style lang='less' scoped>
.home{
  background-color: #000;
}
#nav {
  a {
    text-align: center;
    height: 40px;
    flex: 0 0 120px;
    letter-spacing: normal;
    background-color: cornflowerblue;
    border-radius: 5px;
    margin: 10px;
  }
}
</style>
