<template>
  <div id="app">
    <navBar/>
    <mainBody/>
    <pageFoot/>
  </div>
</template>

<script>
import navBar from './components/navBar';
import mainBody from './components/mainBody';
import pageFoot from './components/pageFoot';

export default {
  name: 'App',
  components: {
    navBar,
    mainBody,
    pageFoot,
  },
};
</script>

<style>
    #app {
      height: 100%;
    }
</style>
