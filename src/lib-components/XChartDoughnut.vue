<template>
  <x-doughnut :options="options" :chart-data="chartData" />
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
  },
};
</script>

<style scoped>
</style>
