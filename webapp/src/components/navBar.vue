<template>
    <nav>
        <v-app-bar flat app class="primary white--text">
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"/>
            <v-app-bar-title >
                HomeBud
            </v-app-bar-title>
            <v-spacer/>
            <div class="px-5 mx-5">
                <v-btn class="secondary white--text px-5 mx-5">
                    Log In
                </v-btn>
                <v-btn class="secondary white--text px-5 mx-5" href="http://localhost:8080/signup">
                    Sign Up
                </v-btn>
            </div>
        </v-app-bar>
    
        <v-navigation-drawer v-model="drawer" app class="secondary">

        </v-navigation-drawer> 
    </nav>
</template>

<script>
export default {
    name: 'navBar',
    data() {
        return{
            drawer: false
        }
    }

}
</script>