<template>
  <div class="clients">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">Clients</h1>
    </div>
     <div
        v-for="(client, i) in clients"
        :key="i"
      >
      <h3>{{ client.name }}</h3>
      <p> Industry: {{ client.industry }}</p>
      <p>Email: {{ client.email }}</p>
      <p>Phone: {{ client.phone }}</p>
      <br/>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';
export default {
  name: 'Clients',
  data() {
    return {
      clients: [],
    };
  },
  created() {
    //fetch data from firestore
    db
      .collection('clients')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let client = doc.data();
          client.id = doc.id;
          this.clients.push(client);
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
