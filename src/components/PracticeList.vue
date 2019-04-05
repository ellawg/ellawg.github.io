<template>
  <div class="practice">
    <v-ons-page>
      <PracticeCard/>
    </v-ons-page>
  </div>
</template>

<script>
export default {
  name: 'PracticeList',
  components: PracticeCard,
  data(){
    return {
      practice1: {name: 'p1', id: 1},
      practice2: {name: 'p2', id: 2},
      practice3: {name: 'p3', id: 3}
    }
  }
}
</script>


<style scoped>

</style>
