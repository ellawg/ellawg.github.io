<template>
  <div class="container">
    <Header/>
    <router-link to="/About">
      <v-ons-fab id="button" position="bottom right">
        <v-ons-icon icon="md-info-outline"></v-ons-icon>
      </v-ons-fab>
    </router-link>
    <div class="pList">
      <PracticeList/>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import PracticeList from "./PracticeList";

export default {
  components: {
    Header,
    PracticeList
  },
  data() {
    return {};
  }
};
</script>


<style scoped>
#button {
  background: #e28c8d;
}
</style>



