import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import gloalComponent from '@/components/index'
import SvgIcon from '@/components/SvgIcon/index.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/styles/index.scss'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(ElementPlus, { locale: zhCn })
app.use(gloalComponent)
//测试假接口能否使用
/* import axios from 'axios'

axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
}) */

app.mount('#app')
