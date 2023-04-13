<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const radio1 = ref('mainOne');
// const iclick1 = () => {
//   maincolor.value = '#fff';
//   router.push({
//     name: 'homeone',
//   });
// };
// const iclick2 = () => {
//   router.push({
//     name: 'homepost',
//   });

//   console.log('iclick2');
// };
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="aside-left">
          <el-radio-group v-model="radio1" size="small">
            <el-radio-button label="mainOne">
              <el-icon size="25px"><i-ep-OfficeBuilding /></el-icon>
              主页
            </el-radio-button>
            <el-radio-button label="mainTwo">
              <el-icon size="25px"><i-ep-Search /></el-icon>
              搜索
            </el-radio-button>
            <el-radio-button label="mainThree">
              <el-icon size="25px"><i-ep-Discount /></el-icon>
              设置
            </el-radio-button>
            <el-radio-button label="mainFore">
              <el-icon size="25px"><i-ep-OfficeBuilding /></el-icon>
              事务
            </el-radio-button>
          </el-radio-group>
        </div>
        <div class="aside-right">
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
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

:deep(.el-radio-button__inner) {
  background-color: #2c2c2c;
  color: #fff;
  border: 0 !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 12px 10px 12px;
}

:deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
  background-color: #fff;
  color: #000;
}
/* :deep(.el-radio-button__orig-radio:checked + .el-radio-button__inner ){
      color: #fff;
      background-color: #00f;
      border-color: #00f;  
  } */

.aside-right {
  width: 200px;
}

.el-menu-vertical-demo {
  height: calc(100vh - 60px);
}
</style>
