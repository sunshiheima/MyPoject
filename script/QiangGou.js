// ==UserScript==
// @name         GitHub 汉化插件
// @description  汉化 GitHub 界面的部分菜单及内容。
// @copyright    2016, 楼教主 (http://www.52cik.com/)
// @icon         https://assets-cdn.github.com/pinned-octocat.svg
// @version      1.6.4
// @author       楼教主
// @license      MIT
// @homepageURL  https://github.com/52cik/github-hans
// @match        https://*.jd.com/*
// @require      https://52cik.github.io/github-hans/locals.js?v1.6.3
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function (window, document, undefined) {
    'use strict';
    let body = document.getElementsByTagName("body")[0];
    /* tool标注栏 */
    let ToolBox = document.createElement("div");
    let winHeight = body.offsetHeight;
    let winWidth = body.offsetWidth;
    ToolBox.style.height = "40px";
    ToolBox.style.width = "100vw";
    ToolBox.style.backgroundColor = "rgba(0,0,0,0)";
    ToolBox.style.position = "fixed";
    ToolBox.style.bottom = "50px";
    ToolBox.style.left = "0px";
    ToolBox.style.Zindex = "9999";
    ToolBox.style.pointerEvents = "none";
    ToolBox.style.display = "flex";
    ToolBox.style.justifyContent = "center";
    ToolBox.classList.add('ToolBox');
    body.append(ToolBox);
    /* toolBody 布局 */
    let ToolBody = document.createElement("div");
    ToolBody.style.width = "50vw";
    ToolBody.style.height = "40px";
    ToolBody.style.backgroundColor = "#fff";
    ToolBody.style.borderRadius = "5px";
    ToolBody.style.pointerEvents = "auto";
    ToolBody.style.boxShadow = "0 0 10px 0 #ccc";
    ToolBox.appendChild(ToolBody);

    /* tool部件 */
    /* 商品名称 */
    let goodName = document.createElement("div");
    /* 宝贝链接 */
    let goodUrl = document.createElement("div");
    /* 选择节点名称 */
    let goodDomName = document.createElement("div");
    /* 选取节点 */
    let goodSelectBtn = document.createElement("div");
    /* 秒杀时间 */ 
    let goodTime = document.createElement("div");
    /* 频率 */
    let goodFrequency = document.createElement("div");
    /* 秒杀次数 */
    let goodTimes = document.createElement("div");
    /* 确定 */
    let goodConfirm = document.createElement("div");
    /* 关闭 */
    let goodClose = document.createElement("div");

    ToolBody.appendChild()
})(window, document);
