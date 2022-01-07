<template>
  <x-doughnut
      :chart-id="chartId"
      :options="options"
      :chart-data="chartData"
      :width="width"
      :height="height"
      :css-classes="cssClasses"
      :styles="styles"
      :plugins="plugins"
  />
</template>

<script>
import XDoughnut from "./charts/XDoughnut";

export default {
  name: "XChartDoughnut",
  components: {
    XDoughnut,
  },
  props: {
    chartData: {
      type: Object,
      default() {
        const getRandomInt = () => {
          return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
        };

        const colors = () => {
          let colors = [];
          for (let i = 0; i < 12; i++) {
            colors.push(`hsl(${Math.random() * 360}, 50%, 50%)`);
          }
          return colors;
        };

        const data = () => {
          let _data = [];
          for (let i = 0; i < 12; i++) {
            _data.push(getRandomInt());
          }
          return _data;
        };

        return {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Users",
              backgroundColor: colors(),
              data: data(),
            },
          ],
        };
      },
    },
    options: {
      type: Object,
      default() {
        return {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "bottom",
          },
        };
      },
    },
    chartId: {
      type: String,
      required: true
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default() {
        return []
      }
    },
  },
};
</script>

<style scoped>
</style>
