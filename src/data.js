//主菜单
const mainMenu = [
  { id: 1, title: '主菜单', name:"mainone",icon: 'Location', path: '/home/secmenu/mainone' },
  { id: 2, title: '执法', name:"maintwo",icon: 'document', path: '/home/secmenu/maintwo' },
  { id: 3, title: '管理', name:"mainthree",icon: 'discount', path: '/home/secmenu/mainthree' },
  { id: 4, title: '设置1', name:"mainfour",icon: 'ChatLineRound', path: '/home/secmenu/mainfour' },
  { id: 5, title: '设置2', name:"mainfive",icon: 'setting', path: '/home/secmenu/mainfive' },
];
//二级菜单
const mainone=[
  { id: 1, title: '我的办件',name:'mydaiban',icon: 'Location', path: '/home',
    children:[
      {id:11, title:'我的待办',name:'mydaiban',path:'/home/tabs/daiban'},
    ]
  },
  { id: 2, title: '我的已办', name:'mydaiban',icon: 'document', path: '/home/post' },
  { id: 3, title: '我的文件', name:'mydaiban',icon: 'discount', path: '/home' },
  { id: 4, title: '公文流转', name:'mydaiban',icon: 'ChatLineRound', path: '/home/post' },
];

//导出
export {
  mainMenu,
  mainone
}