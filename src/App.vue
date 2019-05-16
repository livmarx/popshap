<template>
  <v-app class="grey lighten-2">
    <Menus />
    <v-content>
       <view></view>
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
