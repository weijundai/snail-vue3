<script setup>
import { ref} from 'vue';

import Menus from '@/data_menus.json'
const emits = defineEmits(['setName'])

const coll = true;
//全局导入Icon，才能在for循环中正常使用Icon
//因为mainMenus中的icon是一个字符串，并不是一个组件，所以component动态组件无法识别
const mainMenu=inject('sortMenus').filter(value=>value.parentId===0)

const menuClick = (arg) => {
 emits('setName',arg)
};
</script>

<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="coll"
    background-color="#2c2c2c"
    text-color="#fff"
  > 
    <el-menu-item
      v-for="(item, index) in mainMenu"
      :key="item.id"
      :index="item.id.toString()"
      @click="menuClick(item.id)"
    >
      <component :is="item.icon">{{item.title}}</component>
     
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </el-menu>

</template>

<style scoped></style>
