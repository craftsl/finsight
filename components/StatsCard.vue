<template>
  <section class="grid gap-5 md:grid-cols-3">
    <div class="rounded-lg border bg-card p-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium">Total Revenue</p>
        <span class="shrink-0">
          <Icon name="heroicons:banknotes" class="h-4 w-4 text-muted-foreground" />
        </span>
      </div>

      <p class="mt-1.5 text-xl font-extrabold">KES:450,999,231.89</p>
      <p class="text-xs text-muted-foreground">22.33% more than last month</p>
    </div>
    <div class="rounded-lg border bg-card p-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium">Total Transactions</p>
        <span class="shrink-0">
          <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
        </span>
      </div>

      <p class="mt-1.5 text-xl font-extrabold">912,231</p>
      <p class="text-xs text-muted-foreground">3.2% more than last month</p>
    </div>
    <div class="rounded-lg border bg-card p-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium">Customers</p>
        <span class="shrink-0">
          <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
        </span>
      </div>

      <p class="mt-1.5 text-xl font-extrabold">12,231</p>
      <p class="text-xs text-muted-foreground">13.2% new customers more than last month</p>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>