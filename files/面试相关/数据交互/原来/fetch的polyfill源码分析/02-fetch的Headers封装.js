export function Headers(headers){
  this.map = {};    //将所有的值维护到map中
  if(headers instanceof Headers){   //当传入的headers是Header对象时
    headers.forEach(function(value,name){
      this.append(name,value)
    },this)
  }else if(Array.isArray(headers)){   //当传入的headers是普通数组时
    headers.forEach(function(header){
      this.append(header[0],header[1])
    },this)
  }else if(headers){      //当传入的headers是普通对象类型时
    Object.getOwnPropertyNames(headers).forEach(function(name){
      this.append(name,headers[name])
    },this)
  }
}

//header的forEach方法
Headers.prototype.forEach = function(callback, thisArg){
  for(var name in this.map){
    if(this.map.hasOwnProperty(name)){  //可见：header的遍历即其内部map的遍历
      callback.call(thisArg, this.map[name], name, this)
    }
  }
};
//另外：Header还提供了append、delete、get、set等方法，都是对其内部的map对象进行操作

