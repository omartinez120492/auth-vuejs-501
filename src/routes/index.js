
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../store'

import {
    LoginPage,
    PerfilPage,
    RegisterPage, HomeAuth
} from '../pages'
import { storeToRefs } from 'pinia'

const authRequired = async (to, from, next) => {
    console.log('enter authRequired')
    const store = useUserStore()
    const { user, uid } = storeToRefs(store);
    const { getCurrentUser } = store

    try {
        console.log('getCurrent')
        const resp = await getCurrentUser()

        console.log({ 'resp': resp, 'to path':to.path })

        if ((resp && to.path === '/') ||
            (resp && to.path === '/perfil') ||
            (resp && to.path === '/register')) {
            next();
        } else {
            next('/login')
        }
    } catch (error) {
        next('/login')
    }
    return true;
}


const routes = [
    {
        path: '/',
        name: 'home-auth',
        component: HomeAuth,
        beforeEnter: authRequired
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/perfil',
        name: 'perfil',
        component: PerfilPage,
        beforeEnter: authRequired
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage,
        beforeEnter: authRequired
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export {
    router
}