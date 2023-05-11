<script setup>
import { ref } from 'vue'
import {  useRouter } from 'vue-router'

const isCollapse = ref(true)
const router = useRouter();
function exit(){
 router.push({
          name: 'login',
        });
}
</script>
<template>
    <el-menu
    default-active="1"
    class="el-menu-setup"
    :collapse="isCollapse"
  >
    
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Avatar /></el-icon>
        <span>Navigator One</span>
      </template>
        <el-menu-item index="1-1">修改资料</el-menu-item>
        <el-menu-item index="1-2">修改密码</el-menu-item>
        <el-menu-item index="1-3" @click="exit()">退   出</el-menu-item>
    </el-sub-menu>   
  </el-menu>
</template>

<style scoped>
.el-menu-setup {
    background-color: #e9e9eb;
}
.el-sub-menu .el-icon {
    font-size: 23px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

