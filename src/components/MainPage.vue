<template>
  <v-ons-page>
    <v-ons-tabbar position="top" :index="0" :tabs="tabs">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
//import Header from "./Header"
import PracticeInfo from "./PracticeInfo"
import PracticeInfo2 from "./PracticeInfo2"

export default {
  data: function () {
        return {
            tabs: [
                {label: 'Feet', page: PracticeInfo},
                {label: 'Shoulders', page: PracticeInfo2}
            ]
        }
    }
};
</script>


<style scoped>

</style>



