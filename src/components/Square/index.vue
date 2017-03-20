<template>
  <td v-bind:class="{ solved, square: true, grass: true }" v-on:click="onClick">
    <tree v-if="element.selected === 'tree'" />
    <tent v-if="element.selected === 'tent'" />
    <svg v-if="element.selected === 'grass'" class="icon"></svg>
    <svg v-if="element.selected === ''" class="icon empty"></svg>
  </td>
</template>


<script>
import Tree from '../Icons/Tree';
import Tent from '../Icons/Tent';

export default {
  name: 'square',
  props: ['element', 'onClick', 'solved'],
  components: {
    Tree,
    Tent,
  },
};
</script>

<style scoped>
svg.icon {
  display: block;
  background-color: #CFF09E;
  height: 30px;
  width: 30px;
}

svg.empty {
  background-color: #E9E9E9;
}

.square {
  border: 2px solid white;
}

.square:hover {
  opacity: .6;
  cursor: pointer;
}

.solved {
  background-color: #CFF09E;
  border-color: #CFF09E;
}

.solved:hover {
  opacity: 1;
  cursor: default;
}

@media (min-width: 768px) {
  svg.icon {
    height: 35px;
    width: 35px;
  }
}

</style>
