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
  height: 60px;
  padding: 20px 0 0 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
}

.subtext {
  font-size: 12px;
  color: #FFFFFF;
}

@media (min-width: 768px) {
  .header {
    background-color: #8B572A;
    height: 70px;
    padding: 10px 0 0 20px;
  }

  .title {
    font-size: 36px;
  }

  .subtext {
    font-size: 16px;
  }
}
</style>
