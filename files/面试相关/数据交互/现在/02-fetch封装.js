export default class HttpUtils {
  // get方法
  static get(url) {
    return new Promise((resolve, reject) => {
      // 调用fetch
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // post方法，data以object形式传入
  static post(url, data) {
    return new Promise((resolve, reject) => {
      // 调用fetch
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // 将object类型的数据格式化为合法的body参数
        body: this.changeData(data),
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // body请求体的格式化方法
  static changeData(obj) {
    var prop,
      str = "";
    var i = 0;
    for (prop in obj) {
      if (!prop) {
        return;
      }
      if (i == 0) {
        str += prop + "=" + obj[prop];
      } else {
        str += "&" + prop + "=" + obj[prop];
      }
      i++;
    }
    return str;
  }
}

//调用
// 定义目标url地址
const URL = "xxxxx";
// 定义post入参
const params = {
  //...
};
// 发起post请求
const postResponse = (await HttpUtils.post(URL, params)) || {};
// 发起get请求
const getResponse = (await HttpUtils.get(URL)) || {};
