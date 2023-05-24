<template>
  <el-tree :data="treeData" :props="treeProps">
    <template #default="{ node, data }">
      <span class="custom-tree-node">
        <a class="link" :href="data.url" target="_blank">
          <img :src="data.icon" v-if="data.icon" />
          {{ data.title }}
        </a>
      </span>
      </template>
  </el-tree>
</template>

<script setup>
let props = defineProps({
   bookmarks: {
     type: Array,
     required: true,
   },
 });
const buildTree = (bookmarkNodes) => {
  return bookmarkNodes.map((node) => {
    const treeNode = {
      id: node.id,
      parentId: node.parentId,
      title: node.title,
      icon: node.icon,
      url: node.url,
      level: node.level,
      description: node.description
    };
    if (node.children && node.children.length > 0) {
      treeNode.children = buildTree(node.children);
    }
    return treeNode;
  });
} 
const treeData = computed(() => buildTree(props.bookmarks));
const treeProps = computed(() => ({ label: 'title', children: 'children'}));
</script>

<style lang="scss" scoped>
  .link {
    text-decoration: none;
    margin-left: 8px;
    &:hover {
      color: #409eff;
    }
  }
</style>