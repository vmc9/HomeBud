<template>
    <nav>
        <v-app-bar flat app class="primary white--text">
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"/>
            <v-toolbar-title>
                HomeBud
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-title>
                Welcome back {{ this.user.firstname }}!
            </v-toolbar-title>
            <v-spacer/>
            <div class="px-5 mx-5">
                <v-btn v-on:click="logOut()" class="secondary white--text px-5 mx-5" router to='/'>
                    Log Out
                </v-btn>
                <v-btn class="secondary px-5 mx-5" router to='/'>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn class="secondary px-5 mx-5" router :to="userRoute">
                    <v-icon>mdi-account-box</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
    
        <v-navigation-drawer v-model="drawer" app class="secondary">

        </v-navigation-drawer> 
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return{
            drawer: false,
            link: [

            ]
        }
    },
    computed: {
        ...mapGetters(['user', 'authenticated']),
        userRoute: function() { return '/user/' + this.user.username }
    },
    methods: {
        ...mapActions(['clearAuth', 'logoutUser']),
        logOut(){
            this.clearAuth(),
            this.logoutUser()
        }
    }

}
</script>