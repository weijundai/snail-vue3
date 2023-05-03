<!-- 在 -->
<script setup>
import { ref, reactive } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import { useRoute, useRouter } from 'vue-router';

const ruleForm = reactive({
  name: '',
  password: '',
});

const ruleFormRef = ref();
const router = useRouter();

//验证规则
const rules = reactive({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 18, message: '长度3-18个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 18, message: '长度3-18字符', trigger: 'blur' },
  ],
});
//确认
const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // axios.post('/admin/login', {
      //   userName: ruleForm.username || '',
      //   passwordMd5: md5(ruleForm.password)
      // }).then(res => {
      //   localSet('token', res.data)
      //   window.location.href = '/home'
      // })
      //下列代码仅为测试（start)
      if (ruleForm.name === '111' && ruleForm.password === '111') {
        router.push({
          name: 'home',
        });
      } else {
        console.log('用户名或密码错误');
      }
      //测试代码(end)
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>

<template>
  <div class="login-box">
    <div class="login-box-img"></div>
    <div class="login-box-contain">
      <div class="head">UIMS Login</div>
      <div class="contain">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          hide-required-asterisk
          size="large"
        >
          <el-form-item prop="name">
            <el-input
              class="login-input"
              :prefix-icon="User"
              v-model="ruleForm.name"
              placeholder="用户名"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              class="login-input"
              :prefix-icon="Lock"
              type="password"
              v-model="ruleForm.password"
              placeholder="密码"
            />
          </el-form-item>

          <el-form-item>
            <el-button
              class="login-button"
              round
              auto-insert-space
              type="primary"
              @click="submitForm(ruleFormRef)"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  /* 更换页面背景 */
  /* background-image: url("@/assets/R-C.jpeg"); */
  background-image: url('@/assets/b1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.head {
  font-size: 45px;
  color: aliceblue;
  padding: 0 15px 0 15px;
}
.contain {
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 0 15px 0 15px;
}

:deep(.el-input__wrapper) {
  /* background-color: rgb(255, 255, 255,0.8); */
  border-radius: 95px;
  border: none;
  outline: none;
  box-shadow: 0 0 0 0px;
  color: #f70505;
}

.login-button {
  border: none;
  font-size: 15px;
  height: 45px;
  outline: none;
  width: 100%;
  /* background: rgba(255,255,255,0.7); */
  cursor: pointer;
  transition: 0.3s;
}
.login-button:hover {
  box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
}
</style>
