<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col>
                    <v-img :src="lost" aspect-ratio="1.5" contain style="max-width: 500px, min-width: 500px"/>
                </v-col>
                <v-col>
                    <div class="primary--text py-5">
                        <div class="d-flex">
                        <h1 class="">It's going to be OK!</h1><v-icon class="primary--text ml-3">mdi-white-balance-sunny</v-icon>
                        </div>                        <h3 class="my-5 mr-10">
                            Losing a bud is stressfull, but you're in the right place, we can help.
                            <br/><br/>
                            HomeBud was designed to give you a set of tools to help you bring your pet home.
                        </h3>
                        <div>
                            <v-btn class="primary" left router to='/login'>Login to begin your search<v-icon class="mx-3">mdi-card-search</v-icon></v-btn>    
                            <v-btn class="primary mt-5" left  router to='/signup'>Sign up to get started if you're new to HomeBud<v-icon class="mx-3">mdi-lifebuoy</v-icon></v-btn>    
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lost: require("../../assets/images/medium/lost_dog.png")
        }
    }
    
}
</script>