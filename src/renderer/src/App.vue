<template>
    <main class="container-main">
        <HeaderMainUi />
        <RouterView />
    </main>
</template>

<script setup>
import HeaderMainUi from '@/components/HeaderMainUi.vue';
import { onMounted } from 'vue';
import Ipc from './services/ipc'

onMounted(() => {
    const ipc = new Ipc()
    ipc.request('ipc-renderer', {
        model: 'Project',
        action: 'save',
        ipcid: 'pidsave-project',
        params: {
            name: 'Teste',
            description: 'Teste'
        }
    }, (data) => {
        console.log(data);
        
    })
})
</script>
