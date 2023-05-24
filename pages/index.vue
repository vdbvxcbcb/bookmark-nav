<template>
  <div class="book-mark-app">
    <ClientOnly>
      <div class="bookmark-tree-link">
        <NuxtLink to="/tree" class="tree-link">
          <a class="bookmark-tree">书签栏</a>
        </NuxtLink>
      </div>
    </ClientOnly>
    <BookMarkGrid :bookmark="bookmark"></BookMarkGrid>
    <el-backtop v-if="!isMobile" :right="28" :bottom="100" />
    <el-backtop v-else class="mobile-back-up" :right="4" :bottom="20" />
  </div>
</template>

<script setup lang="ts">
import bookmarkData from "../data/partOfBookMark.json";
const bookmark = reactive(bookmarkData);
const { isMobile } = useDevice();
</script>

<style lang="scss" scoped>
.book-mark-app :deep(.mobile-back-up) {
  width: 30px;
  height: 30px; 
}
.bookmark-tree-link {
  padding: 0 96px; 
  background-color: #f3f6f8;
}
@media screen and (max-width: 992px) {
  .bookmark-tree-link  {
    padding: 0 24px; 
  }
}
@media screen and (max-width: 768px) {
  .bookmark-tree-link  {
    padding: 0 24px; 
  }
}
@media screen and (max-width: 576px) {
  .bookmark-tree-link  {
    padding: 0 24px; 
  }
}
.tree-link {
  text-decoration: none;
}
.bookmark-tree {
  display: block;
  color: #409eff;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  padding: 16px 0 16px 8px;
  background: #fff;
}

.bookmark-tree :deep(.el-link:hover::after) {
  display: none;
}
</style>

