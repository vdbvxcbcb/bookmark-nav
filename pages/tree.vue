<template>
  <div>
    <BookMarkTree :bookmarks="bookmarks" />
  </div>
</template>

<script setup>
import bookmarkData from "../data/bookmark.json";
const bookmarks = reactive(bookmarkData);
</script>
