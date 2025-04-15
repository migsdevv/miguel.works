<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavbarComponent />
    <div class="flex flex-1">
      <RouterView />
    </div>
  </div>
</template>