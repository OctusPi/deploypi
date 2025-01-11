<template>
    <TransitionRoot appear :show="project.ui.modalProject" as="template">
        <Dialog as="div" @close="() => project.ui.modalProject = false" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-25">
                <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex justify-center items-center p-6 min-h-full text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="shadow-xl p-6 rounded-lg w-full max-w-md text-left transform transition-all overflow-hidden align-middle box">
                            <DialogTitle as="h3" class="font-medium text-md leading-6">
                                Dados do Projeto
                            </DialogTitle>
                            <div class="gap-4 grid grid-cols-6 mt-6">
                                <div class="col-span-6">
                                    <label for="name" class="label-input">Projeto</label>
                                    <input id="name" name="name" type="text" class="form-input w-full" v-model="project.target.params.name" />
                                </div>
                                <div class="col-span-6">
                                    <label for="description" class="label-input">Descrição</label>
                                    <textarea id="description" name="description" type="text" v-model="project.target.params.description" class="form-input w-full"></textarea>
                                </div>
                                
                            </div>

                            <div class="flex justify-center items-center space-x-2 mt-6">
                                <button type="button" class="btn btn-action" @click="actions.save">
                                    <component :is="CheckIcon" class="w-5 h-5 me-1" />
                                    Confirmar
                                </button>
                                <button type="button" class="btn btn-cancel" @click="project.ui.modalProject = false">
                                    <component :is="XMarkIcon" class="w-5 h-5 me-1" />
                                    Cancelar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

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

            <input v-if="project.ui.searchInput" type="text" class="flex-1 form-input-search w-full" name="search" v-model="project.search.name" placeholder="localizar projeto" />

            <div v-for="i in project.datalist">
                {{ i.dataValues?.name ?? '' }}
            </div>

        </aside>
        <section class="px-4 py-2 section-main">Projetos</section>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import Ipc from '../services/ipc';
import Actions from '../services/actions';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { MagnifyingGlassIcon, PlusIcon, CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const project = reactive({
    ui: {
        searchInput:false,
        modalProject: false
    },
    datalist:[],
    target: {
        controller:'projects',
        params: {},
        search: {}
    }
})

const actions = new Actions(new Ipc(), project)

onMounted(() => {
    actions.list(() => {
        console.log(project)
    })
})

</script>
