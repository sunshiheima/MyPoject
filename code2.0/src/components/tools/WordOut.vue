<template>
  <div class="fileUp">
    <div class="toLeadBtn">导入word</div>
    <input
      class="fileBtn"
      ref="upload"
      type="file"
      accept=".docx"
      @change="readFileAsArrayBuffer"
    />
  </div>
</template>
         
<script>
import {fileUpload} from "@/utils/request";
const mammoth = require("mammoth");
export default {
  data() {
    return {
      fileList: [],
    };
  },
  //生命周期 - 创建完成
  created() {},
  //DOM挂载完毕
  mounted() {},
  methods: {
    // 监听input change事件，读取文件转ArrayBuffer
    readFileAsArrayBuffer(e) {
      const that = this;
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function (event) {
        const arrayBuffer = event.target["result"];
        that.wordToHtml(arrayBuffer);
      };
    },
    // base64 转 blob, mime为类型，base64为,后的内容
    base64ToBlob(base64, mimeString) {
      const byteString = window.atob(base64);
      const bufferObj = new ArrayBuffer(byteString.length);
      const uintObj = new Uint8Array(bufferObj);
      for (let i = 0; i < byteString.length; i++) {
        uintObj[i] = byteString.charCodeAt(i);
      }
      // console.log(new File([uintObj], '', { type: mimeString }))
      //  return new File([uintObj], '', { type: mimeString });
      return new Blob([uintObj], { type: mimeString });
    },
    // word转HTML
    wordToHtml(arrayBuffer) {
      const that = this;
      // 转换配置，把base64图片转二进制在上传服务器
      const options = {
        convertImage: mammoth.images.imgElement((image) => {
          return image.read("base64").then(async (imageBuffer) => {
            const res = await that.uploadImage(imageBuffer, image.contentType);
            return {
              src: res.data.data[0],
            };
          });
        }),
      };
      // mammoth.convertToHtml({ arrayBuffer },).then((docx) => {
      //   this.$emit('fileUpOut',docx)
      //   console.log("最终结果：", docx);
      // });
      mammoth.convertToHtml({ arrayBuffer }, options).then((docx) => {
        this.$emit("fileUpOut", docx.value);
        console.log("最终结果：", docx.value);
      });
    },
    // 上传图片
    async uploadImage(base64Image, type) {
      const that = this;
      const formData = new FormData();
       formData.append("file", that.base64ToBlob(base64Image, type));
      return await fileUpload('/reservePlan/img/upload',formData);
    },
  },
};
</script>
<style lang='less' scoped>
.fileUp {
  //  width: 120px;
  //   height: 40px;
  display: flex;
  align-items: center;
  .toLeadBtn {
    width: 120px;
    height: 40px;
    background-color: #0461ae;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    // position: absolute;
  }
  .fileBtn {
    // opacity: 0;
    margin-left: -120px;
    width: 120px;
    height: 40px;
    cursor: pointer;
    opacity: 0;
  }
}
</style>