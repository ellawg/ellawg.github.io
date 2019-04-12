<template>
  <v-ons-page>
    <v-ons-tabbar position="top" swipeable :index.sync="activeIndex" :tabs="tabs">
    </v-ons-tabbar>
    <Header/>
  </v-ons-page>
</template>

<script>
import PracticeInfo from "./PracticeInfo"
import PracticeInfo2 from "./PracticeInfo2"
import PracticeInfo3 from "./PracticeInfo3"
import About from "./About"


export default {

  data() {
        return {
            activeIndex: 0,
            tabs: [
                {label: 'About', page: About},
                {label: 'Feet', page: PracticeInfo},
                {label: 'Shoulders', page: PracticeInfo2},
                {label: 'Face', page: PracticeInfo3}
                
            ]
        }
    }
};
</script>


<style>
img{
  width:100%;
}

</style>



