<template>
    <nav>
        <v-app-bar flat app class="primary white--text">
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"/>
            <v-toolbar-title>
                HomeBud
            </v-toolbar-title>
            <v-spacer/>
            <div class="px-5 mx-5">
                <v-btn class="secondary white--text px-5 mx-5" router to='/login'>
                    Log In
                </v-btn>
                <v-btn class="secondary white--text px-5 mx-5" router to='/signup'>
                    Sign Up
                </v-btn>
                <v-btn class="secondary px-5 mx-5" router to='/'>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
    
        <v-navigation-drawer v-model="drawer" app class="secondary">

        </v-navigation-drawer> 
    </nav>
</template>

<script>
export default {
    data() {
        return{
            drawer: false,
            link: [

            ]
        }
    }

}
</script>