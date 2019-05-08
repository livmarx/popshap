<template>
  <div class="users">
    <div class="banner">
      <h1 class="grey--text text--lighten-2 display-2 font-weight-thin">User: {{user.firstName}}</h1>
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
  methods: {},
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
