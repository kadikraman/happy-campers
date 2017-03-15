<template>
  <div class="container">
    <div class="instructions">
      <div class="title">Instructions</div>
      <div v-for="item in items">
        <div class="sectionTitle">{{item.title}}</div>
        <p class="instruction">{{item.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'instructions',
  data: () => ({
    items: [
      {
        title: 'Scene',
        description: 'Before you is a map of a campsite with locations of all the trees clearly marked.',
      },
      {
        title: 'Goal',
        description: 'Place the tents next to the trees such that each tree is adjacant to a tent.',
      },
      {
        title: 'Restrictions',
        description: 'Since campers love their privacy, no tents can be next to each other, not even diagonally.',
      },
      {
        title: 'Help',
        description: 'The numbers on the left and top of the grid show how many tents are in each of the rows and columns.',
      },
      {
        title: 'Winning Condition',
        description: 'The game is won when all the tents have been placed in the correct position and all the empty spaces have been filled with grass tiles.',
      },
    ],
  }),
};
</script>

<style scoped>
.container {
  background-color: rgba(233, 233, 233, 0.3);
}

.instructions {
  padding: 30px 10px;
  max-width: 800px;
  margin: 0 auto;
}

.instruction {
  color: #919998;
}

.sectionTitle {
  font-size: 18px;
  font-weight: bold;
  color: #F6A623;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #8B572A;
  padding-bottom: 20px;
}

@media (min-width: 768px) {
  .title {
    font-size: 36px;
  }
}
</style>
