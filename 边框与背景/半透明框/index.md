# 半透明框

背景知识: [background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)

background-clip: 设置元素的背景 (背景图片或颜色) 是否延伸到边框, 内边距盒子, 内容盒子下边

默认情况下, 背景的颜色会延伸至边框下层, 这意味着我们设置的透明边框效果会被覆盖掉, 在 css3 中, 我们可以通过设置 `background-clip: padding-box` 来改变背景的默认行为, 达到我们想要的效果



| 值          | 说明                                              |
| ----------- | ------------------------------------------------- |
| border-box  | 背景延伸至边框外沿 (但是在边框下面)               |
| padding-box | 背景延伸至内边距 (padding) 外沿, 不会绘制到边框外 |
| content-box | 背景被裁剪至内容区 (content-box) 外沿             |
| text        | 背景被裁剪至内容的前景色                          |

