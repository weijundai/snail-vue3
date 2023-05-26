<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);


</script>

<template>
<h1>test</h1>
  <h1>{{ msg }}</h1>


 <el-button type="primary" @click="count++">count is {{ count }}</el-button>
</template>

<style scoped></style>
