import MainLayout from '../../../layouts/MainLayout.vue';

export default {
    path: '/',
    component: MainLayout,
    children: [
        {
            path: '/student',
            name: 'StudentListPage',
            component: () => import('../pages/StudentListPage.vue'),
            meta: {
                requiresAuth: true,
                breadcrumb: [
                    {
                        title: 'student.breadcrumb.title',
                    },
                ],
            },
        },
    ],
};
