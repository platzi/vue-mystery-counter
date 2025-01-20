<script setup>
import GameCounter from '@/components/GameCounter.vue'

const MIN_NUMBER = 0
const MAX_NUMBER = 50
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="wrapper__content">
        <h1 class="title">Guess the number! 🎉</h1>
        <div>
          <GameCounter :min-number="MIN_NUMBER" :max-number="MAX_NUMBER" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #60fab2, #3b82f6, #2563eb);
}

.title {
  text-align: center;
  font-size: 3rem;
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.wrapper__content {
  width: 100%;
  max-width: 34rem;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(16px);
  background: linear-gradient(
    to bottom right,
    rgba(59, 130, 246, 0.3),
    rgba(37, 99, 235, 0.3),
    rgba(29, 78, 216, 0.3)
  );
  border-radius: 1.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(191, 219, 254, 0.5);
}
</style>
