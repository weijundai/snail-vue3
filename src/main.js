import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import HelloWorld from '@/components/HelloWorld.vue';
import Post from '@/components/Post.vue';
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('HelloWorld', HelloWorld)
  .component('Post',Post)
app.use(router)
  .mount('#app')
