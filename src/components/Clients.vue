<template>
  <div class="clients">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">Clients</h1>
    <v-btn class="grey darken-2 white--text">
      <router-link :to="{name: 'AddClient'}">
      New Client<v-icon>add</v-icon>
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
        <v-btn flat color="grey" @click="sortAZ('name')">
          <span>Name: A-Z</span>
        </v-btn>
         <v-btn flat color="grey" @click="sortZA('name')">
          <span>Name: Z-A</span>
        </v-btn>
      </v-layout>
     <!-- Card Layout Starts -->
    <v-layout>
      <v-flex >
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                xs12
                sm6
                md4
                lg3
                v-for="(client, i) in filteredResults"
                :key="i"
              >
                <v-card flat tile >
                  <div class="custom-cards">
                    <h3>{{client.name}}</h3>
                    Industry: {{client.industry}},
                    <br/>
                    Email: {{client.email}},
                    <br/>
                    Phone: {{client.phone}},
                    <br/>
                  </div>
                  <v-btn flat class="mx-1 mt-0" @click="deleteClient(client.id)">
                    <v-icon >delete</v-icon>
                  </v-btn>
                  <v-btn>
                    <router-link :to="{name: 'SingleClient', params: {client_id: client.id}}">
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
export default {
  name: 'Clients',
  data() {
    return {
      clients: [],
      searchInput: {
        seachString: '',
      },
    };
  },
  methods: {
    deleteClient(id) {
      // delete doc/recie from firestore
      db
        .collection('clients')
        .doc(id)
        .delete()
        .then(() => {
          this.clients = this.clients.filter(client => {
            if (client.id.toString().match(id.toString())) {
              return false;
            } else {
              return true;
            }
          });
        });
    },
    sortAZ(sortType) {
      console.log(sortType);
      this.clients.sort((a, b) => {
        return a[sortType].toLowerCase() < b[sortType].toLowerCase() ? -1 : 1;
      });
    },
    sortZA(sortType) {
      console.log(sortType);
      this.clients.sort((a, b) => {
        return a[sortType].toLowerCase() < b[sortType].toLowerCase() ? 1 : -1;
      });
    },
  },
  computed: {
    filteredResults: function() {
      let search = this.searchInput.seachString.toLowerCase();
      return this.clients.filter(client => {
        if (
          (client.name && client.name.toLowerCase().match(search)) ||
          (client.email && client.email.toLowerCase().match(search)) ||
          (client.phone && client.phone.toLowerCase().match(search))
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: slategray;
}
.custom-cards {
  max-width: 200px;
  min-height: 150px;
  max-height: 150px;
  padding: 20px;
}
.search-input {
  margin: 16px;
}
</style>
