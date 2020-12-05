# 多重边框

背景知识: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline), [outline-offset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-offset)



## box-shadow

`box-shadow`: 用于在元素的框架上添加阴影效果, 可以在同一个元素上添加多个阴影效果, 并用逗号 `,` 将他们分开, 该属性可设置的值包括阴影的 `X` 轴偏移量, `Y` 轴偏移量, 模糊半径, 扩散半径和颜色



向元素添加单个 `box-shadow` 时使用一下规则:

+ 当给出两个, 三个, 四个 `length` 时
  + 两个, 那么这两个值会被当作 `<offset-x>` `<offset-y>` 来解释
  + 如果给出了第三个值, 那么第三个值会被当作 `<blur-radius>` 解释
  + 如果给出了第四个值, 那么第四个值会被当作 `<spread-radius>` 解释
+ 可选, `inset` 关键字
+ 可选, `color` 关键字

若要对同一个元素添加多个阴影效果, 请使用逗号 `,` 将每个阴影规则分隔开



| 取值                      | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| inset                     | 如果没有指定 inset, 默认阴影在边框外, 即阴影向外扩散         |
| `<offset-x>` `<pffset-y>` | 这是头两个 `length` 值, 用来设置阴影偏移量                   |
| `<blur-radius>`           | 这是第三个 `length` 值, 值越大, 模糊面积越大, 阴影就越大约淡, 不能为负值, 默认为 0 |
| `<spread-radius>`         | 这是第四个 `length` 值, 取正值时阴影扩大, 取负值时阴影收缩   |

