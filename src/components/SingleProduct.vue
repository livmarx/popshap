<template>
  <div class="single-product">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">
        {{product.deviceType}}: {{this.$route.params.product_id}}
      </h1>
    </div>
    <br/>
    <div>
     <v-form class="px-5">
       <v-text-field
        label="Product Type"
        v-model="product.deviceType"
      ></v-text-field>
      <v-text-field
        label="Client Name"
        v-model="product.clientName"
      ></v-text-field>
      <v-text-field
        label="Color"
        v-model="product.color"
      ></v-text-field>
      <v-text-field
        label="Controls"
        v-model="product.controls"
      ></v-text-field>
      <v-text-field
        label="Device Type"
        v-model="product.deviceType"
      ></v-text-field>
      <v-text-field
        label="Manufacturer Name"
        v-model="product.manufacturerName"
      ></v-text-field>
      <v-text-field
        label="Serial Number"
        v-model="product.serialNumber"
      ></v-text-field>
      <v-text-field
        label="Size"
        v-model="product.size"
      ></v-text-field>
      <v-text-field
        label="SKU"
        v-model="product.sku"
      ></v-text-field>
      <v-text-field
        label="Status"
        v-model="product.status"
      ></v-text-field>
      <v-btn
        class="mx-0 mt-3"
        @click="updateProduct"
      >
        Update Product Info
      </v-btn>
    </v-form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';
export default {
  name: 'SingleProduct',
  data() {
    return {
      product: {},
    };
  },
  methods: {
    updateProduct() {
      const docId = this.$route.params.product_id;
      const ref = db.collection('inventory').doc(docId);

      ref
        .update({
          clientName: this.product.clientName,
          color: this.product.color,
          controls: this.product.controls,
          deviceType: this.product.deviceType,
          manufacturerName: this.product.manufacturerName,
          serialNumber: this.product.serialNumber,
          size: this.product.size,
          sku: this.product.sku,
          status: this.product.status,
        })
        .then(res => {
          this.$router.push({ name: 'Inventory' });
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  created() {
    //fetch data from firestore by client id
    const docId = this.$route.params.product_id;
    const ref = db.collection('inventory').doc(docId);

    ref
      .get()
      .then(res => {
        this.product = res.data();
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
