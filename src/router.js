const EtMain = r => require.ensure([], () => r(require('views/EtMain/index.vue')), 'EtMain')
const q1 = r => require.ensure([], () => r(require('views/PSQ/q1.vue')), 'q1')
const q2 = r => require.ensure([], () => r(require('views/PSQ/q2.vue')), 'q2')
export default [{
    path: '*',
  },
  {
    path: '/',
    redirect: '/EtMain',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/EtMain',
    component: EtMain,
    meta: {
      title: 'demo'
    }
  },
  {
    path: '/q1',
    component: q1,
    meta: {
      title: '医疗机构调查表'
    }
  },
  {
    path: '/q2',
    component: q2,
    meta: {
      title: '孕产妇调查表'
    }
  },
]
