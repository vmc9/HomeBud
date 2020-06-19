<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col>
                    <div class="primary--text py-5">
                        <div class="d-flex">
                        <h1 class="">You are someone's Hero!</h1><v-icon class="primary--text ml-3">mdi-heart</v-icon>
                        </div>
                        <h3 class="my-5">
                            You've found someone's bud! Let's get them back home.
                            <br/><br/>
                            HomeBud will provide you a set of resources that can help you return this pet to their owner.
                        </h3>
                        <div>
                            <v-btn class="primary" left router to='/login'>Login to let others know you found a pet<v-icon class="mx-3">mdi-card-search</v-icon></v-btn>    
                            <v-btn class="primary mt-5" left router to='/signup'>Sign up to get started if you're new to HomeBud<v-icon class="mx-3">mdi-lifebuoy</v-icon></v-btn>    
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <v-img :src="lost" aspect-ratio="1.5" contain style="max-width: 500px, min-width: 500px"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lost: require("../../assets/images/medium/found_dog.png")
        }
    }
    
}
</script>