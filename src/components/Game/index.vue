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
      <div class="icon" v-on:click="nextGrid"><chevronRight /></div>
      <div class="icon" v-on:click="previousGrid"><chevronLeft /></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Square from '../Square';
import Number from '../Number';
import Reset from '../Icons/Reset';
import ChevronRight from '../Icons/ChevronRight';
import ChevronLeft from '../Icons/ChevronLeft';

import { TOGGLE, RESET, NEXT_GRID, PREVIOUS_GRID } from '../../store/mutationTypes';

export default {
  name: 'game',
  components: {
    Square,
    Number,
    Reset,
    ChevronRight,
    ChevronLeft,
  },
  computed: mapState(['grid', 'tentsInRow', 'tentsInColumn', 'hasBeenEdited', 'solved']),
  methods: mapActions({
    toggle: TOGGLE,
    reset: RESET,
    nextGrid: NEXT_GRID,
    previousGrid: PREVIOUS_GRID,
  }),
};
</script>

<style scoped>

.icon {
  display: none;
}

.game {
  width: 350px;
  height: 420px;
  margin: 0 auto;
  margin-top: 30px;
}

.table {
  table-layout: fixed;
  border-collapse: collapse;
}

.tableContainer {
  float: none;
}

.settingPanel {
  float: none;
  margin: 10px 0 0 40px;
}

@media (min-width: 768px) {
  .tableContainer {
    float: left;
  }

  .settingPanel {
    float: right;
    margin: 60px 0 0 0;
  }

  .game {
    height: 400px;
    width: 450px;
  }

  .icon {
    display: block;
    width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-left: 5px;
  }

  .icon:hover {
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>
