<template>
    <header class="fixed p-3 border-b border-b-gray-400 border-opacity-50 w-full">
        <div class="flex justify-between items-center">
            <div class="flex items-center me-6">
                <img src="/logo.svg" class="w-8 h-8 me-4">
                <div class="text-start">
                    <h1 class="m-0 p-0 font-medium text-xs">DeployPi</h1>
                    <p class="m-0 p-0 text-xs">Automatize seu Deploy</p>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <RouterLink to="/" class="flex items-center">
                    <component :is="CommandLineIcon" class="w-5 h-5 me-1"></component>
                    Projetos
                </RouterLink>
                <RouterLink to="/history" class="flex items-center">
                    <component :is="DocumentTextIcon" class="w-5 h-5 me-1"></component>
                    Histórico
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { DocumentTextIcon, CommandLineIcon } from '@heroicons/vue/24/outline';
</script>