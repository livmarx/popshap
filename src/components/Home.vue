<template>
  <div class="home">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">
        Home
      </h1>
    </div>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard';
export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    Dashboard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 30px;
}
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: slategray;
}
</style>
