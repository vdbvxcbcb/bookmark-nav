<template>
  <div class="book-mark-app">
    <BookMarkGrid :bookmark="bookmark"></BookMarkGrid>
  </div>
</template>

<script setup>
import bookmarkData from "../data/get.json";
const bookmark = reactive(bookmarkData);
</script>

