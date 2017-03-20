<template>
  <div class="game">
    <div class="tableContainer">
      <div v-if="showVictory" class="victory">
        <div class="victoryContent">
          <div class="victoryClose" v-on:click="hideVictory">X</div>
          <h1 class="victoryTitle">You Win!</h1>
          <div class="playNext" v-on:click="nextGrid">play next</div>
        </div>
      </div>
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

import {
  TOGGLE,
  RESET,
  NEXT_GRID,
  PREVIOUS_GRID,
  HIDE_VICTORY,
} from '../../store/mutationTypes';

export default {
  name: 'game',
  components: {
    Square,
    Number,
    Reset,
    ChevronRight,
    ChevronLeft,
  },
  computed: mapState(['grid', 'tentsInRow', 'tentsInColumn', 'hasBeenEdited', 'solved', 'showVictory']),
  methods: mapActions({
    toggle: TOGGLE,
    reset: RESET,
    nextGrid: NEXT_GRID,
    previousGrid: PREVIOUS_GRID,
    hideVictory: HIDE_VICTORY,
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
  position: relative;
}

.victory {
  position: absolute;
  height: 150px;
  width: 200px;
  left: 72px;
  top: 95px;
  background-color: #CFF09E;
  border: 8px solid white;
}

.victoryContent {
  text-align: center;
}

.victoryTitle {
  color: #91CC04;
}

.victoryClose {
  color: #F6A623;
  text-align: right;
  margin: 10px;
}

.victoryClose:hover {
  cursor: pointer;
  opacity: 0.6;
}

.playNext {
  color: #F6A623;
  border-bottom: 1px solid #F6A623;
  display: inline-block;
}

.playNext:hover {
  cursor: pointer;
  opacity: 0.6;
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

  .victory {
    left: 100px;
    top: 120px;
  }
}
</style>
