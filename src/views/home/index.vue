<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MainMenu from '@/components/MainMenu.vue'

const router = useRouter();

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
          <MainMenu />
         
        </div>
        <div class="aside-right">
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </div>
      </el-aside>
      <el-main>
       Main
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
