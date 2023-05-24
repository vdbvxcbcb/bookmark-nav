<template>
  <div class="view">
    <template v-for="item in bookmark" :key="item.id">
      <template v-if="item.id !== '2409909323516'">
        <div class="title-block">
          <div class="title-content">
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
        <div class="gallery-view">
          <div class="collection-view">
            <div v-for="itemX in item.children" :key="itemX.id" class="item">
              <a :href="itemX.url" target="_blank" class="item-header">
                <div class="logo-wrapper"><img v-if="itemX.icon" :src="itemX.icon" class="logo"/> </div>
                <div class="description">{{ itemX.title }}</div>
              </a>
            </div> 
          </div> 
        </div>
      </template>
      <ClientOnly>
        <template v-if="item.id === '2409909323516' && unlock">
          <div class="title-block">
            <div class="title-content">
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
          <div class="gallery-view">
            <div class="collection-view">
              <div v-for="itemX in item.children" :key="itemX.id" class="item">
                <a :href="itemX.url" target="_blank" class="item-header">
                  <div class="logo-wrapper"><img v-if="itemX.icon" :src="itemX.icon" class="logo"/> </div>
                  <div class="description">{{ itemX.title }}</div>
                </a>
              </div> 
            </div> 
          </div>
        </template>
      </ClientOnly>
    </template>
  </div>
</template>

<script setup lang="ts">
interface IBookMarkNodes {
  id: string,
  parentId: string,
  title: string,
  url: string,
  icon: string,
  level: number
  children?: IBookMarkNodes[]
}

let props = defineProps({
  bookmark: {
    type: Array as PropType<IBookMarkNodes[]>,
    require: true
  }
});

// 控制台输入 document.cookie="req=我要八股文" 解锁
let unlock = ref(false);

const cookies = useCookie('req');

cookies.value = cookies.value || '';

if (cookies.value === '我要八股文') {
  unlock.value = true;
}
</script>

<style lang="scss" scoped>
.title-block, .gallery-view {
  background-color: #fff;
}
.view {
  height: 100%;
  padding: 0 96px; 
  overflow: hidden;
  position: relative;
  background-color: #f3f6f8;
}

@media screen and (max-width: 992px) {
  .view {
    padding: 0 24px; 
  }
}
@media screen and (max-width: 768px) {
  .view {
    padding: 0 24px; 
  }
}
@media screen and (max-width: 576px) {
  .view {
    padding: 0 24px; 
  }
}
.view {
  height: 100%;
}
.view::-webkit-scrollbar {
  width : 10px;  
  height: 10px;
  background: transparent;
}
.view::-webkit-scrollbar-thumb {
  background: #D3D1CB;
}
.view::-webkit-scrollbar-track {
  background   : #EDECE9
}
.view::-webkit-scrollbar-thumb:hover {
	background:#AEACA6;
}
.title-block {
  width: 100%;
  min-height: 40px;
}
.title-content {
  display: flex; 
  align-items: center; 
  color: rgb(55, 53, 47);
  font-size: 14px;
  width: 100%; 
  height: 40px; 
  box-shadow: rgb(233, 233, 231) 0px -1px 0px inset;
}
.title {
  padding: 0 0 0 8px;
}
.gallery-view {
  padding-left: 40px;
  padding-right: 60px;
  padding-bottom: 20px;
  min-width: calc(100% - 192px);
  margin: 0 0 20px 0;
}
@media screen and (max-width: 992px) {
  .gallery-view {
    padding-left: 20px;
    padding-right: 40px;
  }
}
@media screen and (max-width: 768px) {
  .gallery-view {
    padding-left: 20px;
    padding-right: 40px;
  }
}
@media screen and (max-width: 576px) {
  .gallery-view {
    padding-left: 20px;
    padding-right: 40px;
  }
}
.collection-view {
  display: grid; 
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); 
  gap: 32px; 
  padding-top: 16px; 
  padding-bottom: 4px;
}
.item {
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  border: 1px solid #e4ecf3;
  box-shadow: 1px 2px 3px #f2f6f8;
  &:hover {
    transform: translateY(-10px);
    transition: .5s;
  }
}

a {
  text-decoration: none;
  cursor: pointer;
}
.item-header {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.logo-wrapper{
  display: flex;
  align-items: center;
  height: 50px;
}
.logo {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.description {
  box-shadow: rgb(233, 233, 231) 0px 1px 0px inset;
  padding: 15px;
  font-size: 14px;
  color: rgb(107, 114, 128);
  width: 100%;
  height: 40px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; // 需要显示的行数  
  -webkit-box-orient: vertical;
}
@media screen and (max-width: 992px) {
  .description {
    height: 50%;
  }
}
@media screen and (max-width: 768px) {
  .description {
    height: 50%;
  }
}
@media screen and (max-width: 576px) {
  .description {
    height: 50%;
  }
}
</style>