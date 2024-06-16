<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <div class="container flex h-16 items-center justify-between">
<div class="flex items-center gap-3">
   <img src="/logo.svg" alt="" class="h-8 w-8 object-contain"/>
   <NuxtLink class="text-xl font-bold" to="/">Dashboard</NuxtLink>
</div>
<div class="flex items-center gap-4">
<button @click="toggleTheme" aria-label="Toggle Theme" class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border bg-background">
  <Icon name="heroicons:sun" class="h-5 w-5"/>
</button>
</div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const mode = useColorMode();
const toggleTheme = () => {
  mode.value = mode.value === "light" ? "dark" : "light";

}
</script>

<style>

</style>