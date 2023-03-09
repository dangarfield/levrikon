import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/old',
    component: () => import('layouts/OldLayout.vue'),
    children: [{ path: '', component: () => import('pages/OldIndex.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Home.vue') }],
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Settings.vue') }],
  },
  {
    path: '/notes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Notes.vue') }],
  },
  {
    path: '/database',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Database.vue') }],
  },
  {
    path: '/assets',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Assets.vue') }],
  },
  {
    path: '/fields',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Fields.vue') }],
  },
  {
    path: '/menus',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Menus.vue') }],
  },
  {
    path: '/plugins',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Plugins.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
