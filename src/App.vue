<template>
  <div id="app">
    <div class="header">
      <div class="title">Happy Campers</div>
      <div class="subtext">a logic puzzle matching up campers and trees.</div>
    </div>
    <game />
    <instructions />
  </div>
</template>

<script>
import Game from './components/Game';
import Instructions from './components/Instructions';

export default {
  name: 'app',
  components: {
    Game,
    Instructions,
  },
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
