<template>
  <v-ons-page>
    <v-ons-tabbar position="top" :index.sync="activeIndex" :tabs="tabs">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
//import Header from "./Header"
import PracticeInfo from "./PracticeInfo"
import PracticeInfo2 from "./PracticeInfo2"
import PracticeInfo3 from "./PracticeInfo3"

export default {
  data() {
        return {
            activeIndex: 0,
            tabs: [
                {label: 'Feet', page: PracticeInfo},
                {label: 'Shoulders', page: PracticeInfo2},
                {label: 'Face', page: PracticeInfo3}
            ]
        }
    }
};
</script>


<style scoped>

</style>



