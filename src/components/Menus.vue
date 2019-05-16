<template>
  <nav>
    <v-toolbar app flat >
    <!-- HEADER -->
      <v-toolbar-side-icon class="grey--text text--darken-1 " @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title >

        <span class="text-uppercase grey--text text--darken-1 headline font-weight-light ">p o p</span>
        <span class="text-uppercase grey--text text--darken-1 headline font-weight-bold ">s h a p</span>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="auth-buttons">
        <v-btn flat color="grey">
          <span>log out</span>
        </v-btn>
        <v-btn flat color="grey">
          <span>log in</span>
        </v-btn>
        <v-btn flat color="grey">
          <span>Sign up</span>
        </v-btn>
      </div>
    </v-toolbar>
    <!-- DRAWER -->
    <v-navigation-drawer v-model="drawer" app class="grey darken-2">
      <v-toolbar flat>
      <v-list class="grey darken-3">
        <v-list-tile>
          <v-list-tile-title class="text-uppercase grey--text text--lighten-2 headline">
            M e n u
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-btn flat color="grey">
        <router-link  :to="{name: 'Home'}">
          <p class="title text-uppercase grey--text text--lighten-2 font-weight-light subheading">Dashboard</p>
        </router-link>
      </v-btn>
      <br/>
      <v-divider></v-divider>
     <v-btn flat color="grey">
        <router-link  :to="{name: 'Inventory'}">
          <p class="title text-uppercase grey--text text--lighten-2 font-weight-light subheading">Inventory</p>
        </router-link>
      </v-btn>
      <br/>
      <v-divider></v-divider>
      <v-btn flat color="grey">
        <router-link :to="{name: 'Users'}">
          <p class="title text-uppercase grey--text text--lighten-2 font-weight-light subheading">Users</p>
        </router-link>
      </v-btn>
      <br/>
       <v-divider></v-divider>
      <v-btn flat subheading color="grey">
        <router-link :to="{name: 'Clients'}">
          <p class="title text-uppercase grey--text text--lighten-2 font-weight-light subheading">Clients</p>
        </router-link>
      </v-btn>
    <v-divider></v-divider>

    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Menus',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
.router-link {
  text-decoration: none;
}
</style>

