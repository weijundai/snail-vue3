<script setup>
import { ref, reactive,provide } from 'vue';

import MainMenu from '@/components/MainMenu.vue';
import SecondMenu from '@/components/SecondMenu.vue';
import Tabs from '@/components/Tabs.vue';
import Menus from '@/data_menus.json';


//对菜单按sort值从大到小排序
let sortMenus=Menus.data.sort((a,b) => b.sort-a.sort)
//点击主菜单->显示二级菜单
let menuId=ref(1)
let sm1=ref(sortMenus.filter(value=>value.parentId===menuId.value))

function setName(arg) {
  menuId.value=arg
  sm1.value =sortMenus.filter(value=>value.parentId===arg)
  // console.log(sm1)
}

//二级菜单返回具体item供tabs使用
let editableTabsValue=ref(2)
function getMenuItem(arg) {
  //首先得判断arg.name在tabs中是否存在
  //如果已经存在，则不导入，仅做激活,如果不存在则导入，并激活
  if (tabs.value.includes(arg)){
    editableTabsValue.value=arg.id
  }else {
    tabs.value.push(arg)
    editableTabsValue.value=arg.id
  }
  console.log(typeof arg.id)
}
//tabs标签设置区
let tabs=ref([
  {"id":2,"title":"办公","icon": "document", "parentId":0,"content":"HelloWorld","sort":99}
])
/*
 *组件间传值，依赖注入
 */
//向二级目录组件SecondMenu传值
provide('sm', sm1)
provide('sortMenus',sortMenus)
//向tabs传值，用于打开新的tab-pane
provide('tabs',tabs)
provide('editableTabsValue',editableTabsValue)
</script>

<template>
  <div class="common-layout">

     <el-container>
      <el-header>
        <div class="el-header-left" >交通运输综合服务（模拟）平台</div>
        <div class="el-header-right">退 出</div>
      </el-header>
      <el-container>
        <el-aside>
          <div class="aside-left">
            <el-scrollbar>
              <MainMenu @setName="setName" />
            </el-scrollbar>
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
    </el-container>
  </div>
</template>

<style scoped>

.el-header{
  background-color:#409EFF;
  display: flex;
   justify-content: space-between;
  align-items: center;
}
.el-header-left{
  color: #fff;
  font:30px bolder;

}

.el-header-right{
  color:#fff;
  font:20px bolder;
}
.el-aside {
  display: flex;
  width: 250px;
  /*有<el-header>时使用*/
  height: calc(100vh - 60px);
  /* height: 100vh; */
}

.aside-left {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65px;
}

.aside-right {
  width: 180px;
}
</style>
