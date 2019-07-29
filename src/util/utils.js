/**
 * 防抖
 * @param {function} fn         回调函数
 * @param {number} time         时间间隔
 * @return {function}           返回用户调用函数
 */
// export const debounce = function (fn, time = 500) {
//     let timeout = null
//     return function () {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             console.log(this)
//             fn.apply(this, arguments)
//         }, time)
//     }
// }
// export function debounce (fn, time = 500) {
//     let timeout = null
//     return function () {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             console.log(this)
//             fn.apply(this, arguments)
//         }, time)
//     }
// }
export const debounce = (fn, time = 500) => {
    let timeout = null
    return function () {
        console.log(timeout)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            console.log(this)
            fn.apply(this, arguments)
        }, time)
    }
}

/**
 * 支持立即执行的防抖函数
 * @param {function} fn         回调函数
 * @param {number} time         时间间隔
 * @param {boolean} immediate   是否为立即执行的防抖函数，true表示是
 * @return {function}           返回用户调用函数
 */
export const debounces = (fn, time = 500, immediate = true) => {
    let timeout, context, args
    const later = () => setTimeout(() => {
        timeout = null
        if (!immediate) {
            fn.apply(context, args)
            context = args = null
        }
    }, time)

    return function (...params) {
        if (!timeout) {
            timeout = later()
            if (immediate) {
                fn.apply(this, params)
            } else {
                context = this
                args = params
            }
        } else {
            clearTimeout(timeout)
            timeout = later()
        }
    }
}

/**
 * 节流
 * @param {function} fn         回调函数
 * @param {number} time         时间间隔
 * @return {function}           返回用户调用函数
 */
export const throttle = (fn, time = 500) => {
    let canRun = true
    return function () {
        if (!canRun) return
        canRun = false
        setTimeout(() => {
            fn.apply(this, arguments)
            canRun = true
        }, time)
    }
}
// export const throttle = (func, time = 500) => {
//     let activeTime = 0
//     return function () {
//         const current = Date.now()
//         if (current - activeTime > time) {
//             func.apply(this, arguments)
//             activeTime = Date.now()
//         }
//     }
// }
