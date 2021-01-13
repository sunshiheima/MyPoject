//远程控制发送端
import Vue from "vue"
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

function resetWebsocket(api,header={}){
  let socket = new SockJS(api);  //接口地址
 return  Stomp.over(socket);
}
function initWebsocket(api,header={}){
 let Websocket= resetWebsocket(api);
 Vue.prototype.Websocket=Websocket;
}
Vue.prototype.initWebsocket=initWebsocket;