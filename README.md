x-chart
------
> A simple snippet [vue-chartjs](https://vue-chartjs.org/) code base.

## Installation

```cmd
npm install @laramab/x-chart --save
```

## Nuxtjs

```cmd
npm install vue-chartjs chart.js --save
```

Import the package into `main.js` file
```js
import Vue from 'vue'
import XChart from '@laramab/x-chart'

Vue.use(XChart)
```

## Usage

`Example.vue`
```vue
<template>
  <x-chart-line/>
  <x-chart-doughnut/>
  <x-chart-bar/>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
```
