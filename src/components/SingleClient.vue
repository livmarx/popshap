<template>
  <div class="single-client">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">
        {{client.name}}
      </h1>
    </div>
    <br/>
    <div>
     <v-form class="px-5">
      <v-text-field
        label="Name"
        v-model="client.name"
      ></v-text-field>
      <v-text-field
        label="Industry"
        v-model="client.industry"
      ></v-text-field>
      <v-text-field
        label="Email"
        v-model="client.email"
      ></v-text-field>
      <v-text-field
        label="Phone"
        v-model="client.phone"
      ></v-text-field>
      <v-btn
        class="mx-0 mt-3"
        @click="updateClient"
      >Update Client Info</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';
export default {
  name: 'SingleClient',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    updateClient() {
      const docId = this.$route.params.client_id;
      const ref = db.collection('clients').doc(docId);

      ref
        .update({
          name: this.name,
          industry: this.industry,
          email: this.email,
          phone: this.phone,
        })
        .then(res => {
          this.$router.push({ name: 'Clients' });
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  created() {
    //fetch data from firestore by client id
    const docId = this.$route.params.client_id;
    const ref = db.collection('clients').doc(docId);

    ref
      .get()
      .then(res => {
        this.client = res.data();
      })
      .catch(err => {
        console.error(err);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: slategray;
}
.custom-cards {
  max-width: 300px;
  min-height: 260px;
  padding: 20px;
}
</style>
