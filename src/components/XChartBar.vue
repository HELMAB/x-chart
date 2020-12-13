<template>
  <x-bar :options="options" :chart-data="chartData"/>
</template>

<script>
import XBar from './charts/XBar'

export default {
  name: "XChartBar",
  components: {
    XBar
  },
  props: {
    chartData: {
      type: Object,
      default() {
        function getRandomInt() {
          return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }

        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Users',
              backgroundColor: '#00c0ef',
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
