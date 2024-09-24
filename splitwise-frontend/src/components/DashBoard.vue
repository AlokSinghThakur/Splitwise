<template>
  <div class="p-8 bg-gray-50 flex-1">
    <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
    
    <!-- Total summary section -->
    <SummarySection
      title="Total summary"
      :items="[
        { label: 'Total amount you owe', value: '$12,000.00' },
        { label: 'Total amount owe to you', value: '$6,000.00' },
        { label: 'Total outstanding balance', value: '$100.00' }
      ]"
    />

    <!-- Friends summary section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
      <SummarySection
        title="Friends you owe"
        :items="[
          { label: 'Ironman', value: '$1,000.00' },
          { label: 'Black Widow', value: '$5,000.00' }
        ]"
        footer="View all"
      />
      <SummarySection
        title="Friends owe to you"
        :items="[
          { label: 'Gamora', value: '$3,000.00' },
          { label: 'Black Panther', value: '$2,000.00' }
        ]"
        footer="View all"
      />
      <SummarySection
        title="Friends with outstanding balance"
        :items="[
          { label: 'Witch', value: '$10.00' },
          { label: 'Thor', value: '$30.00' }
        ]"
        footer="View all"
      />
    </div>
    
    <!-- Groups summary section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
      <SummarySection
        title="Groups you owe"
        :items="[
          { label: 'Endgame', value: '$6,000.00' }
        ]"
        footer="View all"
      />
      <SummarySection
        title="Groups owe to you"
        :items="[
          { label: 'Infinity War', value: '$1,000.00' }
        ]"
        footer="View all"
      />
      <SummarySection
        title="Groups with outstanding balance"
        :items="[
          { label: 'Age of Ultron', value: '$5.00' }
        ]"
        footer="View all"
      />
    </div>
  </div>
</template>

<script>
import SummarySection from './SummarySection.vue';

export default {
  components: {
    SummarySection,
  },
};
</script>
