<template>
  <div class="inventory">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">Inventory</h1>
    </div>
      <div
        v-for="(product, i) in inventory"
        :key="i"
      >
      <h3>{{ product.clientName }}</h3>
      <p>deviceType: {{ product.deviceType }}</p>
      <p>color: {{ product.color }}</p>
      <p>controls: {{ product.controls }}</p>
      <p>manufacturerName: {{ product.manufacturerName }}</p>
      <p>serialNumber: {{ product.serialNumber }}</p>
      <p>size: {{ product.size }}</p>
      <p>sku: {{ product.sku }}</p>
      <p>status: {{ product.status }}</p>
      <br/>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';
export default {
  name: 'Inventory',
  data() {
    return {
      inventory: [],
    };
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
  background-color: slategray;
}
</style>
