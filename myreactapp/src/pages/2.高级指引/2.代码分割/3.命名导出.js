/* React.lazy 目前只支持默认导出（default exports）。
如果你想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块。
这能保证 tree shaking 不会出错，并且不必引入不需要的组件。 */

/* 官网示例 */
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;
// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";
// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));