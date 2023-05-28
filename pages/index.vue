<template>
  <div class="book-mark-app">
    <BookMarkGrid :bookmark="bookmark"></BookMarkGrid>
    <el-backtop v-if="!isMobile" :right="28" :bottom="100" />
    <el-backtop v-else class="mobile-back-up" :right="4" :bottom="20" />
  </div>
</template>

<script setup>
import bookmarkData from "../data/get.json";
const bookmark = reactive(bookmarkData);
const { isMobile } = useDevice();
</script>

<style lang="scss" scoped>
.book-mark-app :deep(.mobile-back-up) {
  width: 30px;
  height: 30px; 
}
</style>

