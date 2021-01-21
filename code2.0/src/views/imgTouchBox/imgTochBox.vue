<template>
  <div
    class="imgTouchBox"
    @mousewheel="imgTouchBoxMousewheel"
    ref="imgTouchBox"
    @mousedown.stop="imgTouchBoxMousedown"
  >
   <el-image 
    class="imgIcon"
      v-for="(item, index) in iconsList"
      :key="index + 'imgIcon'"
    :src="item" 
    :preview-src-list="iconsList">
  </el-image>
  </div>
</template>
         
<script>
export default {
  props: {
    scrollSpeed: {
      //滚动速度
      type: Number,
      default: 15,
    },
  },
  data() {
    return {
      iconsList: [
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      ],
    };
  },
  //生命周期 - 创建完成
  created() {},
  //DOM挂载完毕
  mounted() {
    //  let imgIconsDOM=document.getElementsByTagName('img') ;
    //      debugger
    //  imgIconsDOM.forEach(item=>{
    //      item.oncontextmenu=()=>{return false};
    //  })
     
  },
  methods: {
    //鼠标滚动控制
    imgTouchBoxMousewheel(e) {
       
      let ScrollDom = this.$refs["imgTouchBox"];
      if (e.deltaX === 0 && e.deltaY !== 0) {
        if (ScrollDom.offsetWidth > ScrollDom.offsetHeight) {
          if (e.deltaY > 0) {
            ScrollDom.scrollLeft = ScrollDom.scrollLeft + this.scrollSpeed;
          } else {
            ScrollDom.scrollLeft = ScrollDom.scrollLeft - this.scrollSpeed;
          }
        } else {
          if (e.deltaY > 0) {
            ScrollDom.scrollTop = ScrollDom.scrollTop + this.scrollSpeed;
          } else {
            ScrollDom.scrollTop = ScrollDom.scrollTop - this.scrollSpeed;
          }
        }
        console.log(ScrollDom.offsetHeight);
      }
    },
    //鼠标拖动
    imgTouchBoxMousedown(e) {
        //  debugger
        //  e.preventDefault(); // 移动时禁用默认事件
        // e.stopPropagation(); // 移动时禁用默认事件
        //禁止图片拖动
         e.target.draggable=false;

      let ScrollDom = this.$refs["imgTouchBox"];
      ScrollDom.style. cursor="pointer";
      console.log(e);
      // 鼠标按下，计算当前元素距离可视区的距离
      let oldLeft= ScrollDom.scrollLeft;
      let oldTop= ScrollDom.scrollLeft;
      const oldX = e.clientX ;
      const oldY = e.clientY ;
      console.log(oldX, oldY);
      //开始拖拽
      ScrollDom.onmousemove = (event) => {
        // e.preventDefault(); // 移动时禁用默认事件
        e.stopPropagation(); // 移动时禁用默认事件
        let newX = event.clientX - oldX;
        let newY = event.clientY - oldY;
        console.log(newX, newY);
        //滚动偏移
        if (ScrollDom.offsetWidth > ScrollDom.offsetHeight) {
            ScrollDom.scrollLeft =  oldLeft-newX;
        } else {
            ScrollDom.scrollTop =oldTop- newY;
        }
        console.log('鼠标移动', ScrollDom.scrollLeft)
      };
      //拖拽结束
      ScrollDom.onmouseup = (event) => {
        //    event.preventDefault();
           event.stopPropagation();
        ScrollDom.onmousemove = null;
        ScrollDom.onmouseup = null;
        ScrollDom.style. cursor="inherit";
      };
    },
  },
};
</script>
<style lang='less' scoped>
.imgTouchBox {
  color: #fff;
  font-size: 30px;
  display: flex;
    // flex-direction: column;
  flex: 0 0 60px;
  width:300px;
  overflow: auto;
  /*css主要部分的样式*/
  /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/

  &::-webkit-scrollbar {
    width: 10px; /*对垂直流动条有效*/
    height: 10px; /*对水平流动条有效*/
    display: none;
  }

  /*定义滚动条的轨道颜色、内阴影及圆角*/
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(63, 82, 148, 0.466);
    border-radius: 3px;
  }

  /*定义滑块颜色、内阴影及圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #0a60af;
  }

  /*定义两端按钮的样式*/
  &::-webkit-scrollbar-button {
    background-color: cyan;
  }

  /*定义右下角汇合处的样式*/
  &::-webkit-scrollbar-corner {
    background: khaki;
  }
  .imgIcon {
   flex: 0 0 120px;
   height: 100%;
    user-select:none;
    padding: 0 10px;
    img{
      user-select:none;  
    }
  }
}
</style>