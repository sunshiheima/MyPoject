<template>
  <div class="bottonAnmtion">
    <div class="buttonBox  fx fx_col_center fx_row_center">
      <button class="fx_1">我是按钮</button>
    </div>
  </div>
</template>
         
<script>
export default {
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
.buttonBox{
  height: 40px;
  width: 120px;
  padding: 1px;
  box-sizing: border-box;
  border-radius: 5px;
  background-image: linear-gradient(40deg,rgb(235, 82, 12),#f00 20%,rgb(55, 0, 255),rgb(25, 0, 255));
  background-position: 0 0;
  animation: buttonShow 3s linear 0s infinite both;
  @keyframes buttonShow {
    0%{background-position: 0 0;}
    0%{background-position: -120px 0px;}
  }
  button{
    // display: none;
    height: 38px;
    border-radius: 4px;
    background-color: #000;
    color:#fff;
  }
}
</style>