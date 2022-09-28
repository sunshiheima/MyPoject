import AutoTrack from "@tencent/autotracker";

const { location } = window;
/* 获取当前运行环境 */
const getEnv = () => {
  const host = location.host;
  switch (true) {
    case /localhost/.test(host):
      return "env";
    default:
      return undefined;
  }
};
const env = getEnv();

/* 获取设备型号 */
const getDeviceType = () => {
  const userAgent = navigator.userAgent;
  switch (true) {
    case /Win/i.test(userAgent):
      return "window";
    case /Mac/i.test(userAgent):
      return "mac";
    case /Android/i.test(userAgent):
      return "Android";
    case /Linux/i.test(userAgent):
      return "Linux";
    case /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent):
      return "Ios";
    default:
      return undefined;
  }
};

class GlobalReport {
  private commonParams = {
    //公共参数
    source: "react",
    url: location.href,
    host: location.host,
    path: location.href,
    screen: `${window.screen.width}x${window.screen.height}`,
    openid: undefined,
    os: getDeviceType(),
  };
  private beaconIns: AutoTrack | undefined; //灯塔sdk实例
  private userInfo = { user_id: "007", user_name: "sun" };

  getBeaconIns() {
    //获取实例
    return this.beaconIns;
  }

  init() {
    this.beaconIns = new AutoTrack({
      report: {
        appkey: "0WEB0S5WP153PQXR", // 从datahub获取的appkey
        // enableReport: () => location.host.indexOf("xxx.com") !== -1, // 上报条件，例如线上环境才上报
        commonParams: this.commonParams,
        /* 是否同时在控制台打出上报参数。 */
        consolelog: !!env,
        /* 上报xhr请求失败回调 */
        onReportFail: (e: any) => {
          env === "env" && console.error(e);
        },
        /* 自动上报的事件类型数组。前三个为默认 */
        autoReportEvents: ["show_page", "stay_page", "click"],
        beforeReport: (type, params) => {
          return {
            ...this.userInfo,
            ...params,
          };
        },
      },
      track: {
        /* 被认定为点击事件的‘CSS选择器’数组*/
        click: ["button", "menu"],
        /*  需要上报曝光事件的‘CSS选择器’数组，例如['.ant-card', '[class^=prism-]'] */
        area: [],
        /* 需要上报tab参数的元素classname，例如'ant-tabs' */
        tabSelector: [],
      }, // 自定义track配置
      uselib: ["antd"], // 预设了ui库track规则，包括omui,antd,element,tdesign等；不设置该项则没有预设规则，完全依据传入的track配置
      inspector: {
        getActivePlugins: () => {
          // 以下设置表示，在首页且url中出现dt-inspector参数则开启热力展示
          if (/ /.test(location.search)) {
            return ["heatmap", "detector", "pageAccess"]; // 热力分析，可视化埋点，访问分析三个工具可以按需返回
          }
          return [];
        },
      },
    });
  }
}

const report = new GlobalReport(); //导出的是同一份实例
export default report;
