<script setup>
import { ref, reactive,provide, watch } from 'vue';
import MainMenu from './MainMenu.vue';
import SecondMenu from './SecondMenu.vue';
import SetupMenu from './SetupMenu.vue';
import Tabs from './Tabs.vue';
import Menus from '@/datas/data_menus.json';

//对菜单按sort值从大到小排序
let sortMenus=Menus.data.sort((a,b) => b.sort-a.sort)
//点击主菜单->显示二级菜单
let menuId=ref(1)
let sm1=ref(sortMenus.filter(value=>value.parentId===menuId.value))
let editableTabsValue=ref(2)
//tabs标签初始设置区
let tabs=ref([
  {"id":2,"title":"办公","icon": "document", "parentId":0,"content":"Test","sort":99}
])
//二级菜单的显示与隐藏
let isShowSecondMenu=ref(true)

/*
 *组件间传值，依赖注入
 */
//向二级目录组件SecondMenu传值
provide('sm', sm1)
provide('sortMenus',sortMenus)
//向tabs传值，用于打开新的tab-pane
provide('tabs',tabs)
provide('editableTabsValue',editableTabsValue)

//供MinaMenu.vue调用，通过主菜单id获取二级菜单列表,
//单击激活的一级菜单，隐藏二级菜单目录，否则显示二级菜单目录
//单击非激活的一级菜单，显示二级菜单目录
function getSecondMenu(arg) {
  if (menuId.value===arg){
     isShowSecondMenu.value = !isShowSecondMenu.value
  }else{
    menuId.value=arg
    sm1.value =sortMenus.filter(value=>value.parentId===arg)
    // console.log(sm1)
    if (isShowSecondMenu.value===false){
       isShowSecondMenu.value = !isShowSecondMenu.value
    }
  }
}

//二级菜单返回具体item供tabs使用
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
</script>

<template>
  <div class="common-layout">

     <el-container>
      <el-header>
        <div class="el-header-left" >交通运输综合服务（模拟）平台</div>
        <div class="el-header-right"></div>
      </el-header>
      <el-container>
        <el-aside :class="{active:isShowSecondMenu}">
          <div class="aside-left">
            <el-scrollbar>
              <MainMenu @getSecondMenu="getSecondMenu" />
            </el-scrollbar>
              <SetupMenu />
            
          </div>
          <div class="aside-right" :class="{active:isShowSecondMenu}" v-show="isShowSecondMenu">
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
.el-aside.active{
  display: flex;
  width: 250px;
  /*有<el-header>时使用*/
  height: calc(100vh - 60px);
  /* height: 100vh; */
}
.el-aside{ 
  display: flex;
  width: 65px;
  /*有<el-header>时使用*/
  height: calc(100vh - 60px);
  /* height: 100vh; */
}

.aside-left{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65px;
}

.aside-right.active{
  width: 180px;
}
</style>
