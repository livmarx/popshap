<template>
  <v-app class="grey lighten-2">
    <Menus />
    <v-content>
       <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Menus from '@/components/Menus';

export default {
  name: 'App',
  components: {
    Menus,
  },
};
</script>

<style>
</style>
