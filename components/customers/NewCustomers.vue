<script setup lang="ts">
const {data} = await useAsyncData("new-customers",
    ()=> $fetch("https://randomuser.me/api/?results=230"),
    {
      default: () => [],
    transform: (data:any)=> data.results,
})
const generateRandomTime = () => {
  return Math.floor(Math.random() * 60) + 1;
};
</script>

<template>
  <section class="mt-10">
    <h4 class="text-xs text-muted-foreground">New Customers</h4>
    <div class="mt-5 flex w-[45rem] items-start gap-6 overflow-x-auto rounded-lg border bg-background px-5 py-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md">
      <div class="flex shrink-0 flex-col items-center gap-2">
        <button class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Icon name="heroicons:plus" class="h-5 w-5" />
        </button>
        <div>
          <p class="text-sm font-semibold">Add</p>
        </div>
      </div>
      <template v-for="customer in data" :key="customer.login.uuid">
        <div class="flex shrink-0 flex-col items-center gap-2">
          <img
              class="h-10 w-10 rounded-full object-cover"
              :src="customer.picture.thumbnail"
              :alt="customer.name.first"
          />
          <div class="text-center">
            <p class="text-sm font-semibold">{{ customer.name.first }} {{ customer.name.last }}</p>
            <p class="text-xs text-muted-foreground">{{ generateRandomTime() }} mins ago</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>


<style scoped>

</style>