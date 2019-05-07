<template>
  <div class="users">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">Users</h1>
    <v-btn class="grey darken-2 white--text">
      <router-link :to="{name: 'AddUser'}">
      New User<v-icon>add</v-icon>
      </router-link>
    </v-btn>
    </div>
    <v-layout>
      <v-flex >
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                xs12
                sm6
                md4
                lg3
                v-for="(user, i) in users"
                :key="i"
              >
                <v-card flat tile >
                  <div class="custom-cards">
                    <h3>{{user.firstName}} {{user.lastName}}</h3>
                    Role: {{user.role}},
                    <br/>
                    Email: {{user.email}},
                    <br/>
                    Phone: {{user.phone}},
                    <br/>
                    <br/>
                    Notes:
                    <br/>
                    {{user.notes | snippet}}
                    <br/>
                  </div>
                    <!-- <v-btn class="grey darken-2 white--text">
                      <v-icon>edit</v-icon>
                    </v-btn> -->
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
      </v-flex>
    </v-layout>
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
