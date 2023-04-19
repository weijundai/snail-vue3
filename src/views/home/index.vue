<script setup>
import { ref, reactive } from 'vue';

import MainMenu from '@/components/MainMenu.vue';
import SecondMenu from '@/components/SecondMenu.vue';
import Tabs from '@/components/Tabs.vue';
import Menu from '@/data';

// let name=ref("one")
let sm1 = reactive(Menu.one);
const opends=reactive(["1"])
function setName(arg) {
  sm1 = Menu[arg];
  
}

//子菜单事件
function menuClick(arg) {
  console.log('ok');
}


const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="aside-left">
          <MainMenu :setName="setName" />
        </div>
        <div class="aside-right">
          <el-scrollbar>
            <el-menu class="secondmenu" @open="handleOpen" @close="handleClose" :default-openeds="opends">
             
                <el-sub-menu
                  v-for="(item, index) in sm1"
                  :key="item.id"
                  :index="item.title"
                  @click="menuClick(item.name)"
                >
                   <template #title>
                  <i-ep-List />
                  <span>{{ item.title }}</span>
                </template>
                </el-sub-menu>
             

            </el-menu>
            
          </el-scrollbar>
        </div>
      </el-aside>
      <el-main>
        <Tabs />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-container {
  /*有<el-header>时使用*/
  /* height: calc(100vh - 60px); */
  height: 100vh;
}
.el-aside {
  display: flex;
  width: 250px;
  /*有<el-header>时使用*/
  /* height: calc(100vh - 60px); */
  height: 100vh;
}

.aside-left {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 47px;
  background-color: #2c2c2c;
}
.secondmenu {
  height: 100vh;
}

.aside-right {
  width: 200px;
}

.el-menu-vertical-demo {
  height: calc(100vh - 60px);
}
</style>
