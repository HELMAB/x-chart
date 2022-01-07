<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ServeDev'
})
</script>

<template>
  <div id="app">
    <x-chart-bar />
    <x-chart-line />
    <x-chart-doughnut />
  </div>
</template>
