<template>
  <div class="practice-info">
    <v-ons-card>
			<h1 class="title">Feel Your</h1>
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
</template>

<script>
export default {
  name: "PracticeInfo2",
};
//<div class="title">{{$this.route.params.practice.name}}</div>
</script>


<style scoped>
.practice-info {
  color: #000;
}
.title {
  font-size: 2em;
}
</style>
