<template>

  <v-ons-page>
    <v-ons-tabbar class="tab" position="top" swipeable :index.sync="activeIndex" :tabs="tabs">
    </v-ons-tabbar>
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
                {icon: "fa-question", page: About},
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
ons-icon{
  color:lightgray;
}

</style>



