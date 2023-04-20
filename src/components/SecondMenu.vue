<script setup>
import {ref,inject } from 'vue';
const opends=reactive(["1"])
// const props = defineProps(['secMenu']);
// let secMenu=ref(props.secMenu)
// console.log("props.secMenu: "+props.secMenu)
// console.log("secMenu: "+secMenu)
// setTimeout(()=>{
//   watch(secMenu,(newval,oldval)=>{
//       secMenu=newval
//         console.log(newval) 
//         })
//   },100)
//依赖注入方式取得值
const secMenu = inject('sm')



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
  <el-menu class="secondmenu" :default-openeds="opends" :re="secMenu">
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
