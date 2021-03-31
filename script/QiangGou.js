// ==UserScript==
// @name         京东抢购
// @description  自定义节点，提交订购单。
// @copyright    2016, 楼教主 (http://www.52cik.com/)
// @icon         https://assets-cdn.github.com/pinned-octocat.svg
// @version      1.6.4
// @author       孙氏黑马
// @license      MIT
// @homepageURL  https://github.com/52cik/github-hans
// @match        https://*.jd.com/*
// @require      https://52cik.github.io/github-hans/locals.js?v1.6.3
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function (window, document, undefined) {
    'use strict';
    document.write(`
        <div class="ToolBox" >
            <div class="ToolBody">
                <div class="goodName toolItem" >
                    <div class="toolTitle ">商品名称:</div> 
                    <div class="toolContent" >
                        <div class="text" class="goodName" title="ROG幻15 十代8核英特尔酷睿i7 15.6英寸4K屏创意设计师轻薄游戏本笔记本电脑(i7-10875H 16G 512G RTX2060)黑">ROG幻15 十代8核英特尔酷睿i7 15.6英寸4K屏创意设计师轻薄游戏本笔记本电脑(i7-10875H 16G 512G RTX2060)黑</div>
                    </div> 
                </div>
                <div class="goodUrl toolItem">
                    <div class="toolTitle ">商品链接:</div> 
                    <input class="goodUrlInput" type="text"/>
                </div>
                <div class="goodDom toolItem">
                    <div class="toolTitle ">选中元素:</div> 
                    <div class=" toolContent">
                        <div class="goodDomName text" title="toolContent；toolContent">toolContent；toolContent</div>
                        <button class="goodSelectBtn" >选取元素</button>
                    </div>
                </div>
                <div class="goodTime toolItem">
                    <div class="toolTitle ">秒杀时间:</div> 
                    <input class="goodTimeInput" type="datetime-local" />
                </div>
                <div class="goodFrequency toolItem">
                    <div class="toolTitle ">秒杀频率:</div> 
                    <input type="number" class="goodFrequencyInput" value="100"/>
                </div>
                <div class="goodTimes toolItem">
                    <div class="toolTitle ">秒杀次数:</div> 
                    <input type="number" class="goodTimesInput" value="100"/>
                </div>
                <div class="ToolBtns toolItem">
                    <div class="toolTitle ">操作:</div> 
                    <div class="btns">
                        <button class="goodConfirm" >确定</button>
                        <button class="goodClose" onclick="goodCloseClick">取消</button>
                    </div>
                </div>
            </div>
        </div>
    `);
    let styleDom = document.createElement("style")
    styleDom.innerHTML = `
    `
    document.getElementsByTagName("head")[0].appendChild(styleDom)
    let body = document.getElementsByTagName("body")[0];
    
    /* 选取元素 */
    let goodSelectBtnDom = document.querySelector(".goodSelectBtn");
    let goodConfirmDom = document.querySelector(".goodConfirm");
    let globalObj={
        id:"",
        name:"",//商品名称
        url:"",//商品链接
        domName:"",//按钮名称
        time:"",//秒杀时间
        frequency:"",//秒杀频率
        times:"",//秒杀次数
        open:false,//链接打开
        past:false,//是否过期
        step:0,//步骤 0抢购界面 1去购物车结算 2购物车结算 3提交订单 4支付界面
        shopCartDomName:"立即抢购",//按钮文字
        herf:"",//当前界面地址
        terrace:"",//平台
        checked:false,
    }
    /* 初始化tool */
    function restTool() {
        getNewTime();
        getgoodUrl();
        getStep();
        // testRequire()//测试跨域访问
    };
    restTool();
    /* 点击获取元素 */
    goodSelectBtnDom.addEventListener("click", function () {
        bodyCursor()//改变手型
        submitSelectDom()//选取dom
    })
    /* 确认点击 */
    goodConfirmDom.addEventListener("click", function () {
        /* tool填写数据获取 */
        let goodName = (document.querySelector(".goodName")&&document.querySelector(".goodName").innerHTML) || "";
        let goodUrlInput = (document.querySelector(".goodUrlInput")&&document.querySelector(".goodUrlInput").value) || "";
        let goodDomName = (document.querySelector(".goodDomName")&&document.querySelector(".goodDomName").innerHTML) || "";
        let goodTimeInput = (document.querySelector(".goodTimeInput")&&document.querySelector(".goodTimeInput").value) || "";
        let goodFrequencyInput = (document.querySelector(".goodFrequencyInput")&&document.querySelector(".goodFrequencyInput").value) || "";
        let goodTimesInput = (document.querySelector(".goodTimesInput")&&document.querySelector(".goodTimesInput").value) || "";
        if(goodName&&goodUrlInput&&goodDomName&&goodTimeInput&&goodFrequencyInput&&goodTimesInput){
            alert("保存成功");
            globalObj.checked=true;
            let goodToolList=localStorage.getItem("goodToolList");
            if(goodToolList){
                goodToolList=JSON.parse(goodToolList);
                let bg=goodToolList.some(item=>{
                    return item.id==globalObj.id;
                })
                if(bg){
                    for(let i=0;i<goodToolList.length;i++){
                        if(goodToolList[i].id==globalObj.id){
                            goodToolList.splice(i,1)
                        }
                    }
                    goodToolList.push(globalObj);
                }else{
                    goodToolList.push(globalObj);
                }
                localStorage.setItem("goodToolList",JSON.stringify(goodToolList))
            }else{

                localStorage.setItem("goodToolList",JSON.stringify([globalObj]))
            }
        }
    })
    function runTool(){
        let targetDom = null;
        if(globalObj.terrace=="京东"){
            console.log("欢迎使用京东秒杀平台");
            switch (globalObj.step){
                case 0:
                let goodDomName = localStorage.getItem("goodDomName");
                if (goodDomName) {
                    targetDom = document.querySelector(goodDomName);
                }
                if (targetDom) {
                    targetDom.click();
                }
                break;
                case 1:
                targetDom = document.querySelector('#GotoShoppingCart');
                if(targetDom){
                    targetDom.click();
                }
                break;
                case 2:
                targetDom = document.querySelector('.common-submit-btn');
                if(targetDom){
                    targetDom.click();
                }
                break;
                case 3:
                targetDom = document.querySelector('#order-submit');
                if(targetDom){
                    targetDom.click();
                }
                break;
                case 4:
                console.log("抢购成功,请前往我的订单进行支付");
                break;
            }
        }else{

        }
    }
    /* 测试跨域访问（失败）*/
    // function testRequire(){
    //     let HTTP;
    //     if(window.XMLHttpRequest){
    //         HTTP=new XMLHttpRequest();
    //     }else{
    //         HTTP=new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     HTTP.open("GET","https://cart.jd.com/tproduct?pid=100015857904&rid=0.8782656647203702",true);
    //     HTTP.send();
    // };
    /* tool标注栏 */
    let winHeight = body.offsetHeight;
    let winWidth = body.offsetWidth;
    /* 获取dom */
    function submitSelectDom() {
        body.onmousemove = (e) => {
            let targetDom = e.target;
            if (targetDom) {
                let oldTime, newTime, mousemove = false;
                targetDom.classList.add("targetDom");
                targetDom.onmouseout = (event) => {
                    targetDom.classList.remove("targetDom");
                    restTargetDom()
                }
                /* 目标dom选择过程 */
                targetDom.onmousedown = (event) => {
                    if (event.button == 1) {//中间
                        console.log("鼠标中键!");
                        restTargetDom()
                        body.onmousemove = null;
                        bodyCursor(false)
                        activeDom(targetDom)
                    } else if (event.button == 0) {//左键
                        oldTime = new Date();
                        mousemove = false;
                        targetDom.onmousemove = (event) => {
                            mousemove = true;
                        }
                        targetDom.onmouseup = (event) => {
                            newTime = new Date();
                            restTargetDom();
                            let timeChange = newTime - oldTime;
                            if (timeChange > 500 && (!mousemove)) {
                                body.onmousemove = null;
                                bodyCursor(false)
                                console.log("我是长按事件")
                                activeDom(targetDom)
                            } else {
                                console.log("我是点击事件")
                            }
                        }

                    }
                }
                /* 重置目标dom 事件 */
                function restTargetDom() {
                    if (targetDom.nodeName == "BODY") return
                    targetDom.onmouseup = null;
                    targetDom.onmousemove = null;
                    targetDom.onmousedown = null;
                    targetDom.onmouseup = null;
                }
                /* 设置获取的目标dom 并缓存 */
                function activeDom() {
                    let goodNameDom = document.getElementsByClassName("goodDomName")[0];
                    if (goodNameDom) {
                        /* 目标dom查询 */
                        let QueryDom = null;
                        function getSubTargetDomTop(dom, oldDom, topBot = true) {
                            if (topBot) {
                                /* 向上查询 */
                                if (dom.innerHtml == globalObj.shopCartDomName) {
                                    return (QueryDom.dom = dom);
                                } else {
                                    if (dom.parentElement) {
                                        for (let i = 0; i < dom.parentElement.children.length; i++) {
                                            if (dom.parentElement.children[i].innerHTML == globalObj.shopCartDomName) {
                                                return (QueryDom = dom.parentElement.children[i]);
                                            }
                                        }
                                        return getSubTargetDomTop(dom.parentElement, oldDom, topBot)
                                    } else {
                                        if (oldDom.children && oldDom.children.length > 0) {
                                            return getSubTargetDomTop(oldDom, oldDom, false)
                                        } else {
                                            console.log("暂未获取到按钮节点信息！")
                                            return (QueryDom.dom = null)
                                        }
                                    }
                                }
                            } else {
                                /* 向下查找 */
                                for (let v = 0; v < dom.children; v++) {
                                    if (dom.children[v].innerHTML == globalObj.shopCartDomName) {
                                        return (QueryDom = dom.children[v])
                                    } else {
                                        if (dom.children[v].children && dom.children[v].children.length > 0) {
                                            return getSubTargetDomTop(dom.children[v], oldDom, topBot);
                                        }
                                    }
                                }
                            }
                        }
                        getSubTargetDomTop(targetDom, targetDom)//向上查找节点
                        if (!QueryDom) {
                            console.log("暂未获取到按钮节点信息！")
                        } else {
                            if (!(QueryDom.classList && QueryDom.classList.length === 1 && QueryDom.className !== "targetDom") || QueryDom.id) {
                                let text=null;
                                if(QueryDom.id){
                                    text= "#"+QueryDom.id;
                                    goodNameDom.innerHTML=text;
                                    localStorage.setItem("goodDomName",text);
                                }else{
                                    if(QueryDom.classList.value.includes("targetDom")){
                                        text ='.'+QueryDom.classList[QueryDom.classList.length - 2]
                                    }else{
                                        text ='.'+QueryDom.classList[QueryDom.classList.length - 1]
                                    }
                                    goodNameDom.innerHTML =text ;
                                    localStorage.setItem("goodDomName",text);
                                }
                                console.log("获取到按钮节点信息:", text)
                                
                            } else {
                                console.log("获取不到目标dom的class或id:", QueryDom.nodeName)
                            }
                        }
                    }


                }
            } else {
                console.log("选取不了元素")
            }
        }
    }
    /* 获取时间 */
    function getNewTime() {
        let timeDom = document.querySelector(".goodTimeInput");
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        function timeFilter(time) {
            if (Number(time) > 9) {
                return time
            }
            return '0' + time
        }
        let time = year + "-" + timeFilter(month) + "-" + timeFilter(day) + "T" + timeFilter(hh) + ":" + timeFilter(mm);
        timeDom.value = time;
        localStorage.setItem("Time", time);
    }
    /* 获取商品链接 */
    function getgoodUrl() {
        let goodUrlInput = document.getElementsByClassName("goodUrlInput")[0];
        if (goodUrlInput) {
            goodUrlInput.value = window.location.href;
        }
    }
    /* 获取商品链接 */
    function getStep() {
        globalObj.herf= window.location.href;
        if( globalObj.herf.includes("jd.com")){
            terrace="京东";
            if(globalObj.herf.includes("https://item.jd.com")){
                globalObj.step=0;
                let goodUrlInput = document.getElementsByClassName("goodUrlInput")[0];
                if (goodUrlInput) {
                    goodUrlInput.value = window.location.href;
                }
            }else if(globalObj.herf.includes("https://cart.jd.com/addToCart.html")){
                globalObj.step=1;
            }else if(globalObj.herf.includes("https://cart.jd.com")){
                globalObj.step=2;
            }else if(globalObj.herf.includes("https://trade.jd.com")){
                globalObj.step=3;
            }else if(globalObj.herf.includes("https://pay.jd.com")){
                globalObj.step=4;
            }
        }
       
    }
    /* body 手型 */
    function bodyCursor(def = true) {
        if (def) {
            body.style.cursor = "help"
        } else {
            body.style.cursor = "auto"
        }
    }



})(window, document);
