<script setup>
import {ref,inject } from 'vue';


const emits = defineEmits(['getMenuItem'])
//展开哪些二级目录
const opends=reactive(["1"])

//依赖注入方式取得来自父组件的值，以便自己的子组件el-menu等获取并响应
const secMenu = inject('sm')
const sortMenus=inject('sortMenus')

//子菜单事件，调用父组件的方法，将子菜单的值传给tabs并用于打开新的Tabs标签页
function menuClick(arg) {
  emits('getMenuItem',arg)

}


</script>

<template>
  <el-menu class="secondmenu" :default-openeds="opends">
    <el-sub-menu  v-for="(item,index) in secMenu" :index="item.id.toString()">
      <template #title>
        <component :is="item.icon" class="comclass"></component>
        <span>{{item.title}}</span>
      </template>
      <el-menu-item
        v-for="(item1, index1) in sortMenus.filter(value=>value.parentId===item.id)"
        :key="item1.id"
        :index="item1.id.toString()"
        @click="menuClick(item1)"
      >
        {{ item1.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.secondmenu {
  height: 100vh;
}
.comclass{
  width:20px;
  height:20px;
  padding-right:10px;
}
</style>
