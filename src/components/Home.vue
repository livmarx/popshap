<template>
  <div class="home">
    <h1 class="grey--text text--darken-2 display-2 font-weight-thin">
      HOME
    </h1>
    <Profile />
    <v-layout row  wrap>
      <v-flex xs12 md6 >
        <v-btn outline block> 1 </v-btn>
      </v-flex>
      <v-flex xs4 md2 >
        <v-btn outline block> 2 </v-btn>
      </v-flex>
      <v-flex xs4 md2 >
        <v-btn outline block> 3 </v-btn>
      </v-flex>
      <v-flex xs4 md2 >
        <v-btn outline block> 4 </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Profile from '@/components/Profile';
export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    Profile,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 30px;
}
</style>
