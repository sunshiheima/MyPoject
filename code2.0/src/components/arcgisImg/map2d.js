
var map;
var esri;
let $this=null;
let mapPopData={ //对话框数据
  state:0,
 name:'XXXX',
 g:'分组',
 type:'分类',
 s:'尺寸',
 num:'3132'
}
var mapImageLayer = null
var praph = null
// import {getMapguidestationmapDetails} from '../../api/map'
import esriLoader from "esri-loader";
let planarDistribution = {
  UnitId: "",
  PlaneId: "",
  EquirmentId: "",
  Coordinatesx: "",
  Coordinatesy: "",
  Remark: ""
};
/**
 * 
 * @param {*} imgData 初始化二维地图
 */
export function importEsri(imgData,defthis) {
  $this=defthis;
  const options = {
    url: "http://39.100.16.97/arcgis_js_api/library/3.14/3.14/init.js"
  };
  return esriLoader
    .loadModules(
      [
        "esri/map",
        "esri/layers/ArcGISTiledMapServiceLayer",
        "esri/layers/MapImageLayer",
        "esri/layers/MapImage",
        "esri/geometry/Extent",
        "esri/geometry/Point",
        "esri/geometry/webMercatorUtils",
        "esri/SpatialReference",
        "esri/symbols/PictureMarkerSymbol",
        "esri/graphic",
        "esri/layers/GraphicsLayer",
        "esri/InfoTemplate",
        "dojo/domReady!",
      ],
      options
    )
    .then(
      ([
        Map,
        ArcGISTiledMapServiceLayer,
        MapImageLayer,
        MapImage,
        Extent,
        Point,
        webMercatorUtils,
        SpatialReference,
        PictureMarkerSymbol,
        graphic,
        GraphicsLayer,
        InfoTemplate,
        domReady,
      ]) => {
        // debugger
        if (map) {
          map.destroy()
          if (praph) {
            praph = null
          }
          map = null
          esri = null
          mapImageLayer = null
        }
        esri = {
          Map: Map,
          ArcGISTiledMapServiceLayer: ArcGISTiledMapServiceLayer,
          MapImageLayer: MapImageLayer,
          MapImage: MapImage,
          Extent: Extent,
          Point: Point,
          webMercatorUtils: webMercatorUtils,
          SpatialReference: SpatialReference,
          PictureMarkerSymbol: PictureMarkerSymbol,
          graphic: graphic,
          GraphicsLayer: GraphicsLayer,
          InfoTemplate: InfoTemplate,
          domReady,
        };
        initMap2D(imgData.url,);
      }
    );
};
/**
 * 初始化二维地图
 */
function initMap2D(imgData,) {
  map = new esri.Map("map2D", {
    logo: false,
  });
  loadImage(imgData,);
  map.on("click", (evt) => {
    if (evt.graphic) {
      if (evt.graphic._graphicsLayer.id == 'shebei') {
        console.log('设备点击查询', evt.graphic.attributes);
        mapPopData= evt.graphic.attributes;
      }
      return
    }
    var ss = esri.webMercatorUtils.geographicToWebMercator(evt.mapPoint);
    if(!$this.isLook){
      addMousePoint(ss.x, ss.y,);
      $this.$emit('ChangePoint',ss.x,ss.y)
    }
    planarDistribution.Coordinatesx = Math.floor(ss.x * 10000) / 10000;
    planarDistribution.Coordinatesy = Math.floor(ss.y * 10000) / 10000;
    
  });
}
/**
 * 
 * @param {*} imgData 添加平面图，平面图url
 */
export function loadImage(imgData,) {
  if (!mapImageLayer) {
    mapImageLayer = new esri.MapImageLayer()
    map.addLayer(mapImageLayer)
    console.log(mapImageLayer);
  }
  //debugger
  var degreeRange = 0.005;
  var xdegreePerPixel = degreeRange / 1366;
  var ydegreePerPixel = degreeRange / 1366;
  var orginX = 0;
  var orginY = 0;
  var pxWidth = 4000;
  var pxHeight = 2100;
  var xRange = orginX + xdegreePerPixel * pxWidth;
  var yRange = orginY + ydegreePerPixel * pxHeight;
  //So，他们的 Extent范围两个顶点
  var minpt = new esri.Point(orginX, orginY, new esri.SpatialReference({ wkid: 4326 }));
  var maxpt = new esri.Point(xRange, yRange, new esri.SpatialReference({ wkid: 4326 }));
  var minptWeb = esri.webMercatorUtils.geographicToWebMercator(minpt);
  var maxptWeb = esri.webMercatorUtils.geographicToWebMercator(maxpt);
  console.log(minptWeb, maxptWeb);
  let mi = new esri.MapImage({
    'extent': {
      'xmin': minptWeb.x,
      'ymin': minptWeb.y,
      'xmax': maxptWeb.x,
      'ymax': maxptWeb.y,
      'spatialReference': { 'wkid': 102113 }
    },
    'href': imgData
  });
  mapImageLayer.addImage(mi);
  var initialExtent = new esri.Extent(minptWeb.x - 10, minptWeb.y - 10, maxptWeb.x + 10, maxptWeb.y + 10, new esri.SpatialReference({ wkid: 102113 }));
  map.setExtent(initialExtent);
  $this.updateDataLoading = true;
}
/**
 * 添加设备点位
 * pointDatas:点位数据
 */
