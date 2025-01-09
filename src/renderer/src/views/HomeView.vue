<template>
    <ProjectForm v-model="project.ui.modalProject" />

    <div class="flex content-main pt-14">
        <aside class="px-4 py-2 aside-main box">
            <header class="flex justify-between items-center mb-2">
                <h1 class="font-medium text-xs">Projetos</h1>
                <div class="flex items-center space-x-1">
                    <button @click="project.ui.modalProject = true" class="flex items-center px-2 py-1 rounded-md font-medium text-xs btn-sm">
                        <component :is="PlusIcon" class="w-4 h-4 me-1"></component>
                        Novo
                    </button>
                    <button @click="project.ui.searchInput = !project.ui.searchInput" class="flex items-center px-2 py-1 rounded-md font-medium text-xs btn-sm">
                        <component :is="MagnifyingGlassIcon" class="w-4 h-4 me-1"></component>
                        Search
                    </button>
                </div>
            </header>

            <input v-if="project.ui.searchInput" type="text" class="flex-1 form-input-search w-full" name="search" v-model="project.search.name" />

        </aside>
        <section class="px-4 py-2 section-main">Projetos</section>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/24/outline';
import ProjectForm from '../components/forms/ProjectForm.vue';

const project = reactive({
    ui: {
        searchInput:false,
        modalProject: false
    },
    data: {},
    search: {
        name: ''
    }
})

</script>
