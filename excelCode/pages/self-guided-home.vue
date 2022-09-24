<template>
    <studentProfile v-if="store.userType === 'student'" />
    <teacherProfile v-else />

</template>

<script setup lang="ts">
import studentProfile from '@/components/studentProfile.vue'
import teacherProfile from '@/components/teacherProfile.vue'
import { useUserStore } from '~~/stores/user';

const store = useUserStore()
</script>