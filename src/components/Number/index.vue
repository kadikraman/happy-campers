<template>
  <div
    class="number"
    v-bind:class="{ valid: text.numSelected === text.numShouldBe, invalid: text.numSelected > text.numShouldBe }"
  >{{text.numShouldBe}}</div>
</template>

<script>
export default {
  name: 'number',
  props: ['text'],
};
</script>

<style scoped>
.number {
  height: 30px;
  width: 30px;
  display: block;
  border: 2px solid white;
  text-align: center;
  line-height: 30px;
  color: #919998;
  font-size: 18px;
}

.invalid {
  color: #E64D66;
}

.valid {
  color: #5ED367;
}

@media (min-width: 768px) {
  .number {
    height: 35px;
    width: 35px;
    line-height: 35px;
  }
}
</style>
