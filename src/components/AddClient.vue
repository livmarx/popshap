<template>
  <div class="add-user">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">
          New Client Form
        </h1>
    </div>
    <v-form class="px-5">
      <v-text-field
        label="Name"
        v-model="name"
      ></v-text-field>
      <v-text-field
        label="Industry"
        v-model="industry"
      ></v-text-field>
      <v-text-field
        label="Email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Phone"
        v-model="phone"
      ></v-text-field>
      <v-btn
        class="mx-0 mt-3"
        @click="submit"
      >
        Create Client
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import db from '@/firebase/init.js';
export default {
  name: 'AddUser',
  data() {
    return {
      name: null,
      industry: null,
      email: null,
      phone: null,
    };
  },
  methods: {
    submit() {
      db
        .collection('clients')
        .add({
          name: this.name,
          industry: this.industry,
          email: this.email,
          phone: this.phone,
        })
        .then(() => {
          this.$router.push({ name: 'Clients' });
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
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
