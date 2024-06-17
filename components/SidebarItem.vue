<template>
  <div class="flex flex-col">
    <template v-for="(link, i) in links" :key="i">
      <NuxtLink
          v-if="!link.items"
          :to="link.path"
          class="inline-flex items-center gap-4 p-3 px-4 text-left text-[15px]"
      >
        <Icon v-if="link.icon" :name="link.icon" size="18" class="text-muted-foreground" />
        <p class="truncate">
          {{ link.title }}
        </p>
      </NuxtLink>

      <HDisclosure v-slot="{ open }" v-else>
        <HDisclosureButton
            class="inline-flex items-center justify-between p-3 px-4 text-left text-[15px]"
        >
          <div class="flex items-center gap-4">
            <Icon v-if="link.icon" :name="link.icon" size="18" class="text-muted-foreground" />
            <p class="truncate">
              {{ link.title }}
            </p>
          </div>
          <div>
            <Icon
                name="heroicons:chevron-down"
                :class="[open && 'rotate-180']"
                class="h-4 w-4 text-muted-foreground transition"
            />
          </div>
        </HDisclosureButton>
        <TransitionExpand>
          <HDisclosurePanel class="mx-6 flex flex-col border-l px-3">
            <template v-for="(item, j) in link.items" :key="j">
              <NuxtLink class="rounded-md px-3 py-1.5 text-sm hover:bg-muted" :to="item.path">
                {{ item.title }}
              </NuxtLink>
            </template>
          </HDisclosurePanel>
        </TransitionExpand>
      </HDisclosure>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  links?: any[];
}>();
</script>
