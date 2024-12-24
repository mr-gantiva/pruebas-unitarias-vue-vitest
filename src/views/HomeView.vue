<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Posts from '@/components/Posts.vue';
</script>

<template>
    <main>
        <!-- <TheWelcome /> -->

        <nav>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </nav>

        <RouterView />

        <Posts />
    </main>
</template>
