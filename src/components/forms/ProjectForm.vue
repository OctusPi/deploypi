<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal(false)" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex justify-center items-center p-6 min-h-full text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="bg-white shadow-xl p-6 rounded-2xl w-full max-w-md text-left transform transition-all overflow-hidden align-middle">
                            <DialogTitle as="h3" class="font-medium text-gray-900 text-lg leading-6">
                                Dados do Projeto
                            </DialogTitle>
                            <div class="gap-4 grid grid-cols-6 mt-6">
                                <div class="col-span-6">
                                    <label for="name" class="label-input">Projeto</label>
                                    <input id="name" name="name" type="text" class="form-input w-full" />
                                </div>
                                <div class="col-span-6">
                                    <label for="description" class="label-input">Descrição</label>
                                    <input id="description" name="description" type="text" class="form-input w-full" />
                                </div>
                                <div class="col-span-6">
                                    <label for="stack" class="label-input">Stack</label>
                                    <input id="stack" name="stack" type="text" class="form-input w-full" />
                                </div>
                            </div>

                            <div class="mt-6">
                                <button type="button" class="btn btn-action" @click="closeModal">
                                    <component :is="CheckIcon" class="w-5 h-5 me-1" />
                                    Confirmar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>

import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline';

const isOpen = defineModel({ type: Boolean, default: () => false })

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>