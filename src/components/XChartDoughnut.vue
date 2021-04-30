<template>
  <x-doughnut :options="options" :chart-data="chartData"/>
</template>

<script>
import XDoughnut from './charts/XDoughnut'

export default {
  name: "XChartDoughnut",
  components: {
    XDoughnut
  },
  props: {
    chartData: {
      type: Object,
      default() {
        function getRandomInt() {
          return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }

        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Users',
              backgroundColor: [],
              data: [
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
                getRandomInt(),
              ]
            }
          ]
        }
      }
    },
    options: {
      type: Object,
      default() {
        return {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  },
  methods: {
    getColors(number) {
      let colors = []
      for (let i = 0; i < number; i++) {
        colors.push(`hsl(${Math.random() * 360}, 50%, 50%)`)
      }
      return colors
    }
  },
  mounted() {
    if (this.chartData && this.chartData.datasets) {
      const numbers = parseInt(this.chartData.labels.length)
      if (!(this.chartData.datasets[0].backgroundColor.length > 0)) {
        this.chartData.datasets[0].backgroundColor = this.getColors(numbers)
      }
    }
  }
}
</script>

<style scoped>

</style>
