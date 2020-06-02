<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col  class="d-flex align-center justify-center">
          <div class="px-5 white--text">
            <p class="display-4 text-left font-weight-bold">Welcome to HomeBud!</p>
            <p class="display-2 text-left"> The app that helps you find lost pets</p>
          </div>
        </v-col>
        <v-col  class="d-flex align-center justify-center">
          <v-img :src="logo" aspect-ratio="1.7" contain class="my-10"> </v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col><p></p></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      logo: require('../assets/images/logo.png')
    }
  }
}
</script>
