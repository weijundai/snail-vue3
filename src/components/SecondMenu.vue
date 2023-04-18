<script setup>
import {reactive } from 'vue'
const props = defineProps(['id'])

const secOne=reactive([
  { id: 1, title: '我的办件',name:'mydaiban',icon: 'Location', path: '/home',
    children:[
      {id:11, title:'我的待办',name:'mydaiban',path:'/home/tabs/daiban'},
    ]
  },
  { id: 2, title: '我的已办', name:'mydaiban',icon: 'document', path: '/home/post' },
  { id: 3, title: '我的文件', name:'mydaiban',icon: 'discount', path: '/home' },
  { id: 4, title: '公文流转', name:'mydaiban',icon: 'ChatLineRound', path: '/home/post' },
]);

</script>

<template>

<el-menu  class="secondmenu" default-openeds="1">
  <el-sub-menu index="1">
   <template #title>
        <i-ep-List />
        <span>主面板</span>
      </template>
    <el-menu-item
          v-for="(item, index) in secOne"
          :key="item.id"
          :index="item.title"
        >
      
         {{item.title}}
    </el-menu-item>
  </el-sub-menu>
</el-menu>

</template>

<style scoped>
.secondmenu{
  height: 100vh;
}
</style>