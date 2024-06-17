<script setup lang="ts">

</script>

<template>
<div>
  <Header/>
<div class="container lg:grid lg:grid-cols-12 lg:gap-2">
  <Sidebar class="sticky top-[65px] hidden h-[calc(100vh-68px)] py-3 lg:col-span-3 lg:block" />
    <slot/>
</div>
</div>
</template>

<style scoped>

</style>
