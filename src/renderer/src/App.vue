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
    ipc.request('post', {
        controller: 'projects',
        action: 'list',
        ipcid: 'pidsave-project',
        params: {}
    }, (data) => {
        console.log(data);

    })
})
</script>
