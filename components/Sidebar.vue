<template>
 <aside class="w-[15rem]">
    <div
      class=" h-full w-full flex-col overflow-y-auto rounded-md border  scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
    >
      <SidebarItem :links="sidemenu" />
    </div>
  </aside>
</template>

<script lang="ts" setup>

  const sidemenu = [
    {
      title: "Dashboard",
      icon: "ri:dashboard-line",
    },
    {
      title: "Customers",
      icon: "heroicons:user-group",
      items: [
        { title: "Customers", path: "/customers" },
        { title: "Customers" , path: "/customers" },
        { title: "Customers", path: "/customers"  },
        { title: "Customers", path: "/customers"  },
        { title: "Customers", path: "/customers"  },
      ],
    },
    {
      title: "Payments",
      icon: "heroicons:shopping-cart",
      items: [
        { title: "Transactions", path: "/customers"  },
        { title: "Payment Services", path: "/customers"  },
        { title: "Payment Channels", path: "/channels"  },
      ],
    },
    {
      title: "Members",
      icon: "heroicons:user",
      items: [
        { title: "Members", path: "/customers"  },
        { title: "Roles", path: "/customers"  },
        { title: "Departments", path: "/customers"  },
      ],
    },
    {
      title: "Analytics",
      icon: "heroicons:chart-pie",
      items: [{ title: "Overview", path: "/customers"  }, { title: "Statistics" , path: "/customers" }, { title: "Trends", path: "/customers"  }],
    },
  ];
</script>

<style>

</style>