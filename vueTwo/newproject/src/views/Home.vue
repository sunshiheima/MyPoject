<template>
  <div class="home">
    <div :class="bg&&'bor_1'" class="box2  h_10 bw_ BFFF f6666 999 000 999   test_20 "></div>
    <el-button type="danger">el按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      bg:false,
    }
  },
  mounted(){
    const _this=this;
    this.time=setTimeout(() => {
      _this.bg=true;
    }, 5000);
  }
}
</script>
<style lang="scss" scoped>
.box2{
  background-color:pink;
  height: 400px;
  width: 300px;
}
.f6666{
  background-color: #666 !important;
}
</style>
