// ...existing code...
import SvgIcon from './SvgIcon/index.vue'
import type { App, Component, Plugin } from 'vue'

const components: Record<string, Component> = { SvgIcon }

const globalComponent: Plugin = {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]!)
    })
  },
}

export default globalComponent
// ...existing code...
