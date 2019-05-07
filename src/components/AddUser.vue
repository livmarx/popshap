<template>
  <div class="add-user">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">
          New User Form
        </h1>
    </div>
    <v-form class="px-5">
      <v-text-field
        label="First Name"
        v-model="firstName"
      ></v-text-field>
      <v-text-field
        label="Last Name"
        v-model="lastName"
      ></v-text-field>
      <v-text-field
        label="Role"
        v-model="role"
      ></v-text-field>
      <v-text-field
        label="Email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Phone"
        v-model="phone"
      ></v-text-field>
      <v-text-field
        label="Notes"
        v-model="notes"
      ></v-text-field>
      <v-btn
        class="mx-0 mt-3"
        @click="submit"
      >
        Create User
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
      firstName: null,
      lastName: null,
      role: null,
      email: null,
      phone: null,
      notes: null,
    };
  },
  methods: {
    submit() {
      db
        .collection('users')
        .add({
          firstName: this.firstName,
          lastName: this.lastName,
          role: this.role,
          email: this.email,
          phone: this.phone,
          notes: this.notes,
        })
        .then(() => {
          this.$router.push({ name: 'Users' });
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


