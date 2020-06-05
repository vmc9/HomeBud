<template>
  <v-app id="app">
    <nav-bar app/>
    <v-content class="blue lighten-3">
      <router-view/>      
    </v-content>
    <page-foot app/>
  </v-app>
</template>

<script>
import NavBar from './components/navBar'
import PageFoot from './components/pageFoot'
export default {
  name: 'App',
  components: {
    NavBar,
    PageFoot
  }
}
</script>
<style>

</style>