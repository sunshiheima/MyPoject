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
                    <div class="toolContent " >
                        <div class="text" title="ROG幻15 十代8核英特尔酷睿i7 15.6英寸4K屏创意设计师轻薄游戏本笔记本电脑(i7-10875H 16G 512G RTX2060)黑">ROG幻15 十代8核英特尔酷睿i7 15.6英寸4K屏创意设计师轻薄游戏本笔记本电脑(i7-10875H 16G 512G RTX2060)黑</div>
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
                    <input type="number" value="100"/>
                </div>
                <div class="goodTimes toolItem">
                    <div class="toolTitle ">秒杀次数:</div> 
                    <input type="number" value="100"/>
                </div>
                <div class="ToolBtns toolItem">
                    <div class="toolTitle ">操作:</div> 
                    <div class="btns">
                        <button class="goodConfirm" onclick="goodConfirmClick">确定</button>
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
    let timeDom = document.querySelector(".goodTimeInput");
    /* 选取元素 */
    let goodSelectBtnDom = document.querySelector(".goodSelectBtn");
    goodSelectBtnDom.addEventListener("click", function () {
        bodyCursor()//改变手型
        submitSelectDom()//选取dom
    })
    let globalDom=null,
        globalTime=null,

    function restTool(){
        getNewTime();
        getgoodUrl();
    };
    restTool()
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
                function activeDom() {
                    let goodDomName= document.getElementsByClassName("goodDomName")[0];
                    if(goodDomName){
                        goodDomName.innerHTML=targetDom.id || targetDom.classList[0];
                    }
                }
            } else {
                console.log("战五元素")
            }
        }
    }
    /* 获取时间 */
    function getNewTime() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hh = date.getHours();
        let mm = date.getMinutes();
        function timeFilter(time) {
            if (Number(time) > 9) {
                return time
            }
            return '0' + time
        }
        let time = year + "-" + timeFilter(month) + "-" + timeFilter(day) + "T" + timeFilter(hh) + ":" + timeFilter(mm);
        globalTime=time;
        timeDom.value = globalTime;
    }
    /* 获取商品链接 */
    function getgoodUrl(){
        let goodUrlInput=document.getElementsByClassName("goodUrlInput")[0];
        if(goodUrlInput){
            goodUrlInput.value=window.location.href;
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
