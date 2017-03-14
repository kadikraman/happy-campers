<template>
  <div id="app">
    <div class="header">
      <div class="title">Happy Campers</div>
      <div class="subtext">a logic puzzle matching up campers and trees.</div>
    </div>
    <div id="game">
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
    <div class="instructions">
      <div class="instructionsTitle">Instructions</div>
      <div class="instructionTitle">Scene</div>
      <p>Before you is a map of a campsite with locations of all the trees clearly marked.</p>
      <div class="instructionTitle">Goal</div>
      <p>Place the tents next to the trees such that each tree is adjacant to a tent.</p>
      <div class="instructionTitle">Restrictions</div>
      <p>Since campers love their privacy, no tents can be next to each other, not even diagonally.</p>
      <div class="instructionTitle">Help</div>
      <p>The numbers on the left and top of the grid show how many tents are in each of the rows and columns.</p>
      <div class="instructionTitle">Winning Condition</div>
      <p>The game is won when all the tents have been placed in the correct position and all the empty spaces have been filled with grass tiles.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Square from './components/Square';
import Number from './components/Number';
import Reset from './components/Reset';

import { TOGGLE, RESET } from './store/mutationTypes';

export default {
  name: 'app',
  components: {
    Square,
    Number,
    Reset,
  },
  computed: mapState(['grid', 'tentsInRow', 'tentsInColumn', 'hasBeenEdited', 'solved']),
  methods: mapActions({ toggle: TOGGLE, reset: RESET }),
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  user-select: none;
  margin: 0 auto;
}

body {
  margin: 0;
}

.header {
  background-color: #8B572A;
  height: 70px;
  padding: 10px 0 0 20px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: #FFFFFF;
}

.subtext {
  color: #FFFFFF;
}

#game {
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

.instructions {
  padding: 30px 10px;
  max-width: 800px;
  margin: 0 auto;
}

p {
  color: #919998;
}

.instructionTitle {
  font-size: 18px;
  font-weight: bold;
  color: #F6A623;
}

.instructionsTitle {
  font-size: 36px;
  font-weight: bold;
  color: #8B572A;
  padding-bottom: 20px;
}
</style>
