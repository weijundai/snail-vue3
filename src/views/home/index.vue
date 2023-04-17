<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MainMenu from '@/components/MainMenu.vue';

const router = useRouter();

let tabIndex = 1;
const editableTabsValue = ref('1');
const editableTabs = ref([
  {
    title: '我的主页',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: '我的设置',
    name: '2',
    content: 'Tab 2 content',
  },
]);

const removeTab = (targetName) => {
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
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="aside-left">
          <MainMenu />
        </div>
        <div class="aside-right">
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </div>
      </el-aside>
      <el-main>
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
            {{ item.content }}
          </el-tab-pane>
        </el-tabs>
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

.aside-right {
  width: 200px;
}

.el-menu-vertical-demo {
  height: calc(100vh - 60px);
}
</style>
