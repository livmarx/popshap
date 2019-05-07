<template>
  <div class="home">
    <h1 class="grey--text text--darken-2 display-2 font-weight-thin">
      HOME
      <Profile />
    </h1>
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
