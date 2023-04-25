<script setup>
import { ref, reactive,inject } from 'vue';

let tabIndex = 1;
const editableTabsValue = inject("editableTabsValue")
const editableTabs = inject("tabs")

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
      v-for="(item,index) in editableTabs"
      :key="item.id"
      :label="item.title"
      :name="item.id"
      :closable="item.closable?false:true"
    >
      <keep-alive>
        <component :is="item.content" />
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped></style>
