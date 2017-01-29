<template>
  <div id="app">
    <table class="table">
      <tr v-for="(row, rowIndex) in grid">
        <square
          v-for="(column, columnIndex) in row"
          v-bind:element="column"
          v-bind:onClick="onClick(rowIndex, columnIndex)"
        ></square>
      </tr>
    </table>
  </div>
</template>

<script>
import Square from './components/Square';
import initialGrid from './initialGrid';

const state = {
  grid: initialGrid,
};

const store = {
  onClick: (row, column) => {
    switch (state.grid[row][column].selected) {
      case '':
        state.grid[row][column].selected = 'grass';
        break;
      case 'grass':
        state.grid[row][column].selected = 'tent';
        break;
      case 'tent':
        state.grid[row][column].selected = '';
        break;
      default:
        break;
    }
  },
};

export default {
  name: 'app',
  components: {
    Square,
  },
  data: () => ({
    onClick: (row, column) => () => {
      store.onClick(row, column);
    },
    grid: state.grid,
  }),
};
</script>

<style>
#app {
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
}

.table {
  table-layout: fixed;
  border-collapse: collapse;
}
</style>
