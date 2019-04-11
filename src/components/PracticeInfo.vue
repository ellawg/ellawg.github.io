<template>
  <div class="practice-info">
    <Header/>
    <v-ons-card>
      <div class="title">{{practice.name}}</div>
      <ul class="info-list">
        <li v-for="(move, index) in practice.moves" :key="index">{{move}}</li>
      </ul>
    </v-ons-card>
  </div>
</template>

<script>
export default {
  name: "PracticeInfo",
  data() {
    return {
      practice: this.$route.params.practice
    };
  }
};
//<div class="title">{{$this.route.params.practice.name}}</div>
</script>


<style scoped>
.practice-info{
  color: #000;
}
.title{
  font-size:2em;
}
</style>
