<template>
  <div class='arcgisImg'>
      <ArcgisMap/>
  </div>
</template>
         
<script>
import ArcgisMap from '@/components/arcgisImg/arcgisMap'
export default {
    components:{
        ArcgisMap,
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