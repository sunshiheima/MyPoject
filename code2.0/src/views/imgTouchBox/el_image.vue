<template>
  <div class="el-image">
    <slot v-if="loading" name="placeholder">
      <div class="el-image__placeholder"></div>
    </slot>
    <slot v-else-if="error" name="error">
      <div class="el-image__error">{{ t("el.image.error") }}</div>
    </slot>
    <!-- v-bind="$attrs"
      v-on="$listeners" -->
    <img
      v-else
      class="el-image__inner"
      @click.self="clickHandler"
      @mousedown.self="imgTouchBoxMousedown"
      :src="src"
      :style="imageStyle"
      :class="{
        'el-image__inner--center': alignCenter,
        'el-image__preview': preview,
      }"
    />
    <template >
      <image-viewer
        :z-index="zIndex"
        :initial-index="imageIndex"
        v-if="showViewer"
        :on-close="closeViewer"
        :url-list="previewSrcList"
      />
    </template>
  </div>
</template>

<script>
import ImageViewer from "./image_viewer";
import Locale from "element-ui/src/mixins/locale";
import {
  on,
  off,
  getScrollContainer,
  isInContainer,
} from "element-ui/src/utils/dom";
import { isString, isHtmlElement } from "element-ui/src/utils/types";
import throttle from "throttle-debounce/throttle";

const isSupportObjectFit = () =>
  document.documentElement.style.objectFit !== undefined;

const ObjectFit = {
  NONE: "none",
  CONTAIN: "contain",
  COVER: "cover",
  FILL: "fill",
  SCALE_DOWN: "scale-down",
};

let prevOverflow = "";

export default {
  name: "ElImage",

  mixins: [Locale],
  inheritAttrs: false,

  components: {
    ImageViewer,
  },

  props: {
    src: String,
    fit: String,
    lazy: Boolean,
    scrollContainer: {},
    previewSrcList: {
      type: Array,
      default: () => [],
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
  },

  data() {
    return {
      MousemoveActive:true,
      loading: true,
      error: false,
      show: !this.lazy,
      imageWidth: 0,
      imageHeight: 0,
      showViewer: false,
    };
  },

  computed: {
    imageStyle() {
      const { fit } = this;
      if (!this.$isServer && fit) {
        return isSupportObjectFit()
          ? { "object-fit": fit }
          : this.getImageStyle(fit);
      }
      return {};
    },
    alignCenter() {
      return (
        !this.$isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL
      );
    },
    preview() {
      const { previewSrcList } = this;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    },
    imageIndex() {
      let previewIndex = 0;
      const srcIndex = this.previewSrcList.indexOf(this.src);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      return previewIndex;
    },
  },

  watch: {
    src(val) {
      this.show && this.loadImage();
    },
    show(val) {
      val && this.loadImage();
    },
    "previewSrcList"(newVal) {
      console.log("监听到", newVal);
    },
  },

  mounted() {
    if (this.lazy) {
      this.addLazyLoadListener();
    } else {
      this.loadImage();
    }
  },

  beforeDestroy() {
    this.lazy && this.removeLazyLoadListener();
  },

  methods: {
    //鼠标拖动
    imgTouchBoxMousedown(e) {
      let _this = this;
      _this.MousemoveActive = false;
      _this.previewList = [];
      //  debugger
      //  e.preventDefault(); // 移动时禁用默认事件
      // e.stopPropagation(); // 移动时禁用默认事件
      //禁止图片拖动
      e.target.draggable = false;

      let ScrollDom = document.querySelector("el-image__inner");
      // 鼠标按下，计算当前元素距离可视区的距离
      const oldX = e.clientX;
      const oldY = e.clientY;
      console.log(oldX, oldY);
      //开始拖拽
      ScrollDom.onmousemove = (event) => {
        e.preventDefault(); // 移动时禁用默认事件
        e.stopPropagation(); // 移动时禁用冒泡事件
        let newX = event.clientX - oldX;
        let newY = event.clientY - oldY;
        console.log(newX, newY);
        if (Math.abs(newX) > 3 || Math.abs(newY) > 3) {
          _this.MousemoveActive = true;
          //滚动偏移
        } else {
          _this.MousemoveActive = false;
        }
        console.log("鼠标移动", ScrollDom.scrollLeft);
      };
      //拖拽结束
      ScrollDom.onmouseup = (event) => {
        ScrollDom.onmousemove = null;
        ScrollDom.onmouseup = null;
      };
    },
    loadImage() {
      if (this.$isServer) return;

      // reset status
      this.loading = true;
      this.error = false;

      const img = new Image();
      img.onload = (e) => this.handleLoad(e, img);
      img.onerror = this.handleError.bind(this);

      // bind html attrs
      // so it can behave consistently
      Object.keys(this.$attrs).forEach((key) => {
        const value = this.$attrs[key];
        img.setAttribute(key, value);
      });
      img.src = this.src;
    },
    handleLoad(e, img) {
      this.imageWidth = img.width;
      this.imageHeight = img.height;
      this.loading = false;
      this.error = false;
    },
    handleError(e) {
      this.loading = false;
      this.error = true;
      this.$emit("error", e);
    },
    handleLazyLoad() {
      if (isInContainer(this.$el, this._scrollContainer)) {
        this.show = true;
        this.removeLazyLoadListener();
      }
    },
    addLazyLoadListener() {
      if (this.$isServer) return;

      const { scrollContainer } = this;
      let _scrollContainer = null;

      if (isHtmlElement(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (isString(scrollContainer)) {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        _scrollContainer = getScrollContainer(this.$el);
      }

      if (_scrollContainer) {
        this._scrollContainer = _scrollContainer;
        this._lazyLoadHandler = throttle(200, this.handleLazyLoad);
        on(_scrollContainer, "scroll", this._lazyLoadHandler);
        this.handleLazyLoad();
      }
    },
    removeLazyLoadListener() {
      const { _scrollContainer, _lazyLoadHandler } = this;

      if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return;

      off(_scrollContainer, "scroll", _lazyLoadHandler);
      this._scrollContainer = null;
      this._lazyLoadHandler = null;
    },
    /**
     * simulate object-fit behavior to compatible with IE11 and other browsers which not support object-fit
     */
    getImageStyle(fit) {
      const { imageWidth, imageHeight } = this;
      const {
        clientWidth: containerWidth,
        clientHeight: containerHeight,
      } = this.$el;

      if (!imageWidth || !imageHeight || !containerWidth || !containerHeight)
        return {};

      const vertical = imageWidth / imageHeight < 1;

      if (fit === ObjectFit.SCALE_DOWN) {
        const isSmaller =
          imageWidth < containerWidth && imageHeight < containerHeight;
        fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
      }

      switch (fit) {
        case ObjectFit.NONE:
          return { width: "auto", height: "auto" };
        case ObjectFit.CONTAIN:
          return vertical ? { width: "auto" } : { height: "auto" };
        case ObjectFit.COVER:
          return vertical ? { height: "auto" } : { width: "auto" };
        default:
          return {};
      }
    },
    clickHandler() {
      this.previewSrcList;
      // don't show viewer when preview is false
      if (!this.preview || MousemoveActive) {
        return;
      }
      // prevent body scroll
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      this.showViewer = true;
    },
    closeViewer() {
      document.body.style.overflow = prevOverflow;
      this.showViewer = false;
    },
  },
};
</script>
