<template>
  <v-app class="grey lighten-2">
    <Header />
    <!-- <Sidebar /> -->
    <v-content>
       <router-view></router-view>
      <h2>Inside v-content</h2>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style>
</style>
