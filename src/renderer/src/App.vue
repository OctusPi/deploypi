<template>
    <main class="container-main">
        <AlertUi v-model="showAlert" />
        <HeaderMainUi />
        <RouterView @alert="(data) => showAlert = data" />
    </main>
</template>

<script setup>
import {ref} from 'vue'
import HeaderMainUi from '@/components/HeaderMainUi.vue';
import AlertUi from './components/AlertUi.vue';

const showAlert = ref({show:false})
</script>
