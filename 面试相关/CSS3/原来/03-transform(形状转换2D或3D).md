# 形状转换(transform)：分 2D 转换和 3D 转换

## 1.语法

transform：适用于 2D 或 3D 转换的元素
transform-origin：变换轴心位置。默认(x, y, z)为(50%, 50%, 0)

## 2.实例

transform: rotate(30deg); //即逆时针旋转 30 度
transform: translate(30px, 30px); //即使元素在原来的位置上向右移动 30px，向下移动 30px
transform: scale(.8); //即将体积缩小为原来的 0.8 的大小
transform: skew(10deg, 10deg); //斜切

transform: rotateX(180deg); //3d 效果，沿着 x 轴旋转 180 度
transform: rotateY(180deg); //3d 效果，沿着 y 轴旋转 180 度
transform: rotate3d(10, 10, 10, 90deg);
