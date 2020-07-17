<template>
    <v-container fluid style="max-width: 1400px">
        <v-toolbar 
        class="grey darken-4--text"
        style="border-radius: 3px"
        prominent
        dark
        :src="banner"
        >
            <v-toolbar-title>
                HomeBase Dashboard
            </v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col>
                <v-card class="mt-10 mb-10 menu-card" >
                    <v-row no-gutters>
                        <v-col cols="8" class="pt-5 pl-5">
                            <v-card-title class="headline">
                            Pets
                            </v-card-title>
        
                            <v-card-subtitle>
                            Here you can register any of your pets to your HomeBase.<br/> 
                            You can also report a lost Bud and begin a search, or tell us about a pet you found.
                            </v-card-subtitle>
        
                            <v-card-actions>
                                <v-btn router to='/pets/register'>Register your pet</v-btn>
                                <v-btn>Report a missing pet</v-btn>
                                <v-btn>Report a found pet</v-btn>
                            </v-card-actions>
                        </v-col>
                        <v-col cols="4">
                                <v-img :src="pets" aspect-ratio="2.5" class="menu-img"/>
                        </v-col>
                    </v-row>
                </v-card>

                <v-card class="mt-10 mb-10 menu-card">
                    <v-row no-gutters>
                        <v-col cols="8" class="pt-5 pl-5">
                            <v-card-title class="headline">
                            Communities
                            </v-card-title>

                            <v-card-subtitle>
                            Here you can find or start a local pet community.<br/>
                            You can also associate with a community if you are a pet expert.<br/>
                            Building strong pet communities helps prevent pets going missing for long, and can outright prevent it.
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn>Start a community</v-btn>
                                <v-btn>Find a community</v-btn>
                                <v-btn>Register as an expert</v-btn>
                            </v-card-actions> 
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="communities" aspect-ratio="2.5" class="menu-img"/>
                        </v-col>
                    </v-row>               
                </v-card>
                <v-card class="mt-10 mb-10 menu-card">
                    <v-row no-gutters>
                        <v-col cols="8" class="pt-5 pl-5">
                            <v-card-title class="headline">
                            Sightings
                            </v-card-title>

                            <v-card-subtitle>
                            Did you see a pet that looked lost somewhere?<br/>
                            Here you can find some local missing pets where you can share your sighting with owners.
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn>Share a sighting</v-btn>
                                <v-btn>Local search</v-btn>
                            </v-card-actions> 
                        </v-col>
                        <v-col cols="4">
                                <v-img :src="sightings" aspect-ratio="2.5" class="menu-img"/>
                        </v-col>
                    </v-row>                 
                </v-card>
                <v-card class="mt-10 mb-10 menu-card">
                    <v-row no-gutters>
                        <v-col cols="8" class="pt-5 pl-5">
                            <v-card-title class="headline">
                            Profile
                            </v-card-title>
        
                            <v-card-subtitle>
                            Here you can edit your profile and account settings.
                            You can also see the your pets listed in your HomeBase, as well as any communities you belong to.
                            </v-card-subtitle>
        
                            <v-card-actions>
                                <v-btn>My Account</v-btn>
                                <v-btn>My Pets</v-btn>
                                <v-btn>My Communities</v-btn>
                            </v-card-actions>
                        </v-col>
                        <v-col cols="4">
                                <v-img :src="profile" aspect-ratio="2.5" class="menu-img"/>
                        </v-col>
                    </v-row>                 
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            banner: require('../../assets/images/user_banner.png'),
            pets: require('../../assets/images/medium/lin.jpg'),
            communities: require('../../assets/images/medium/community.jpg'),
            sightings: require('../../assets/images/medium/sightings.jpg'),
            profile: require('../../assets/images/medium/profile.jpg'),
        }
    }
}
</script>

<style scoped>
    .menu-card {
        min-height: 200px;
        max-height: 250px;
    }
    .menu-img {
        min-height: 210px;
        max-height: 250px;
        border-radius: 0px 3px 3px 0px;
    }
</style>