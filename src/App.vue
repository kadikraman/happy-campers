<template>
  <div id="app">
    <table class="table">
      <tr>
        <td v-for="(column, columnIndex) in grid[0].length + 1">
          <number v-if="columnIndex !== 0" v-bind:text="tentsInColumn[columnIndex - 1]"></number>
        </td>
      </tr>
      <tr v-for="(row, rowIndex) in grid">
        <td><number v-bind:text="tentsInRow[rowIndex]"></number></td>
        <square
          v-for="(column, columnIndex) in row"
          v-bind:element="column"
          v-bind:onClick="() => onClick({ row: rowIndex, column: columnIndex })"
        ></square>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Square from './components/Square';
import Number from './components/Number';

import { TOGGLE } from './store/mutationTypes';

export default {
  name: 'app',
  components: {
    Square,
    Number,
  },
  computed: mapState(['grid', 'tentsInRow', 'tentsInColumn']),
  methods: mapActions({ onClick: TOGGLE }),
};
</script>

<style>
#app {
  width: 350px;
  height: 350px;
  margin: 0 auto;
  margin-top: 50px;
  font-family: 'Roboto', sans-serif;
  user-select: none;
}

.table {
  table-layout: fixed;
  border-collapse: collapse;
}
</style>
