<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { XChartSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  XChartSample,
  // }
});
</script>

<template>
  <div id="app">
    <x-chart-bar />
    <x-chart-line />
    <x-chart-doughnut />
  </div>
</template>
