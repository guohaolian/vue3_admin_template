/// <reference types="vite/client" />

declare module 'virtual:svg-icons-register' {
  // 这里可以添加SVG注册模块的具体类型，或者留空
}
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
