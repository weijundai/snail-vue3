<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const coll = true;
//主菜单(全局导入Icon，才能在for循环中正常使用Icon
//因为mainMenu中的icon是一个字符串，并不是一个组件，所以component动态组件无法识别)
let mainMenu = [
  { id: 1, title: '主菜单', name:"mainone",icon: 'Location', path: '/home/secmenu/mainone' },
  { id: 2, title: '执法', name:"maintwo",icon: 'document', path: '/home/secmenu/maintwo' },
  { id: 3, title: '管理', name:"mainthree",icon: 'discount', path: '/home/secmenu/mainthree' },
  { id: 4, title: '设置1', name:"mainfour",icon: 'ChatLineRound', path: '/home/secmenu/mainfour' },
  { id: 5, title: '设置2', name:"mainfive",icon: 'setting', path: '/home/secmenu/mainfive' },
];

const menuClick = (args) => {
  router.push(args);
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
      :index="item.title"
      @click="menuClick(item.path)"
    >
      <component :is="item.icon"></component>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped></style>
