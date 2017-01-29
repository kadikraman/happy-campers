<template>
  <td class="square grass" v-on:click="onClick">
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
  props: ['element', 'onClick'],
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

</style>
