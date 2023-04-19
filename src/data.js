const Menu={}
//主菜单
Menu.main = [
  { id: 1, title: '主菜单', name:"one",icon: 'Location', path: '/home/secmenu/one' },
  { id: 2, title: '执法', name:"two",icon: 'document', path: '/home/secmenu/two' },
  { id: 3, title: '管理', name:"three",icon: 'discount', path: '/home/secmenu/three' },
  { id: 4, title: '设置1', name:"four",icon: 'ChatLineRound', path: '/home/secmenu/four' },
  { id: 5, title: '设置2', name:"five",icon: 'setting', path: '/home/secmenu/five' },
];
//二级菜单
Menu.one=[
  { id: 1, title: '我的办件',name:'mydaiban',icon: 'Location', path: '/home',
    children:[
      {id:11, title:'我的待办',name:'mydaiban',path:'/home/tabs/daiban'},
    ]
  },
  { id: 2, title: '我的已办', name:'mydaiban',icon: 'document', path: '/home/post' },
  { id: 3, title: '我的文件', name:'mydaiban',icon: 'discount', path: '/home' },
  { id: 4, title: '公文流转', name:'mydaiban',icon: 'ChatLineRound', path: '/home/post' },
];

//二级菜单
Menu.two=[
  { id: 1, title: '我的办件2',name:'mydaiban',icon: 'Location', path: '/home',
    children:[
      {id:11, title:'我的待办2',name:'mydaiban',path:'/home/tabs/daiban'},
    ]
  },
  { id: 2, title: '我的已办2', name:'mydaiban',icon: 'document', path: '/home/post' },
  { id: 3, title: '我的文件2', name:'mydaiban',icon: 'discount', path: '/home' },
  { id: 4, title: '公文流转2', name:'mydaiban',icon: 'ChatLineRound', path: '/home/post' },
];

Menu.three=[
  { id: 1, title: '我的办件3',name:'mydaiban',icon: 'Location', path: '/home',
    children:[
      {id:11, title:'我的待办3',name:'mydaiban',path:'/home/tabs/daiban'},
    ]
  },
  { id: 2, title: '我的已办3', name:'mydaiban',icon: 'document', path: '/home/post' },
  { id: 3, title: '我的文件3', name:'mydaiban',icon: 'discount', path: '/home' },
  { id: 4, title: '公文流转3', name:'mydaiban',icon: 'ChatLineRound', path: '/home/post' },
];

Menu.four=[
  { id: 1, title: '我的办件4',name:'mydaiban',icon: 'Location', path: '/home',
    children:[
      {id:11, title:'我的待办4',name:'mydaiban',path:'/home/tabs/daiban'},
    ]
  },
  { id: 2, title: '我的已办4', name:'mydaiban',icon: 'document', path: '/home/post' },
  { id: 3, title: '我的文件4', name:'mydaiban',icon: 'discount', path: '/home' },
  { id: 4, title: '公文流转4', name:'mydaiban',icon: 'ChatLineRound', path: '/home/post' },
];

Menu.five=[
  { id: 1, title: '我的办件5',name:'mydaiban',icon: 'Location', path: '/home',
    children:[
      {id:11, title:'我的待办5',name:'mydaiban',path:'/home/tabs/daiban'},
    ]
  },
  { id: 2, title: '我的已办5', name:'mydaiban',icon: 'document', path: '/home/post' },
  { id: 3, title: '我的文件5', name:'mydaiban',icon: 'discount', path: '/home' },
  { id: 4, title: '公文流转5', name:'mydaiban',icon: 'ChatLineRound', path: '/home/post' },
];

//导出
export default Menu