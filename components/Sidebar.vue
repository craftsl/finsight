<template>
 <aside>
    <div
      class=" h-full w-full flex-col gap-5 overflow-y-auto rounded-md border bg-card pb-3 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
    >
      <SidebarItem :links="sidemenu" />

      <div class="mt-auto">
        <SidebarItem :links="bottomsideMenu" />
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>

  const sidemenu = [
    {
      title: "Dashboard",
      icon: "heroicons:home",
    },
    {
      title: "Customers",
      icon: "heroicons:user-group",
      items: [
        { title: "Customers" },
        { title: "Customers" },
        { title: "Customers" },
        { title: "Customers" },
        { title: "Customers" },
      ],
    },
    {
      title: "Payments",
      icon: "heroicons:shopping-cart",
      items: [
        { title: "Transactions" },
        { title: "Payment Services" },
        { title: "Payment Channels" },
      ],
    },
    {
      title: "Members",
      icon: "heroicons:user",
      items: [
        { title: "Members" },
        { title: "Roles" },
      ],
    },
    {
      title: "Analytics",
      icon: "heroicons:chart-pie",
      items: [{ title: "Overview" }, { title: "Statistics" }, { title: "Trends" }],
    },
  ];
  const bottomsideMenu = [
    {
      title: "Settings",
      icon: "heroicons:cog-8-tooth",
    },
    {
      title: "Logout",
      icon: "heroicons:arrow-left-on-rectangle",
    },
  ];
</script>

<style>

</style>