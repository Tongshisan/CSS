/*
 * @Author: your name
 * @Date: 2020-12-06 10:15:00
 * @LastEditTime: 2020-12-06 14:04:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CSS/边框与背景/条纹背景/进度条/index.js
 */
const progressBg = document.getElementsByClassName('progress-bg')[0]
console.log(progressBg.style)
// 设置加载时长
progressBg.style.animationDuration = '20s'
// let percent = 0
// setInterval(() => {
//     progressBg.style.width = `${percent}%`
//     percent += 0.01
// }, 10)