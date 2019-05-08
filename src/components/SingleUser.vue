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
    console.log('start of created life hook!');
    console.log('this.$route.params.user_id: ', this.$route.params.user_id);
    let ref = db
      .collection('users')
      .where('id', '==', this.$route.params.user_id);
    console.log('ref: ', ref);
    ref.get().then(snapshot => {
      console.log('snapshot: ', snapshot);
      console.log('snapshot.length: ', snapshot.length);
      console.log('typeof snapshot: ', typeof snapshot);
      snapshot.forEach(doc => {
        console.log('doc', doc);
        console.log('doc.data()', doc.data());
        this.user = doc.data();
        this.user.id = doc.id;
        console.log(this.user);
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
