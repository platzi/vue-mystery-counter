<script setup>
const isActive = false
</script>

<template>
  <button>menos</button>
  <span class="counter" :class="{ 'counter--active': isActive }" style="font-size: 4rem"
    >contador: <span>0</span></span
  >
  <button>mas</button>
</template>

<style scoped lang="scss">
.counter {
  font-weight: bold;
  font-size: 2rem;

  & > span {
    color: green;
  }
}

.counter--active {
  color: aqua;
}

button {
  background: red;
}
</style>
