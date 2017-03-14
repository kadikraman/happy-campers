<template>
  <div class="game">
    <div class="tableContainer">
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
            v-bind:onClick="() => toggle({ row: rowIndex, column: columnIndex })"
            v-bind:solved="solved"
          ></square>
        </tr>
      </table>
    </div>
    <div class="settingPanel">
      <reset v-bind:onClick="() => reset()" v-bind:disabled="!hasBeenEdited" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Square from '../Square';
import Number from '../Number';
import Reset from '../Reset';

import { TOGGLE, RESET } from '../../store/mutationTypes';

export default {
  name: 'game',
  components: {
    Square,
    Number,
    Reset,
  },
  computed: mapState(['grid', 'tentsInRow', 'tentsInColumn', 'hasBeenEdited', 'solved']),
  methods: mapActions({ toggle: TOGGLE, reset: RESET }),
};
</script>

<style scoped>
.game {
  width: 450px;
  height: 400px;
  margin: 0 auto;
  margin-top: 30px;
}

.table {
  table-layout: fixed;
  border-collapse: collapse;
}

.tableContainer {
  float: left;
}

.settingPanel {
  float: right;
  margin-top: 60px;
}
</style>
