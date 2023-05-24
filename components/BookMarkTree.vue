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

<script setup lang="ts">
interface IBookMarkNodes {
  id: string,
  parentId: string,
  title: string,
  url?: string,
  icon: string,
  level: number
  children?: IBookMarkNodes[]
}

type treeNode = {
  [key: string]: any
}

const props = defineProps({
   bookmarks: {
     type: Array as PropType<IBookMarkNodes[]>,
     required: true,
   },
 });

const buildTree  = (bookmarkNodes: IBookMarkNodes[])  => {
  return bookmarkNodes.map((node) => {
    const treeNode: treeNode = {
      id: node.id,
      parentId: node.parentId,
      title: node.title,
      icon: node.icon,
      url: node.url,
      level: node.level
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

<style>
  .app {
    padding: 0;
  }
</style>