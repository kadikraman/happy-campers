<template>
  <div id="app">
    <div class="header">
      <div class="tent"><tent /></div>
      <div class="headerText">
        <div class="title">Happy Campers</div>
        <div class="subtext">a logic puzzle matching up campers and trees.</div>
      </div>
    </div>
    <game />
    <instructions />
  </div>
</template>

<script>
import Game from './components/Game';
import Tent from './components/Icons/Tent';
import Instructions from './components/Instructions';

export default {
  name: 'app',
  components: {
    Game,
    Instructions,
    Tent,
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  user-select: none;
  margin: 0 auto;
}

.tent {
  height: 30px;
  width: 30px;
  display: inline-block;
}

.headerText {
  display: inline-block;
  margin-left: 10px;
}

body {
  margin: 0;
}

.header {
  background-color: #8B572A;
  height: 50px;
  padding: 10px 0 0 20px;
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
  .tent {
    height: 50px;
    width: 50px;
    display: inline-block;
  }

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

  .headerText {
    margin-left: 20px;
  }
}
</style>
