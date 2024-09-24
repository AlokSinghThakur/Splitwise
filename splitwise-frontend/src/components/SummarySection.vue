<template>
  <div class="bg-white shadow-md p-6 rounded-md">
    <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
    <div class="space-y-4">
      <div v-for="item in items" :key="item.label" class="flex justify-between">
        <span>{{ item.label }}</span>
        <span class="font-semibold">{{ item.value }}</span>
      </div>
    </div>
    <div v-if="footer" class="mt-4 text-green-500 cursor-pointer">{{ footer }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
    footer: String,
  },
};
</script>
