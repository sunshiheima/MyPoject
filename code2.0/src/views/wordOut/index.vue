<template>
  <div class="toolBox">
    <!-- word文件导出 -->
    <WordOut @fileUpOut="fileUpOut"/>
    <div class="textComtent">
      <quill-editor
        class="editor"
        ref="myTextEditor"
        v-model="planContent"
        :options="editorOption"
        @change="onEditorChange($event)"
      >
        <!-- @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)" -->
      </quill-editor>
    </div>
  </div>
</template>
         
<script>
import WordOut from "@/components/tools/WordOut";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  components: {
    WordOut,
    quillEditor
  },
  data() {
    return {
      //富文本value
      planContent: "",
      // 富文本框参数设置
    //   editorOption: {
    //     modules: {
    //       ImageExtend: {
    //         loading: true,
    //         name: "img",
    //         // action: updateUrl,
    //         action: null,
    //         response: (res) => {
    //           return res.info;
    //         },
    //       },
    //       //   toolbar: {
    //       //     container: container,
    //       //     handlers: {
    //       //       image: function () {
    //       //         QuillWatch.emit(this.quill.id);
    //       //       },
    //       //     },
    //       //   },
    //     },
    //   },
    };
  },
  //生命周期 - 创建完成
  created() {},
  //DOM挂载完毕
  mounted() {},
  methods: {
    //富文本编辑改变
    onEditorChange(editor) {
      this.formData.planContent = editor.html;
      console.log(editor);
    },
    //word导出html内容
    fileUpOut(html){
        this.planContent=html;
    }
  },
};
</script>
<style lang='less' scoped>
</style>