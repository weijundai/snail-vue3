<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const coll=true;
//主菜单(全局导入Icon，才能在for循环中正常使用Icon)
let mainMenu = reactive([
  { id: 1, title: '主菜单', icon: 'Location', path: '/home' },
  { id: 2, title: '执法', icon: 'document', path: '/home/post' },
  { id: 3, title: '管理', icon: 'discount', path: '/home' },
  { id: 4, title: '设置', icon: 'setting', path: '/home/post' },
]);

const menuClick = (args) => {
  router.push(args)
};
</script>

<template>
  <el-menu
    
    class="el-menu-vertical-demo"
    :collapse=coll
    background-color="#2c2c2c"
    text-color="#fff"
  >
    <el-menu-item
      v-for="(item, index) in mainMenu"
      :key="item.id"
      :index="item.title"
      @click=menuClick(item.path)
    >
      <component :is="item.icon"></component>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo {
}
</style>
