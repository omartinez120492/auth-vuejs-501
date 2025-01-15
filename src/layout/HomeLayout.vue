<script setup>
import NavBar from '../components/NavBar.vue';
import {  RouterView } from 'vue-router'
    
</script>

<template>
    <NavBar/>
    <div class="container-fluid">
        <RouterView />
    </div>
</template>

<style>
    
</style>