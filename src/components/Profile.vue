<template>
  <div class="profile">
    <h1>Profile</h1>
    <h4>{{ user.name}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      user: {
        name: 'Claire',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
