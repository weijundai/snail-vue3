<script setup>
import { ref, reactive,provide } from 'vue';

import MainMenu from '@/components/MainMenu.vue';
import SecondMenu from '@/components/SecondMenu.vue';
import Tabs from '@/components/Tabs.vue';
import Menu from '@/data';
// import mock from '@/mock/mock'

//点击主菜单->显示二级菜单
let name=ref("one")
let sm1 = ref(Menu[name.value]);

function setName(arg) {
  name.value=arg
  sm1.value = Menu[name.value];
  // console.log(sm1)
}

//二级菜单返回具体item供tabs使用
let editableTabsValue=ref("1")
function getMenuItem(arg) {
  //首先得判断arg.name在tabs中是否存在
  //如果已经存在，则不导入，仅做激活,如果不存在则导入，并激活
  if (tabs.value.includes(arg)){
    editableTabsValue.value=arg.name
  }else {
    tabs.value.push(arg)
    editableTabsValue.value=arg.name
  }
  
}
//tabs标签设置区
let tabs=ref([
  {
    title: '我的主页',
    name: '1',
    content: 'HelloWorld',
    closable:'false'
  },
])


/*
 *组件间传值，依赖注入设置区
 */
//向二级目录组件SecondMenu传值
provide('sm', sm1)
//向tabs传值，用于打开新的tab-pane
provide('tabs',tabs)
provide('editableTabsValue',editableTabsValue)
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="aside-left">
          <MainMenu @setName="setName" />
        </div>
        <div class="aside-right">
          <el-scrollbar>

            <SecondMenu @getMenuItem="getMenuItem" />
            
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
