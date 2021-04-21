import Vue from "vue";

/* bus跨组件传参*/
Vue.prototype.$bus=new Vue;
/* form正则*/
export class VForm{
    /* 去除空格 */
    static space (str){
        return str.replace(/\s+/g, "");
    };
    /* 手机号 */
    /* 身份证号 */
    /* 邮箱 */
    /* 纯数字 */
    
}