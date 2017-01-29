<template>
  <div id="app">
    <table class="table">
      <tr v-for="row in grid">
        <square v-for="item in row" v-bind:element="item"> </square>
      </tr>
    </table>
  </div>
</template>

<script>
import Square from './components/Square';

export default {
  name: 'app',
  components: {
    Square,
  },
  data: () => ({
    grid: [
      ['', '', '', '', '', 'tent', 'tree', ''],
      ['tree', '', 'tree', '', 'tree', '', '', ''],
      ['', '', 'tree', 'tent', '', '', '', ''],
      ['tree', '', '', '', '', 'tree', '', ''],
      ['', '', '', '', '', '', 'tree', ''],
      ['', '', '', 'tree', '', '', '', ''],
      ['tent', 'tree', '', '', 'tree', '', '', ''],
      ['', '', '', '', '', '', '', 'tree'],
    ],
  }),
};
</script>

<style>
.table {
  table-layout: fixed;
  border-collapse: collapse;
}
</style>
