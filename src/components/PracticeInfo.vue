<template>
<v-ons-page>
  <div class="practice-info">
    <Header/>
    <v-ons-card>
			<h1 class="title">Feel Your Feet</h1>
			<img src="../assets/photo-feet.jpg"/>
			<ul>
				<li>Stand on your feet.</li>
				<li>Experience the contact with the ground.</li>
				<li>Feel into the soles of the feet.</li>
				<li>Feel the knees.</li>
				<li>The hips.</li>
				<li>The spine.</li>
				<li>Shoulders.</li>
				<li>Neck.</li>
				<li>Head.</li>
				<li>Feel the connection between the top of the head and the feet.</li>
			</ul>
    </v-ons-card>
  </div>
	</v-ons-page>
</template>

<script>
import Header from "./Header"
export default {
  name: "PracticeInfo",
    components:{
   Header
  },
};
</script>


<style scoped>
.practice-info {
  color: #000;
}
.title {
  font-size: 2em;
}
</style>
