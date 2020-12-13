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
              backgroundColor: '#00a65a',
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
  }
}
</script>

<style scoped>

</style>
