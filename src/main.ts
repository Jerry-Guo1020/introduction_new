import { createApp } from 'vue'
import App from './App.vue'

import naive from 'naive-ui'
import router from './router/index'  // Specify the index file explicitly

const app = createApp(App);

// 按需注册组件

app.use(naive)

app.use(router)


app.mount('#app')


