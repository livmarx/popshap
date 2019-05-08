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
    <v-layout>
      <v-flex >
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                xs12
                sm6
                md4
                lg3
                v-for="(product, i) in inventory"
                :key="i"
              >
                <v-card flat tile >
                  <div class="custom-cards">
                    <h3>{{product.deviceType}}</h3>
                    Client Name: {{product.clientName}},
                    <br/>
                    Color: {{product.color}},
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
  min-height: 250px;
  max-height: 250px;
  padding: 20px;
}
</style>
