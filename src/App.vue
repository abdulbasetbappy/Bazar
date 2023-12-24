<template>
  <router-view />
</template>

<script lang="ts" setup>
  import { useAuthStore } from '@/store/auth';
  import { onMounted } from 'vue';

  const authStore = useAuthStore();
  
  onMounted(() => {
    authStore.checkAuth();
  });
</script>
