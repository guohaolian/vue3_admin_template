import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import gloalComponent from '@/components/index'
import SvgIcon from '@/components/SvgIcon/index.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(ElementPlus, { locale: zhCn })
app.use(gloalComponent)
app.mount('#app')
