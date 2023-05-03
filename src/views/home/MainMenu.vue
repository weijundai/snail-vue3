<script setup>
import { ref } from 'vue';

const emits = defineEmits(['setName'])
const activeIndex=ref("1")
const coll = true;
//全局导入Icon，才能在for循环中正常使用Icon
//因为mainMenus中的icon是一个字符串，并不是一个组件，所以component动态组件无法识别
const mainMenu=inject('sortMenus').filter(value=>value.parentId===0)

const menuClick = (arg) => {
 emits('setName',arg)
};
</script>

<template>
  <el-menu class="mainmenu" :collapse="coll" :default-active="activeIndex"> 
    <el-menu-item
      v-for="(item, index) in mainMenu"
      :key="item.id"
      :index="item.id.toString()"
      @click="menuClick(item.id)"
    >
      <component :is="item.icon"></component>

     
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </el-menu>

</template>

<style scoped>
.mainmenu {
  /*有<el-header>时使用*/
  height: calc(100vh - 173px);
  /* height: 100vh; */
}

:deep(.el-menu-item.is-active) {
  background-color:#e3f1ff;
}
</style>
