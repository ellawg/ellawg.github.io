<template>
  <div class="practice">
    <v-ons-page>
      <div class="card" v-for="practice in practices" :key="practice.id">
        <router-link to="/PracticeCard">
        <div class="practice-header">{{practice.name}}</div>
        </router-link>
      </div>
      <!--<PracticeCard/>-->
    </v-ons-page>
  </div>
</template>

<script>
//import PracticeCard from "./PracticeCard"
export default {
  name: "PracticeList",
  //components: PracticeCard,
  data() {
    return {
      practices: [
        {
          name: "Feel Your Feet",
          moves: [
            "Stand on your feet.",
            "Experience the contact with the ground.",
            "Feel into the soles of the feet.",
            "Feel the knees.",
            "The hips.",
            "The spine.",
            "Shoulders.",
            "Neck.",
            "Head.",
            "Feel the connection between the top of the head and the feet."
          ],
          id: 1
        },
        { name: "p2", id: 2 },
        { name: "p3", id: 3 }
      ]
    };
  }
};
</script>


<style scoped>
</style>
