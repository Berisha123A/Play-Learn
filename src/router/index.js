import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/client/TabsPage.vue'
import studentReport from '../views/client/Tab1PageStudentReport.vue'

const routes = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/reports'
      },
      {
        path: '/reports',
        name: 'Reports',
        component: studentReport
      },
      {
        path: 'tab2',
        component: () => import('@/views/client/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/client/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/TabsPage.vue'),
    children: [
      {
        path: '/admin',
        redirect: '/admin/classes'
      },
      {
        path: '/admin/classes',
        name: 'Classes',
        component: () => import('@/views/admin/Tab1-Classes.vue'),
      },
      {
        path: '/admin/settings',
        component: () => import('@/views/admin/Tab2-Settings.vue')
      },
      {
        path: '/admin/manage',
        name: 'admin-manage',
        component: () => import('@/views/admin/Tab3-Manage.vue')
      },
    ]
  },
  // Today
  {
    path: '/admin/classes/:id',
    component: () => import('@/views/admin/ClassPage.vue'),
  },
  {
    path: '/admin/classes/:id/activities',
    component: () => import('@/views/admin/ActivitiesPage.vue'),
  },
  {
    path: '/admin/classes/:id/meals',
    component: () => import('@/views/admin/MealsPage.vue'),
  },
  {
    path: '/admin/classes/:id/planiditor',
    component: () => import('@/views/admin/PlaniDitorPage.vue'),
  },
  {
    path: '/admin/classes/:id/raportiditor',
    component: () => import('@/views/admin/ClassReport.vue'),
  },
  // Manage
  {
    path: '/admin/manage/students',
    name: 'admin-manage-students',
    component: () => import('@/views/admin/ManageStudents.vue')
  },
  {
    path: '/admin/manage/employees',
    name: 'admin-manage-employees',
    component: () => import('@/views/admin/ManageEmployees.vue')
  },
  {
    path: '/admin/manage/menu',
    name: 'admin-add-menu-page',
    component: () => import('@/views/admin/manager/MenuPage.vue')
  },
  // Reports
  {
    path: '/admin/settings/students',
    name: 'admin-evidencat-e-femijeve',
    component: () => import('@/views/admin/EvidencatEFemijeve.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
