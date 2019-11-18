<template>
    <div>
        <nav v-if="this.$store.getters.anonymous" class="navbar" role="navigation" aria-label="main navigation" id="anon-navigation">
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
                <div class="navbar-end">
                    <div class="buttons">
                        <a class="button navbar-item" @click="register">Sign Up</a>
                        <a class="button navbar-item" @click="login">Log In</a>
                    </div>
                </div>
            </div> 
            <login/>
            <register/>
        </nav>
        <nav v-else  class="navbar" role="navigation" aria-label="main navigation" id="user-navigation">
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
                <div class="navbar-item">
                    <h2 class="subtitle is-4">{{`Welcome ${this.$store.state.user.firstName}!`}}</h2>
                </div>
                <div class="navbar-end">
                    <div class="buttons">
                        <a class="button navbar-item">My Account</a>
                        <a class="button navbar-item">Log Out</a>
                    </div>
                </div>
            </div> 
        </nav>
    </div>
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
    computed: {

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
    .navbar {
        padding-left: 10px;
        padding-right: 10px;
        background-color: #145DA0;
    }
    .button {
        background-color: #B1D4E0;
    }
    .navbar-item, .subtitle, .burger {
        color: ghostwhite;
    }
    .is-active{
        background-color: #145DA0;
        color: ghostwhite;
    }
</style>