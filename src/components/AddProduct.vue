<template>
  <div class="add-product">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">
          New Product Form
        </h1>
    </div>
    <v-form class="px-5">
      <v-text-field
        label="Client Name"
        v-model="clientName"
      ></v-text-field>
      <v-text-field
        label="Color"
        v-model="color"
      ></v-text-field>
      <v-text-field
        label="Controls"
        v-model="controls"
      ></v-text-field>
      <v-text-field
        label="Device Type"
        v-model="deviceType"
      ></v-text-field>
      <v-text-field
        label="Manufacturer Name"
        v-model="manufacturerName"
      ></v-text-field>
      <v-text-field
        label="Serial Number"
        v-model="serialNumber"
      ></v-text-field>
      <v-text-field
        label="Size"
        v-model="size"
      ></v-text-field>
      <v-text-field
        label="SKU"
        v-model="sku"
      ></v-text-field>
      <v-text-field
        label="Status"
        v-model="status"
      ></v-text-field>
      <v-btn
        class="mx-0 mt-3"
        @click="submit"
      >
        Add Product
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import db from '@/firebase/init.js';
export default {
  name: 'AddProduct',
  data() {
    return {
      clientName: null,
      color: null,
      controls: null,
      deviceType: null,
      manufacturerName: null,
      serialNumber: null,
      size: null,
      sku: null,
      status: null,
    };
  },
  methods: {
    submit() {
      db
        .collection('inventory')
        .add({
          clientName: this.clientName,
          color: this.color,
          controls: this.controls,
          deviceType: this.deviceType,
          manufacturerName: this.manufacturerName,
          serialNumber: this.serialNumber,
          size: this.size,
          sku: this.sku,
          status: this.status,
        })
        .then(() => {
          this.$router.push({ name: 'Inventory' });
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


