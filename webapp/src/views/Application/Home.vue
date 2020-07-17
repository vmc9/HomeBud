<template>
  <div class="home">
    <v-container fluid class="mb-10" style="max-width: 1200px">
      <v-row>
        <v-col  class="d-flex align-center justify-center">
          <div class="px-5 white--text">
            <p class="display-3 text-left font-weight-bold">Welcome to HomeBud!</p>
            <p class="display-1 text-left font-weight-bold"> The app that helps you find lost pets</p>
          </div>
        </v-col>
        <v-col  class="d-flex align-center justify-center">
          <v-img :src="logo" aspect-ratio="1.7" contain class="my-10"  style="width: 400"/>
        </v-col>
      </v-row>

      <home-menu/>

      <v-row class="mb-5">
        <v-col style="max-width: 600px">
          <missing-card/>  
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <p class="display-1 white--text font-weight-bold">
            HomeBud helps you plan  your search for a lost pet.
            <br/> <br/>
            We provide key resources and tools to guide your search efforts and get set up to receive help from others. 
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeMenu from "../../components/HomePage/homeMenu"
import MissingCard from "../../components/MultiPage/missingCard"
export default {
  name: 'Home',
  components: {
    HomeMenu,
    MissingCard
  },
  data() {
    return {
      logo: require('../../assets/images/logo.png'),
      tab: null,
      items: [
        {tab: "I Lost A Pet", content: 'What to do if you lost a pet', icon: "mdi-alert-decagram"},
        {tab: "I Found A Pet", content: 'What to do if you found a pet', icon: 'mdi-eye'},
        {tab: "I Want to Help", content: 'How you can help', icon: 'mdi-heart-circle'}
      ]
    }
  }
}
</script>
