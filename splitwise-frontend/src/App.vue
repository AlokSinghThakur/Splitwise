<template>
  <div class="flex">
    <Sidebar />
    <div class="w-full flex flex-col">
      <Topbar />
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/SideBar.vue';
import Topbar from './components/TopBar.vue';
import Dashboard from './components/DashBoard.vue';

export default {
  components: {
    Sidebar,
    Topbar,
    Dashboard
  }
};
</script>

<style scoped>
/* Global styles if needed */
</style>