export function loadPointData(pointDatas = [],) {
  var graphicsLayer = map._layers.find(t => { return t && t.id == 'shebei' })
  if (!graphicsLayer) {
    graphicsLayer = new esri.GraphicsLayer({ id: 'shebei' });
    map.addLayer(graphicsLayer)
  }
  let img = require("../../assets/img/mapIcon/elseIcon.png");
  for (let i = 0; i < pointDatas.length; i++) {
    if($this.isType){
      img=$this.typeImgList.type[pointDatas[i].typeId]
    }else if($this.isGroup){
      img=$this.typeImgList.group[pointDatas[i].typeId]
    }
    let symbol = new esri.PictureMarkerSymbol({
      url: img, width: 25, height: 25, yoffset: 12.5
    });
    let pt = new esri.Point({
      "x": parseFloat(pointDatas[i].xPoint), "y": parseFloat(pointDatas[i].yPoint), "spatialReference": new esri.SpatialReference({ wkid: 102113 })
    });
    let infoTemplate=null;
    //修改与查看就添加  当前点位信息
    if($this.isLook || $this.isEdit){
      if($this.xPoint&&$this.xPoint.length>0&&$this.yPoint&&$this.yPoint.length>0){
        addMousePoint($this.xPoint, $this.yPoint,);
      }
    }
    //可视化就添加弹框
    if($this.isLook){
      $this.$axios({
        url: 'http://j12ea1c1.ipyingshe.net'+'/software/guideequipment/getEquipmentState',
        method: 'get',
        params: {
          id:pointDatas[i].id
        }
      }).then(res=>{
        let htmlStr=`<div class="mapPop">
        <div class="mapPopState">${pointDatas[i].warningState===0?
          `<div class="mapPopState_title" >离线</div>`:pointDatas[i].warningState===1?
          `<div class="mapPopState_title">在线</div>`:`<div class="mapPopState_title">异常</div>`}
         <div class="mapPopStateValue">
            <div class="mapPopStateValue_min" style="width:${res.data.data.memoryRatio+'%'}">${res.data.data.memoryRatio+'%'}</div>
          </div>
        </div>
        <div class="mapPoplist">
          <div class="mapPoplist_item">
            <div class="mapPoplist_item_title">名称：</div>
            <div class="mapPoplist_item_">${pointDatas[i].equipmentName}</div>
          </div>
          <div class="mapPoplist_item">
            <div class="mapPoplist_item_title">分组：</div>
            <div class="mapPoplist_item_">${pointDatas[i].groupName}</div>
          </div>
          <div class="mapPoplist_item">
            <div class="mapPoplist_item_title">类型：</div>
            <div class="mapPoplist_item_">${pointDatas[i].typeId===0?'LED':'LCD'}</div>
          </div>
          <div class="mapPoplist_item">
            <div class="mapPoplist_item_title">屏幕尺寸：</div>
            <div class="mapPoplist_item_">${pointDatas[i].resolution}</div>
          </div>
          <div class="mapPoplist_item">
            <div class="mapPoplist_item_title">序列号：</div>
            <div class="mapPoplist_item_">${pointDatas[i].equipmentNo}</div>
          </div>
        </div>
      </div>`
       infoTemplate = new esri.InfoTemplate('设施详情',htmlStr)
       let graphic = new esri.graphic(pt, symbol, pointDatas[i], infoTemplate);
       graphicsLayer.add(graphic);
      })
    }else{
      let graphic = new esri.graphic(pt, symbol, pointDatas[i], infoTemplate);
      graphicsLayer.add(graphic);
    }
  }
}
/**
 * 鼠标点击添加点位
 * @param {*} x X坐标
 * @param {*} y Y坐标
 */
export function addMousePoint(x, y,) {
  let img = require("../../assets/img/mapIcon/MyIcon.png");
  let symbol = new esri.PictureMarkerSymbol({
    url: img, width: 35, height: 35, yoffset: 12.5
  });
  if (praph) {
    map.graphics.remove(praph)
  }
  praph = new esri.graphic(new esri.Point(0, 0), symbol, {}, null);
  praph.setGeometry(new esri.Point(x, y, new esri.SpatialReference({ wkid: 102113 })))
  map.graphics.add(praph);
}
/**
 * 销毁二维地图
 */
export function dispose() {
  if(map){
    console.log('销毁地图');
    map.destroy()
    map = null;
    esri = null;
    mapImageLayer = null;
    $this=null;
  }
  }