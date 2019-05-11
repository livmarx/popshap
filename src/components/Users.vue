<template>
  <div class="users">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">
        Users
      </h1>
      <v-btn class="grey darken-2 white--text">
        <router-link :to="{name: 'AddUser'}">
          New User<v-icon>add</v-icon>
        </router-link>
      </v-btn>
    </div>
    <v-flex xs12 s12 sm12 md12 class="search-input">
      <v-text-field
        label="Search..."
        v-model="searchInput.seachString"
        solo
      ></v-text-field>
    </v-flex>
     <!-- sort by: -->
     <v-layout row class="mb-3">
        <v-btn flat color="grey" @click="sortAZ('firstName')">
          <span>By First Name: A-Z</span>
        </v-btn>
         <v-btn flat color="grey" @click="sortZA('firstName')">
          <span>By First Name: Z-A</span>
        </v-btn>
         <v-btn flat color="grey" @click="sortAZ('lastName')">
          <span>By Last Name: A-Z</span>
        </v-btn>
         <v-btn flat color="grey" @click="sortZA('lastName')">
          <span>By Last  Name: Z-A</span>
        </v-btn>
      </v-layout>
 <!-- Card  layout starts here -->
    <v-layout>
      <v-flex >
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                xs12
                sm6
                md4
                lg3
                v-for="(user, i) in filteredResults"
                :key="i"
              >
                <v-card flat tile >
                  <div class="custom-cards">
                    <h3>
                      {{user.firstName}} {{user.lastName}}
                    </h3>
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

                  <v-btn flat class="mx-1 mt-0" @click="deleteUser(user.id)">
                    <v-icon >delete</v-icon>
                  </v-btn>
                  <v-btn>
                    <router-link :to="{name: 'SingleUser', params: {user_id: user.id}}">
                      More Info
                    </router-link>
                  </v-btn>
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
import { truncate } from 'fs';

// const fields = [
//   {
//     field: "lastName",
//     display: "Last name"
//   },
//   {
//     field: "firstName",
//     ...
//   }
// ]

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      searchInput: {
        seachString: '',
      },
    };
  },
  methods: {
    deleteUser(id) {
      // delete doc/recipe from firestore
      db
        .collection('users')
        .doc(id)
        .delete()
        .then(() => {
          this.users = this.users.filter(user => {
            if (user.id.toString().match(id.toString())) {
              return false;
            } else {
              return true;
            }
          });
        });
    },
    sortAZ(sortType) {
      console.log(sortType);
      this.users.sort((a, b) => {
        if (a[sortType] && b[sortType]) {
          return a[sortType].toLowerCase() < b[sortType].toLowerCase() ? -1 : 1;
        }
      });
    },
    sortZA(sortType) {
      console.log(sortType);
      this.users.sort((a, b) => {
        if (a[sortType] && b[sortType]) {
          return a[sortType].toLowerCase() < b[sortType].toLowerCase() ? 1 : -1;
        }
      });
    },
  },
  computed: {
    filteredResults: function() {
      let search = this.searchInput.seachString.toLowerCase();

      // return this.users.filter(user => fields.some(field => user[field] && user[field].toLowerCase().match(search)))

      return this.users.filter(user => {
        if (
          (user.firstName && user.firstName.toLowerCase().match(search)) ||
          (user.lastName && user.lastName.toLowerCase().match(search)) ||
          (user.email && user.email.toLowerCase().match(search)) ||
          (user.phone && user.phone.toLowerCase().match(search))
        ) {
          return true;
        } else {
          return false;
        }
      });
    },
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
.search-input {
  margin: 16px;
}
</style>
