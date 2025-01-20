<script setup></script>

<template>
  <div class="counter-game">
    <span class="number">0</span>
    <div class="button-group">
      <button>-</button>
      <button>+</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.number {
  font-size: 5rem;
  font-weight: bold;
  color: white;
  opacity: 0.9;
  transition: all 0.3s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.number:hover {
  transform: scale(1.1);
  color: rgb(219, 234, 254);
}

.button-group {
  display: flex;
  gap: 1rem;
}

.clue {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-weight: bold;
  cursor: pointer;
}

/* Estilos botones */
button {
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  border-radius: 1rem;
  background-color: rgba(119, 170, 251, 0.914);
  color: white;
  border: none;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
}

button:hover:not(:disabled) {
  background-color: rgba(26, 77, 188, 0.7);
}
</style>
