<script setup></script>

<template>
  <el-menu default-active="1-1" class="el-menu-vertical-demo2">
    <el-sub-menu index="1">
      <template #title>
        <i-ep-List />
        <span>主面板</span>
      </template>
      <el-menu-item index="1-1">我的待办</el-menu-item>
      <el-menu-item index="1-2">我的已办</el-menu-item>
      <el-menu-item index="1-3">item three</el-menu-item>
      <el-menu-item index="1-4">item one</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <i-ep-List />
        <span>主面板</span>
      </template>
      <el-menu-item-group title="我的工作组">
        <el-menu-item index="2-1">我的待办</el-menu-item>
        <el-menu-item index="2-2">我的已办</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>
        <i-ep-List />
        <span>主面板</span>
      </template>
      <el-menu-item-group title="我的工作组">
        <el-menu-item index="3-1">我的待办</el-menu-item>
        <el-menu-item index="3-2">我的已办</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="3-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="3-4">
        <template #title>item four</template>
        <el-menu-item index="3-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo2 {
  height: 100vh;
}
</style>
