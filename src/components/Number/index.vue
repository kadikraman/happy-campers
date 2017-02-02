<template>
  <div class="number">{{text}}</div>
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
}
</style>
