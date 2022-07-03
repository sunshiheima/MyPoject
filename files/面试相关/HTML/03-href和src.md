# 重点

## href:

hyperReference 超文本引用，当浏览器遇到 href 时，会并行下载资源，不会阻塞页面解析。
例如 link 标签引用 CSS。（所以引入 CSS 时建议使用<link>而非@import）

## src:

resource 资源，当浏览器遇到 src 时，会暂停页面解析，直到该资源下载或执行完毕。
这也是 js 会阻塞渲染的原因。
