<template>
  <td v-bind:class="{ solved: solved, square: true, grass: true }" v-on:click="onClick">
    <tree v-if="element.selected === 'tree'" />
    <tent v-if="element.selected === 'tent'" />
    <grass v-if="element.selected === 'grass'" />
    <empty v-if="element.selected === ''"/>
  </td>
</template>


<script>
import Tent from '../Tent';
import Tree from '../Tree';
import Grass from '../Grass';
import Empty from '../Empty';

export default {
  name: 'square',
  props: ['element', 'onClick', 'solved'],
  components: {
    Tent,
    Tree,
    Grass,
    Empty,
  },
};
</script>

<style scoped>
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

</style>
