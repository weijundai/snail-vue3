<script setup>
import {mainone} from '@/data'
const props = defineProps(['name'])

const secondMenu=props.name

</script>

<template>

<el-menu  class="secondmenu" >
  <el-sub-menu index="1">
   <template #title>
        <i-ep-List />
        <span>主面板</span>
      </template>
    <el-menu-item
          v-for="(item, index) in mainone"
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