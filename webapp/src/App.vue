<template>
  <v-app id="app">
    <user-bar app v-if="this.authenticated"/>
    <nav-bar app v-else/>
    <v-content class="blue lighten-3">
      <router-view/>      
    </v-content>
    <page-foot app/>
  </v-app>
</template>

<script>
import NavBar from './components/navBar'
import UserBar from './components/UserPage/userBar'
import PageFoot from './components/pageFoot'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    //TODO: Modify nav bar based on logged in status (Log out button, etc)
    NavBar,
    UserBar,
    PageFoot
  },
  data() {
    return {

    }
  },
  computed: {
        ...mapGetters(['authenticated'])

  },
  methods: {

  }
}
</script>
<style>

</style>