//【跨浏览器的事件处理程序】
//关注于冒泡阶段。尚未考虑到所有的浏览器问题，例如在IE中的作用域问题。不过已经足够了。
var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      //DOM2 非IE浏览器
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      //DOM2 IE浏览器
      element.attachEvent("on" + type, handelr);
    } else {
      //DOM0 所有浏览器（在现代浏览器中，应该不会执行到此处）
      element["on" + type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (element.addEventListener) {
      //DOM2 非IE浏览器
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      //DOM2 IE浏览器
      element.detachEvent("on" + type, handelr);
    } else {
      //DOM0 所有浏览器（在现代浏览器中，应该不会执行到此处）
      element["on" + type] = null;
    }
  },
  getEvent: function (event) {
    return event ? event : window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
};
//使用
var btn = document.getElementById("myBtn");
var handler = function (event) {
  event = EventUtil.getEvent(event); //必须
  //var target = EventUtil.getTarget(event);
  //EventUtil.preventDefault(event);
  //EventUtil.stopPropagation(event);
};
EventUtil.addEventListener(btn, "click", handler);
EventUtil.removeEventListener(btn, "click", handler);

// -------------------------------------

//当需要通过一个事件处理函数handler，处理多种不同的事件类型时
var handler = function (event) {
  switch (event.type) {
    case "click":
      alert("");
      break;
    case "mouseover":
      event.target.style.backgroundColor = "red";
      break;
    case "mouseout":
      event.target.style.backgroundColor = ""; //将会使用默认值
      break;
  }
};
btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handelr;
