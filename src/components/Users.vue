<template>
  <div class="users">
   <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">Users</h1>
    </div>
      <div
        v-for="(user, i) in users"
        :key="i"
      >
      <h3>{{ user.firstName }} {{ user.lastName }}</h3>
      <p>role: {{ user.role }}</p>
      <p>email: {{ user.email }}</p>
      <p>phone: {{ user.phone }}</p>
      <p>notes: {{ user.notes }}</p>
      <br/>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';
export default {
  name: 'Users',
  data() {
    return {
      users: [],
    };
  },
  created() {
    //fetch data from firestore
    db
      .collection('users')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let user = doc.data();
          user.id = doc.id;
          this.users.push(user);
        });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 30px;
}
.banner {
  background-color: slategray;
}
</style>
