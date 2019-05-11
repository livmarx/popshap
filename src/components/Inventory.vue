<template>
  <div class="client2">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">Inventory</h1>
    <v-btn class="grey darken-2 white--text">
      <router-link :to="{name: 'AddProduct'}">
      New Product<v-icon>add</v-icon>
      </router-link>
    </v-btn>
    </div>
     <!-- Search bar: -->
    <v-flex xs12 s12 sm12 md12 class="search-input">
      <v-text-field
        label="Search..."
        v-model="searchInput.seachString"
        solo
      ></v-text-field>
    </v-flex>
     <!-- Sort by: -->
     <v-layout row class="mb-3">
        <v-btn flat color="grey" @click="sortAZ('name')">
          <span>Name: A-Z</span>
        </v-btn>
         <v-btn flat color="grey" @click="sortZA('name')">
          <span>Name: Z-A</span>
        </v-btn>
      </v-layout>
      <!-- Card layout starts here: -->
    <v-layout>
      <v-flex >
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                xs12
                sm6
                md4
                lg3
                v-for="(product, i) in filteredResults"
                :key="i"
              >
                <v-card flat tile >
                  <div class="custom-cards">
                    <h3>{{product.deviceType}}</h3>
                    Client Name: {{product.clientName}},
                    <br/>
                    Color: {{product.color}},
                    <br/>
                    Controls: {{product.controls}},
                    <br/>
                    Man. Name: {{product.manufacturerName}},
                    <br/>
                    Serial No.: {{product.serialNumber}},
                    <br/>
                    Size: {{product.size}},
                    <br/>
                    SKU: {{product.sku}},
                    <br/>
                    Status: {{product.status}},
                    <br/>
                  </div>
                  <v-btn flat class="mx-1 mt-0" @click="deleteProduct(product.id)">
                    <v-icon >delete</v-icon>
                  </v-btn>
                  <v-btn>
                    <router-link :to="{name: 'SingleProduct', params: {product_id: product.id}}">
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
  name: 'Client2',
  data() {
    return {
      inventory: [],
      searchInput: {
        seachString: '',
      },
    };
  },
  methods: {
    deleteProduct(id) {
      // delete doc/recie from firestore
      db
        .collection('inventory')
        .doc(id)
        .delete()
        .then(() => {
          this.inventory = this.inventory.filter(product => {
            if (product.id.toString().match(id.toString())) {
              return false;
            } else {
              return true;
            }
          });
        });
    },
    sortAZ(sortType) {
      console.log(sortType);
      this.users.sort(
        (a, b) =>
          a[sortType].toLowerCase() < b[sortType].toLowerCase() ? -1 : 1
      );
    },
    sortZA(sortType) {
      console.log(sortType);
      this.users.sort(
        (a, b) =>
          a[sortType].toLowerCase() < b[sortType].toLowerCase() ? 1 : -1
      );
    },
  },
  computed: {
    filteredResults: function() {
      let search = this.searchInput.seachString.toLowerCase();
      return this.inventory.filter(product => {
        if (
          (product.clientName &&
            product.clientName.toLowerCase().match(search)) ||
          (product.color && product.color.toLowerCase().match(search)) ||
          (product.deviceType &&
            product.deviceType.toLowerCase().match(search)) ||
          (product.manufacturerName &&
            product.manufacturerName.toLowerCase().match(search)) ||
          (product.controls && product.controls.toLowerCase().match(search)) ||
          (product.serialNumber &&
            product.serialNumber.toLowerCase().match(search)) ||
          (product.size && product.size.toLowerCase().match(search)) ||
          (product.sku && product.sku.toLowerCase().match(search)) ||
          (product.status && product.status.toLowerCase().match(search))
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
      .collection('inventory')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let product = doc.data();
          product.id = doc.id;
          this.inventory.push(product);
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
  min-width: 150px;
  min-height: 250px;
  max-height: 250px;
  padding: 20px;
}
.search-input {
  margin: 16px;
}
</style>
