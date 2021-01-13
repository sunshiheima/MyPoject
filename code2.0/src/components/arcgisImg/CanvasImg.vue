<template>
  <div class="iconCanvas">
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
  mounted() {
    this.createCanvasIcon();
   
  },
  methods: {
    createCanvasIcon(num=0,color="#f00"){
       let canvasBox = document.getElementsByClassName("iconCanvas")[0];
       let canvas = document.createElement("canvas");
       canvas.style.width="40px"
       canvas.style.height="40px"
      canvasBox.append(canvas)
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.bezierCurveTo(-50, 20,150,150, 150, 140);
    ctx.fill();
    ctx.strokeStyle="#000";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.bezierCurveTo(350, 20,150,150, 150, 140);
    ctx.fill();
    ctx.strokeStyle="#000";
    ctx.stroke();
    
    ctx.fillStyle = "#fff";
    ctx.font = " 1000 60px Arial";
    ctx.textAlign = "center"
    
    ctx.fillText(JSON.stringify(num), 145, 75,200);
    ctx.strokeText(JSON.stringify(num), 145, 75, 200);
    //导出为图片
    // let image=new Image;
    // image.src = canvas.toDataURL("image/png");
    let url= canvas.toDataURL("image/png");
    return url
    }
  },
};
</script>
<style lang='less' scoped>
.iconCanvas {
  height: 80px;
  width: 80px;
  canvas {
    height: 100%;
    width: 100%;
    // background-color: #000;
  }
}
</style>