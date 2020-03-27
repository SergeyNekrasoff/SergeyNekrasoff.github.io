<template>
  <div class="animation">
    <div class="sk-spinner sk-spinner-pulse"></div>
  </div>
</template>

<style scoped>
.animation {
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, .7);
  z-index: 100;
}

.sk-spinner-pulse {
  width: 50px;
  height: 50px;
  margin: auto;
  background-color: #0096c8;
  border-radius: 100%;
  animation: sk-spinner-pulse 1.0s infinite ease-in-out;
}

@keyframes sk-spinner-pulse {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>