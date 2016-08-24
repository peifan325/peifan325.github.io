### 无缝轮播 与 CSS3旋转木马轮播 插件封装。

1. CarouselCSS3.css 是CSS3旋转木马轮播的css文件
2. CarouselCSS3.js  是CSS3旋转木马轮播的js文件，里面是模块化封装对象。
3. CarouseljqueryFn.js 是封装成jquery插件形式的 无缝轮播。
4. CarouselModule.js 是模块化封装的无缝轮播模块

### 原理简介

1、 无缝轮播：
复制首尾图片，分别插入到图片列表的尾首。
相对于显示容器，对图片列表容器ul进行位移，实现轮播的效果。

2、 旋转木马轮播：
第一张图片，作为第一帧图，剩余图片一分为二，分别放在第一帧的两边。计算出偏移值。
旋转时，分别设置每一帧图的 位置、宽高，为上一帧(左移)或下一帧(右移)的位置和宽高。

具体使用参考 html 文件。





