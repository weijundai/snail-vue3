<script setup>
import { ref, reactive, inject } from 'vue';

let tabIndex = 1;
const editableTabsValue = inject('editableTabsValue');
const editableTabs = inject('tabs');

//刷新tab中的组件（实现中......)
// const isRefresh=ref('false')
// const refresh=()=>{
//   isRefresh.value=!isRefresh.value

// }

// 每次只显示一个右键
const dropDown=ref();
const oneRightKey=(ev,name)=>{
  if (!ev) return
    dropDown.value.forEach((item)=>{
      if(item.id===name) return
      item.handleClose()
    })

}
//关闭所有tab,保留初始tab
const removeAllTabs = () => {
  editableTabs.value = [{"id":2,"title":"办公","icon": "document", "parentId":0,"content":"Test","sort":99}];
  editableTabsValue.value=2
};
/*
 * tabs删除方法
 */
const removeTab = (targetId) => {
  console.log(targetId);
  const tabs = editableTabs.value;
  let activeName = editableTabsValue.value;
  //删除激活的选项卡时，选择新的激活选项卡
  if (activeName === targetId) {
    tabs.forEach((tab, index) => {
      if (tab.id === targetId) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.id;
        }
      }
    });
  }
  //激活新的选项卡
  editableTabsValue.value = activeName;
  //更新选项卡列表
  //filter函数用于对数组过滤。 回调为必须，数组中的每个元素都会执行这个函数。且如果返回值为 true，则该元素被保留；
  //函数的第一个参数 tab 也为必须，代表当前元素的值。
  editableTabs.value = tabs.filter((tab) => tab.id !== targetId);
};
</script>

<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="(item, index) in editableTabs"
      :key="item.id"
      :label="item.title"
      :name="item.id"
      :closable="item.closable ? false : true"
    >
      <template #label>
        <el-dropdown trigger="contextmenu" ref="dropDown" :id="item.id.toString()" @visible-change="oneRightKey($event,item.id.toString())">
          {{ item.title }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item> <el-icon><Aim /></el-icon>关闭其它 </el-dropdown-item>
              <el-dropdown-item @click="removeAllTabs()"><el-icon><FolderDelete /></el-icon>
                关闭全部
              </el-dropdown-item>
              <el-dropdown-item><el-icon><Refresh /></el-icon>
                刷 新
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <keep-alive>
        <component :is="item.content"/>
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped></style>
