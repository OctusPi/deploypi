<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal(false)" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex justify-center items-center p-4 min-h-full text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="bg-white shadow-xl p-6 rounded-2xl w-full max-w-md text-left transform transition-all overflow-hidden align-middle">
                            <DialogTitle as="h3" class="font-medium text-gray-900 text-lg leading-6">
                                Dados do Projeto
                            </DialogTitle>
                            <div class="mt-2">
                                <p class="text-gray-500 text-sm">
                                    Your payment has been successfully submitted. We’ve sent you
                                    an email with all of the details of your order.
                                </p>
                            </div>

                            <div class="mt-4">
                                <button type="button"
                                    class="inline-flex justify-center bg-blue-100 hover:bg-blue-200 px-4 py-2 border border-transparent rounded-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 font-medium text-blue-900 text-sm focus:outline-none"
                                    @click="closeModal">
                                    Got it, thanks!
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

const isOpen = defineModel({ type: Boolean, default: () => false })

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>