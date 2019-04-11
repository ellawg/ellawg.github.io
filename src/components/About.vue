<template>
  <div class="about">
    <Header/>
    <v-ons-card>
      <h2>About</h2>
      <p>Thank you for using our relapping app.</p>
      <p>Sit back and just Relapp...</p>
    </v-ons-card>
    <router-link to="/MainPage">
      <v-ons-fab id="button" position="bottom center">
        <v-ons-icon icon="md-arrow-left"></v-ons-icon>
      </v-ons-fab>
    </router-link>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  components: {
    Header
  }
};
</script>

<style scoped>
p {
  color: navy;
  text-align: center;
}
h2 {
  color: #e28c8d;
  text-align: center;
}
#button {
  background: white;
  color: #e28c8d;
}
</style>


