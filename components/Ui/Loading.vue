<script setup lang="ts"></script>

<template>
  <div class="loader-box">
    <div class="loader"></div>
    <div class="loader-text">Loading...</div>
  </div>
</template>
<style type="text/css" media="screen">
.loader-box {
  padding: 1rem 2rem;
}
.loader-text {
  margin-top: 10px;
  padding-top: 10px;
  color: lightgrey;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  animation-name: fading;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.description-box {
  margin-top: 10px;
  padding: 10px 5px 10px 5px;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  height: 35px;
  line-height: 35px;
  width: 500px;
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fading {
  0%,
  100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.95;
  }
}
</style>
