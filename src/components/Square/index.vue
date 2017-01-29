<template>
  <td class="square">
    <tree v-if="element === 'tree'" />
    <tent v-if="element === 'tent'" />
    <grass v-if="element === ''" />
  </td>
</template>


<script>
import Tent from '../Tent';
import Tree from '../Tree';
import Grass from '../Grass';

export default {
  name: 'square',
  props: ['element'],
  components: {
    Tent,
    Tree,
    Grass,
  },
};
</script>

<style scoped>
.square {
  background-color: #CFF09E;
  border: 2px solid white;
}
</style>
