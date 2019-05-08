<template>
  <div class="single-users">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">
        {{user.firstName}} {{user.lastName}}
      </h1>
    </div>
    <br/>
    <div>
      <v-form class="px-5" >
        <v-text-field
          label="First Name"
          v-model="user.firstName"
        ></v-text-field>
        <v-text-field
          label="Last Name"
          v-model="user.lastName"
        ></v-text-field>
        <v-text-field
          label="Role"
          v-model="user.role"
        ></v-text-field>
        <v-text-field
          label="Email"
          v-model="user.email"
        ></v-text-field>
        <v-text-field
          label="Phone"
          v-model="user.phone"
        ></v-text-field>
        <v-text-field
          label="Notes"
          v-model="user.notes"
        ></v-text-field>
        <v-btn
          class="mx-0 mt-3"
          @click="updateUser"
        >Update User Info</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';
export default {
  name: 'SingleUser',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    updateUser() {
      const docId = this.$route.params.user_id;
      const ref = db.collection('users').doc(docId);

      ref
        .update({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          role: this.user.role,
          email: this.user.email,
          phone: this.user.phone,
          notes: this.user.notes,
        })
        .then(res => {
          this.$router.push({ name: 'Users' });
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  created() {
    //fetch data from firestore by user id
    const docId = this.$route.params.user_id;
    const ref = db.collection('users').doc(docId);

    ref
      .get()
      .then(res => {
        console.log(res.data());
        this.user = res.data();
        console.log(this.user);
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
