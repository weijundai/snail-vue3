<script setup>
import { ref, reactive,provide } from 'vue';

import MainMenu from '@/components/MainMenu.vue';
import SecondMenu from '@/components/SecondMenu.vue';
import Tabs from '@/components/Tabs.vue';
import Menus from '@/data_menus.json';


//对菜单按sort值从小到大排序
// let sortMenus=Menus.data.toSorted((a,b) => a.sort - b.sort)
//点击主菜单->显示二级菜单
let menuId=ref(1)
let sm1=ref(Menus.data.filter(value=>value.parentId===menuId.value))

function setName(arg) {
  menuId.value=arg
  sm1.value =Menus.data.filter(value=>value.parentId===arg)
  // console.log(sm1)
}

//二级菜单返回具体item供tabs使用
let editableTabsValue=ref("1")
function getMenuItem(arg) {
  //首先得判断arg.name在tabs中是否存在
  //如果已经存在，则不导入，仅做激活,如果不存在则导入，并激活
  if (tabs.value.includes(arg)){
    editableTabsValue.value=arg.id
  }else {
    tabs.value.push(arg)
    editableTabsValue.value=arg.id
  }
  
}
//tabs标签设置区
let tabs=ref([
  {"id":2,"title":"办公","icon": "document", "parentId":0,"content":"HelloWorld","sort":99}
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
