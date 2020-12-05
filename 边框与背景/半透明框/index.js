/*
 * @Author: your name
 * @Date: 2020-12-05 20:47:55
 * @LastEditTime: 2020-12-05 22:17:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CSS/边框与背景/半透明框/index.js
 */
const left = document.getElementsByClassName('left')[0]
const borderBox = document.getElementsByClassName('border-box')[0]
const paddingBox = document.getElementsByClassName('padding-box')[0]
const contentBox = document.getElementsByClassName('content-box')[0]
const textBox = document.getElementsByClassName('text-box')[0]
const content = document.getElementsByClassName('content')[0]

borderBox.addEventListener('mouseenter', () => {
    content.style.backgroundClip = 'border-box'
    content.style.color = '#fff'
})

paddingBox.addEventListener('mouseenter', () => {
    content.style.backgroundClip = 'padding-box'
    content.style.color = '#fff'
})

contentBox.addEventListener('mouseenter', () => {
    content.style.backgroundClip = 'content-box'
    content.style.color = '#fff'
})

textBox.addEventListener('mouseenter', () => {
    content.style.backgroundClip = 'text'
    content.style.webkitBackgroundClip = 'text'
    content.style.color = 'transparent'
})
