<template>
   <el-input-number
          :disabled="false"
          class="NumberInputNoBtn"
          v-if="FromDialogState < 2"
          v-model="formData.xfmj"
          :precision="2"
          :step="0.1"
          :min="0"
          placeholder="请输入"
        ></el-input-number>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
//table number框  不要按钮
.NumberInputNoBtn {
  &.el-input-number {
    width: 85%;

    .el-input-number__decrease {
      display: none;
    }

    .el-input-number__increase {
      display: none;
    }

    .el-input {
      width: 100% !important;
      .el-input__inner {
        padding: 0 10px;
        text-align: left;
        width: 100% !important;
      }
    }
  }
}
</style>