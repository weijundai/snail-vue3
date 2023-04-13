<script setup></script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>UIMS</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="aside-left">hh</div>
          <div class="aside-right">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <i-ep-List />
                  <span>主面板</span>
                </template>
                <el-menu-item-group title="我的工作组">
                  <el-menu-item index="1-1">我的待办</el-menu-item>
                  <el-menu-item index="1-2">我的已办</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <i-ep-menu />
                <span>办公集群</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>
        <el-main>
          <!-- <el-scrollbar
            style="padding: 20px; box-sizing: border-box; background: #fff"
          >
            <router-view v-slot="{ Component }">
              <transition name="el-zoom-in-top" mode="out-in">
                <component :key="routerAlive" :is="Component" />
              </transition>
            </router-view>
          </el-scrollbar> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  background-color: #409eff;
}
.el-container {
  /* height: calc(100vh - 60px); */
  height: 100vh;
}
.el-aside {
  display: flex;
  width: 250px;
}
.aside-left {
  width: 50px;
  background-color: #464545;
  height: calc(100vh - 60px);
}
.el-menu-vertical-demo {
  height: calc(100vh - 60px);
}
</style>
