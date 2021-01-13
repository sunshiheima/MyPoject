<template>
  <div class="ArcgisMap">
    <div
      class="mapBox"
      v-if="
        ArcgisMapList &&
        ArcgisMapList.url &&
        ArcgisMapList.url.length > 0 
      "
    >
      <div class="map" id="map2D"></div>
    </div>
    <div class="updateLoading" v-else-if="!updateDataLoading">
      <div class="arcgisLoading_icon"></div>
      <span>加载中...</span>
    </div>
    <div class="NoDataBox" v-else>
      <div class="NoData">暂无资源，请上传...</div>
    </div>
  </div>
</template>
         
<script>
import { importEsri, loadPointData, dispose } from "./map2d";
export default {
  props: {
    ArcgisMapDataCode: {
      type: String,
      default: "0900010D",
    },
    isAdd: {
      //新增
      type: Boolean,
      default: false,
    },
    isEdit: {
      //编辑
      type: Boolean,
      default: false,
    },
    isLook: {
      //查看
      type: Boolean,
      default: false,
    },
    isStep: {
      //是否下一步（保留销毁组件点位信息）
      type: Boolean,
      default: false,
    },
    isType: {
      //分类
      type: Boolean,
      default: false,
    },
    isGroup: {
      //分类
      type: Boolean,
      default: false,
    },
    mxPoint: {
      //分类
      type: Object,
      default: () => {
        return {
          xPoint: "",
          yPoint: "",
        };
      },
    },
    //父级站台
    parentImgsSelectActive: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //服务加载
      updateDataLoading: false,
      //获取站点服务信息
      ArcgisMapList: null,
      //层级图纸
      imgsSelectActive: 0,
      //层级图纸列表
      imgsSelect: [
        {
          name: "站台层",
          value: 0,
        },
        {
          name: "站厅层",
          value: 1,
        },
      ],
      //类型图片列表
      typeImgList: {
        type: [
          require("../../assets/img/mapIcon/MyIcon.png"),
          require("../../assets/img/mapIcon/elseIcon.png"),
        ],
        group: [
          require("../../assets/img/mapIcon/MyIcon.png"),
          require("../../assets/img/mapIcon/elseIcon.png"),
        ],
      },
    };
  },
  //生命周期 - 创建完成
  created() {
    this.inMap();
  },
  watch: {
    //路由清空
    "$route.path"(newVal) {
      if (newVal && newVal.length > 0) {
        dispose();
      }
    },
    //站点编码
    ArcgisMapDataCode(newVal) {
      if (newVal && newVal.length > 0) {
        this.inMap();
      }
    },
    //站台
    parentImgsSelectActive(newVal) {
      this.imgsSelectActive = newVal;
      this.inMap();
    },
    //分类
    isGroup(newVal) {
      this.inMap();
    },
    //分组
    isType(newVal) {
      this.inMap();
    },
  },
  //DOM挂载完毕
  mounted() {},
  methods: {
    inMap() {
       dispose();
      let _this = this;
      _this.ArcgisMapList = [];
      _this.updateDataLoading = false;
      _this.$axios({
        url: 'http://j12ea1c1.ipyingshe.net'+'/basebusiness/guidestationmap/details',
        method: 'get',
        params: {
            stationNo: _this.ArcgisMapDataCode,
            location: _this.imgsSelectActive,
        }
      }).then((res) => {
        if (res.status === 200) {
          _this.ArcgisMapList = res.data.data;
          console.log("arcgis服务", res.data.data);
          if (
            res.data.data &&
            res.data.data.url &&
            res.data.data.url.length > 0
          ) {
            _this.$nextTick(() => {
              let MapDom = document.querySelector("#map2D");
              importEsri(res.data.data, _this).then(() => {
               
                loadPointData(res.data.data.equipmentList);
              });
            });
          } else {
            _this.ArcgisMapList = [];
            _this.updateDataLoading = true;
          }
        } else {
          _this.updateDataLoading = true;
          _this.ArcgisMapList = [];
        }
      });
    },
    //获取点位详情
    GetMapDetails() {},
    //选择图纸改变
    selectChange(value) {
      this.inMap();
    },
  },
  //组件销毁钩子函数
  beforeDestroy() {
    if (!this.isStep) {
      dispose();
    }
  },
};
</script>
<style lang='less' scoped>
.ArcgisMap {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 60vh;
  .stepTitle {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    .imgsSelect {
      display: flex;
      align-items: center;
      .imgsSelect_title {
        width: 120px;
      }
    }
  }
  .updateData {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .updateLoading {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
    background-color:#fff;
    .arcgisLoading_icon {
      width: 20px;
      height: 20px;
      background: url("../../assets/img/mapIcon/arcgisLoading.png") 50% 50%;
      background-size: 100% 100%;
      margin: 10px;
      transform-origin: 50% 50%;
      animation: arcgisLoading_iconShow 0.7s linear 0s infinite both;
    }
    @keyframes arcgisLoading_iconShow {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .mapBox {
    flex: 1;
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    .map {
      height: 100%;
      width: 100%;
      overflow: hidden;
      // width: 300px;
      // width: 100%;

      /deep/ #map2D_container {
        position: relative !important;
        #map2D_layer0 {
          position: relative !important;
        }
      }
    }
  }
  .NoDataBox{
     flex: 1;
    width: 100%;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
#map2D {
  position: absolute;
  /deep/ .esriPopup {
    position: absolute;
    // width: 170px;
    .esriPopupWrapper {
      background-color: #99f8fa;
      border-radius: 5px;
      // overflow: hidden;
      height: 170px;
    }

    .sizer {
      width: 320px;
      .titlePane {
        //地图弹框
        // display: none;
        height: 0;
        .title {
          display: none;
        }
        .titleButton {
          &.close {
            //  position: absolute;
            z-index: 2;
            cursor: pointer;
            background-color: #ccc;
            display: flex;
            justify-content: center;
            line-height: 32px;
            &::before {
              content: "×";
              font-size: 34px;
              color: #fff;
            }
          }
        }
      }
      .actionsPane {
        display: none;
      }
    }
    .pointer {
      position: absolute;

      &.bottom {
        position: absolute;
        left: calc(50% - 12px);
        border-top: 15px solid #99f8fa;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
      }
      &.bottomLeft {
        position: absolute;
        left: 5px;
        border-top: 15px solid #99f8fa;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
      }
      &.bottomRight {
        position: absolute;
        right: 5px;
        border-top: 15px solid #99f8fa;
        border-left: 12px solid transparent;
        border-right: 10px solid transparent;
      }
      &.top {
        position: absolute;
        top: -15px;
        left: calc(50% - 12px);
        border-bottom: 15px solid #99f8fa;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
      }
      &.topRight {
        position: absolute;
        top: -15px;
        right: 5px;
        border-bottom: 15px solid #99f8fa;
        border-left: 12px solid transparent;
        border-right: 10px solid transparent;
      }
      &.topLeft {
        position: absolute;
        top: -15px;
        left: 5px;
        border-left: 10px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 15px solid #99f8fa;
      }
    }
    .outerPointer {
      &.left {
        width: 0;
        position: absolute;
        top: -12px;
        left: 1px;
        border-top: 12px solid transparent;
        border-right: 15px solid #99f8fa;
        border-bottom: 12px solid transparent;
      }
      &.right {
        width: 0;
        position: absolute;
        top: -12px;
        left: -17px;
        border-top: 12px solid transparent;
        border-left: 15px solid #99f8fa;
        border-bottom: 12px solid transparent;
      }
    }

    .titlePane {
      background-color: transparent;
      color: #006bd4;
      margin: 0;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
    }

    .contentPane {
      position: relative;
      max-height: 170px;
      overflow: hidden;
      padding: 20px;
      border-radius: 5px;
      background-color: #99f8fa;
      color: #666666;
      font-size: 14px;
      box-sizing: border-box;
      .mapPop {
        height: 100%;
        display: flex;
        flex-direction: column;
        color: #0e7196;
        overflow-y: auto;
        .mapPopState {
          display: flex;
          align-items: center;
          color: #fff;
          font-size: 12px;
          .mapPopState_title {
            width: 50px;
            background: #71b706;
            margin-right: 10px;
            text-align: center;
            line-height: 20px;
            border-radius: 3px;
          }
          .mapPopStateValue {
            line-height: 20px;
            border-radius: 3px;
            width: 120px;
            background-color: #fff;
            .mapPopStateValue_min {
              background-color: #71b706;
              text-align: center;
            }
          }
        }
        .mapPoplist {
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          line-height: 20px;
          .mapPoplist_item {
            display: flex;
            .mapPoplist_item_title {
              // width: 70px;
            }
          }
        }
      }
    }

    .maximize {
      display: none;
    }

    .titleButton.close {
      right: 0px;
      background-position: 0 0;
      width: 30px;
      height: 32px;
    }

    .titleButton {
      position: absolute;
      top: 0px;
      cursor: pointer;
      // background: url("../../../assets/imgs/map/close.png") no-repeat;
    }

    a {
      cursor: pointer;

      img {
        float: left;
        margin-top: 3px;
        height: 26px;
      }

      color: #000000;
      font-size: 16px;
      height: 35px;
      line-height: 35px;
      padding: 0 6px;
      text-decoration: none;
    }
  }
}
</style>