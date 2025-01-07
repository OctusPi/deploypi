<template>
    <ProjectForm v-model="compData.openFormProject" />
    <header class="flex justify-between items-center">
        <div class="flex items-center">
            <img src="/logo.svg" class="w-12 h-12 me-4">
            <div class="text-start">
                <h1 class="m-0 p-0 font-medium text-sm">DeployPi</h1>
                <p class="m-0 p-0 text-xs">Automatize seu Deploy</p>
            </div>
        </div>
        <div class="flex items-center space-x-2">
            <button class="btn btn-action" @click="compData.openFormProject = true">
                <component :is="PlusCircleIcon" class="w-5 h-5 me-2"></component>
                Projeto
            </button>
            <button class="btn btn-action">
                <component :is="MagnifyingGlassIcon" class="w-5 h-5 me-2"></component>
                Localizar
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ProjectForm from '@/components/forms/ProjectForm.vue';
import { PlusCircleIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const compData = reactive({
    openFormProject: false
})

</script>