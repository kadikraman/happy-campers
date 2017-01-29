<template>
  <div id="app">
    <tent />
    <tree />
    <grass />
  </div>
</template>

<script>
import Tent from './components/Tent';
import Tree from './components/Tree';
import Grass from './components/Grass';

export default {
  name: 'app',
  components: {
    Tent,
    Tree,
    Grass,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
