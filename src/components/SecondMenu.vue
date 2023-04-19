<script setup>
import {reactive} from 'vue';

const props = defineProps(['secMenu']);
let secMenu=reactive(props.secMenu)

nextTick(()=>{
  secMenu=props.secMenu
})
// watch(props,(newVal) => {
//   secMenu=newVal
// })
//子菜单事件
function menuClick(arg) {

  console.log(secMenu);
}

function handl(){
  console.log(secMenu)
}
</script>

<template>
<!-- <el-button type="primary" @click=handl>second</el-button> -->
  <el-menu class="secondmenu">
    <el-sub-menu index="1">
      <template #title>
        <i-ep-List />
        <span>主面板</span>
      </template>
      <el-menu-item
        v-for="(item, index) in secMenu"
        :key="item.id"
        :index="item.title"
        @click="menuClick(item.name)"
      >
        {{ item.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.secondmenu {
  height: 100vh;
}
</style>
