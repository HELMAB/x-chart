import * as components from './src/components'

const xchart = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    for (const componentName in components.default) {
      const component = components.default[componentName]
      Vue.component(component.name, component)
    }
  }
}

export default xchart

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xchart)
}
