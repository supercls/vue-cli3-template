const EtMain = r => require.ensure([], () => r(require('views/EtMain/index.vue')), 'EtMain')
const q1 = r => require.ensure([], () => r(require('views/PSQ/q1.vue')), 'q1')
const q2 = r => require.ensure([], () => r(require('views/PSQ/q2.vue')), 'q2')
const q3 = r => require.ensure([], () => r(require('views/PSQ/q3.vue')), 'q3')
const q4 = r => require.ensure([], () => r(require('views/PSQ/q4.vue')), 'q4')
const q5 = r => require.ensure([], () => r(require('views/PSQ/q5.vue')), 'q5')
const childIndex = r => require.ensure([], () => r(require('views/PSQ/childIndex.vue')), 'childIndex')
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
    path: '/childIndex',
    component: childIndex,
    meta: {
      title: '儿童家长调查表'
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
  {
    path: '/q3',
    component: q3,
    meta: {
      title: '儿童家长调查表（不满1岁）'
    }
  },
  {
    path: '/q4',
    component: q4,
    meta: {
      title: '儿童家长调查表（不满3岁）'
    }
  },
  {
    path: '/q5',
    component: q5,
    meta: {
      title: '儿童家长调查表（满3岁不满6岁）'
    }
  },
]
