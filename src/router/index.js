import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List'
import Create from '../views/Create'
import Edit from '../views/Edit'


const routes = [
    {
        path: '/',
        name: 'List',
        component: List,
    },
    {
        path: '/create',
        name: 'Create',
        component: Create,
    },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
