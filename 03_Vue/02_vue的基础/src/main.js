import { createApp } from 'vue'
import App from './App.vue'

// App.vue是根组件
//     - createApp(App)将根组件关联到应用上
//       - 会返回一个 应用实例 app
//     - app.mount("#app")将应用挂载到页面中
//       - 会返回一个根组件的实例，组件的实例 通常可以命名为 vm
//       - 组件实例vm 是一个 Proxy对象（代理对象）
//
const app = createApp(App)
const vm = app.mount("#app")

// 将vm设置为全局变量
window.vm = vm

// createApp(App).mount('#app')
// console.log(vm)