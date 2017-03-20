<template>
  <div class="navigation">
    <span v-for="(grid, gridIndex) in grids">
      <div
        class="point"
        v-bind:class="{ selected: gridIndex === currentGridId, solved: solvedGridIds.indexOf(gridIndex) >= 0 }"
        v-on:click="navigate({ id: gridIndex })">
      </div>
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Number from '../Number';

import { NAVIGATE } from '../../store/mutationTypes';

export default {
  name: 'game',
  components: {
    Number,
  },
  computed: mapState(['grids', 'currentGridId', 'solvedGridIds']),
  methods: mapActions({
    navigate: NAVIGATE,
  }),
};
</script>

<style scoped>
  .navigation {
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  .point {
    display: inline-block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-weight: bold;
    font-size: 18px;
    margin: 0 20px;
    background-color: #F6A623;
    line-height: 25px;
    vertical-align: middle;
  }

  .point:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  .selected {
    width: 25px;
    height: 25px;
  }

  .solved {
    background-color: #CFF09E;
  }
</style>
