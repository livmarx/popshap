<template>
  <nav>
    <v-toolbar app >
      <v-toolbar-title class="text-uppercase grey--text text--darken-1">
        <span class="font-weight-light">p o p</span>
        <span>s h a p</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>log out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
