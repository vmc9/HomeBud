<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" id="navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger"
            :class="active ? 'is-active' : ''" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="base"
            @click="toggle()">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
        
      </div>
      <div class="navbar-menu"
        :class="active ? 'is-active' : ''"
        >
        <div id="base" class="navbar-start">
            <a href="" class="navbar-item">HomeBud</a>
        </div>
        <div class="navbar-end">
          <div class="buttons">
            <a href="" class="navbar-item">Sign Up</a>
            <a href="" class="navbar-item">Log In</a>
          </div>
      </div>
      </div> 
  </nav>
</template>

<script>
export default {
    name: 'navBar',
    data() {
        return{
            active: false
        }
    },
    components: {

    },
    methods: {
        toggle(){
            this.active = !this.active;
        }
    }
}
</script>

<style scoped>
    #navigation {
        padding-left: 10px;
        padding-right: 10px;
        background-color: #145DA0;
    }
    .navbar-item {
        color: ghostwhite;
    }
</style>