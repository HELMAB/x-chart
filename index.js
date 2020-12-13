import XChartBar from './src/components/XChartBar'
import XChartLine from './src/components/XChartLine'
import XChartDoughnut from './src/components/XChartDoughnut'

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.component('x-chart-bar', XChartBar)
    Vue.component('x-chart-line', XChartLine)
    Vue.component('x-chart-doughnut', XChartDoughnut)
  }
}
