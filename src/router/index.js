import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        // 当 /home/ 匹配成功
        // profile 将被渲染到 home 的 <router-view> 内部
        path: '',
        name: 'homeone',
        component: () => import('@/components/HelloWorld.vue'),
        // children:[{
        //   path:'kk',
        //   name:'kk',
        //   compoent:()=> import("@/components/HelloWorld.vue")
        // }]
      },
      {
        // 当 /home/posts 匹配成功
        // posts 将被渲染到 home 的 <router-view> 内部
        path: 'secmenu/:name',
        name: 'secmenu',
        component: () => import('@/components/SecondMenu.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/components/HelloWorld.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
