<template>
  <div class="clients">
    <div class="client-banner">
    <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">Clients</h1>
    <v-data-table
      class="elevation-1"
      :items="fakeData"
    >
      <template >
        <td></td>
        <td class="text-xs-right">Header</td>
        <td class="text-xs-right">Header</td>
      </template>
    </v-data-table>
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
.client-banner {
  background-color: slategray;
}
</style>
