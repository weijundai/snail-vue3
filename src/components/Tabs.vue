<script setup>
import { ref, reactive } from 'vue';

let tabIndex = 1;
const editableTabsValue = ref('1');
const editableTabs = ref([
  {
    title: '我的主页',
    name: '1',
    content: 'HelloWorld',
  },
  {
    title: '我的设置',
    name: '我的设置',
    content: 'Post',
  },
]);

const removeTab = (targetName) => {
  console.log(targetName);
  const tabs = editableTabs.value;
  let activeName = editableTabsValue.value;
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }
  editableTabsValue.value = activeName;
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
};
</script>

<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      <keep-alive>
        <component :is="item.content" />
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped></style>
