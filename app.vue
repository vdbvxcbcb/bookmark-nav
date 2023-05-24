<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 100%;
  padding: 0 96px; 
  overflow: hidden;
  position: relative;
  background-color: #f3f6f8;
}
@media screen and (max-width: 1200px) {
  .app {
    padding: 0 96px;
  }
}
@media screen and (max-width: 992px) {
  .app {
    padding: 0 24px; 
  }
}
@media screen and (max-width: 768px) {
  .app {
    padding: 0 24px; 
  }
}
@media screen and (max-width: 576px) {
  .app {
    padding: 0 24px; 
  }
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
