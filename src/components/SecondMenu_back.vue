<script setup>
import {ref,inject } from 'vue';

const emits = defineEmits(['getMenuItem'])
//展开哪些二级目录
const opends=reactive(["1"])

//依赖注入方式取得来自父组件的值，以便自己的子组件el-menu等获取并响应
const secMenu = inject('sm')

//子菜单事件，调用父组件的方法，将子菜单的值传给tabs并用于打开新的Tabs标签页
function menuClick(arg) {
  emits('getMenuItem',arg)

}


</script>

<template>
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
        @click="menuClick(item)"
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
