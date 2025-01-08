
import {  createRouter,  createWebHistory } from 'vue-router'

import { LoginPage, 
        PerfilPage, 
        RegisterPage, HomeAuth } from '../pages'


const routes = [
    {
        path:'/',
        name:'home-auth',
        component: HomeAuth
    },
    {
        path:'/login',
        name:'login',
        component: LoginPage,
    },
    {
        path:'/perfil',
        name:'perfil',
        component: PerfilPage
    },
    {
        path:'/register',
        name:'register',
        component: RegisterPage
    }
]

const  router = createRouter( { 
    history: createWebHistory(),
    routes
} );

export {
    router
}