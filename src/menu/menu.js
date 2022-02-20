import Entry from '@/views/Entry';
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Entry,
  },
  // 海图
  {
    path: '/map',
    name: 'Map',
    meta: { title: '海图' },
    component: { render: (h) => h('router-view') },
    redirect: '/map/index',
    children: [
      {
        path: '/map/index',
        name: 'MapIndex',
        meta: { title: '海图视图' },
        component: () => import(/* webpackChunkName: "Map" */ '@/views/Map/index.vue'),
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "ErrorPage" */ '@/views/ErrorPage/404.vue'),
  },
];
export default routes;
