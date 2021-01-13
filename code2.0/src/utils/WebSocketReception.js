//远程控制接收端
import Vue from "vue"
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

function initWebsocket(api, header = {}) {
  let socket = new SockJS(api);  //接口地址
  return stompClient = Stomp.over(socket);
}
function monitorStation($this, api, code, soundUrl) {
  let socket = new SockJS(api);  //接口地址
  let stompClient = Stomp.over(socket);
  stompClient.connect({}, (frame) => {
    console.log('连接成功', frame);
    // $this.$message({
    //   type:'success',
    //   message:"控制服务连接成功"
    // })
    stompClient.subscribe(soundUrl + code, res => {
      console.log('监听到', res.body);
      if (res) {
        let resData = JSON.parse(res.body);
        switch (resData.intentionType) {
          //路由跳转
          case 'router':
            // if(($this.$route.path.indexOf('/HC/')>-1) ){
            //   if((resData.data.indexOf('/HC/')>-1)){
            //     $this.$router.push(resData.data)
            //   }else{
            //     let routeData = $this.$router.resolve({
            //       path:resData.data,
            //       });
            //     window.open( routeData.href , '_blank', )
            //   }
            // }else{
            // }
            if ($this.$route.meta.isBASE === resData.isBASE) {
              $this.$router.push(resData.data)
              // window.open( routeData.href , '温州市经开区产业云图', )
            }
            break;
            //切换系统
          case 'system':
            if ($this.$route.meta.isBASE === resData.isBASE) {
              window.name = resData.systemName;
            } else {
              // $this.$router.push(resData.data)
              if (resData.blank) {
                // if(resData.isBASE){
                //   let routeData = $this.$router.resolve({
                //     path:resData.data,
                //        name: resData.systemName,
                //        //query: params,
                //     });
                //   window.open( routeData.href , '_blank', )


                // }else{
                //   let routeData = $this.$router.resolve({
                //     path:resData.data,
                //        name: resData.systemName,
                //        //query: params,
                //     });
                //     console.log(routeData);
                //   window.open( routeData.href , '_blank', )
                // }
                $this.$router.push(resData.data) //blank_不跳转===>单页面不跳转
              } else {
                // $this.$router.push(resData.data) //blank_不跳转===>单页面不跳转
              }
            }

            break;
          case 'directive':
            //进行指令处理(函数，object,字符串,数字)
            let routerList = $this.$route.matched;
            for (let i = 0; i < routerList.length; i++) {
              if (routerList[i].path == resData.path) {
                for (let key in routerList[i].instances.default) {
                  if (key == resData.data.functionName && typeof (routerList[i].instances.default[key]) == "function") {
                    // console.log('找到函数',routerList[i].components.default.methods[key]);
                    let str = `routerList[i].instances.default[key](`
                    let dot = "'"
                    for (let k in resData.data.data) {
                      switch (typeof (resData.data.data[k])) {
                        case "string":
                          str += dot + resData.data.data[k] + dot + ','
                          break;
                        case "object":
                          str += '(' + JSON.stringify(resData.data.data[k]) + ')' + ','
                          break;
                        default:
                          str += resData.data.data[k] + ','
                          break
                      }
                    }
                    eval(str + ')')
                  }
                }
              }
            }
            break;
          default:
            break;
        }
      }
    })
  }, cath => {
    console.log('连接失败', cath);
  })
}
Vue.prototype.initWebsocket = initWebsocket;
Vue.prototype.monitorStation = monitorStation;