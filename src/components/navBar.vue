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
      <div class="navbar-menu" :class="active ? 'is-active' : ''">
        <div id="base" class="navbar-start">
            <a class="navbar-item">HomeBud</a>
        </div>
        <div class="navbar-end">
          <div class="buttons">
            <a class="navbar-item" @click="register">Sign Up</a>
            <a class="navbar-item" @click="login">Log In</a>
          </div>
        </div>
    </div> 
    <login/>
    <register/>
  </nav>
</template>

<script>
import login from './login';
import register from './register';

export default {
    name: 'navBar',
    data() {
        return{
            active: false,
        }
    },
    components: {
        login,
        register
    },
    methods: {
        toggle(){
            this.active = !this.active;
        },
        login(){
            this.$store.commit('openLogin');
        },
        register(){
            this.$store.commit('openRegister');
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
    .burger{
        color: ghostwhite;
    }
    .is-active{
        background-color: #145DA0;
        color: ghostwhite;
    }
</style>