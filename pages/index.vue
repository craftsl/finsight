<script setup lang="ts">

import Button from "~/components/ui/button/Button.vue";
import NewCustomers from "~/components/customers/NewCustomers.vue";
import Table from "~/components/ui/table/Table.vue";

const loading = ref(false)
</script>

<template>

  <div >
    <div class=" pt-3">
      <Button class="w-32">Hello World</Button>
      <main class="">
        <StatsCard class="w-[45rem]"/>
        <NewCustomers/>
        <StatsCard class="w-[45rem] mt-8"/>
        <StatsCard class="w-[45rem] mt-8"/>
        <StatsCard class="w-[45rem] mt-8"/>
        <StatsCard class="w-[45rem] mt-8"/>

        <!--        <div class="mt-10">
                  <Table/>
                </div>-->
      </main>

    </div>
  </div>

</template>

<style scoped>

</style>