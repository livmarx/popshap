<template>
  <nav>
    <v-toolbar app >
    <!-- HEADER -->
      <v-toolbar-side-icon   class="grey--text text--darken-1" @click="drawer = !drawer"></v-toolbar-side-icon>
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
    <!-- DRAWER -->
    <v-navigation-drawer v-model="drawer" app class="grey">
      <v-toolbar flat>
      <v-list class="grey darken-1">
        <v-list-tile>
          <v-list-tile-title class="title text-uppercase grey--text text--lighten-4 font-weight-light">
            Menu
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
     <v-btn flat color="grey">
        <router-link :to="{name: 'Inventory'}">
          <p>Inventory</p>
        </router-link>
      </v-btn>
      <br/>
       <v-divider></v-divider>
      <v-btn flat color="grey">
        <router-link :to="{name: 'Users'}">
          <p>Users</p>
        </router-link>
      </v-btn>
      <br/>
       <v-divider></v-divider>
      <v-btn flat color="grey">
        <router-link :to="{name: 'Clients'}">
          <p>Clients</p>
        </router-link>
      </v-btn>
    <v-divider></v-divider>

    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
</style>
