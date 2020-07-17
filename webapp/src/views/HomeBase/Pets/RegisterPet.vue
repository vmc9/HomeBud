<template>
    <v-container fluid style="max-width: 1400px">
        <v-toolbar style="border-radius: 3px" prominent class="">
            <v-toolbar-title>
                Register a Pet
            </v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col>
                <v-stepper v-model="step">
                    <v-stepper-header>
                        <v-stepper-step step="1" :complete="step > 1">Pet Type</v-stepper-step>
                        <v-stepper-step step="2" :complete="step > 2">Pet Details</v-stepper-step>
                        <v-stepper-step step="3" :complete="step > 3">Pet Photo</v-stepper-step>
                        <v-stepper-step step="4">Pet Summary</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card class="pa-10">
                                <v-row>
                                    <v-col>
                                        <v-card-title class="justify-center">What kind of pet are you registering?</v-card-title>
                                        <v-row>
                                            <v-col>
                                                <v-img :src="dog" contain aspect-ratio="2.5"/>
                                                <v-row justify="center" class="pt-10">
                                                    <v-btn x-large @click="type = 'dog'" :class="dogcheck">My Pet is a Dog</v-btn>
                                                </v-row>
                                            </v-col>
                                            <v-col>
                                                <v-img :src="cat" contain aspect-ratio="2.5" />
                                                <v-row justify="center" class="pt-10">
                                                    <v-btn x-large @click="type = 'cat'" :class="catcheck">My Pet is a Cat</v-btn>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row justify="center" class="pt-3">
                                    <v-spacer/>
                                    <v-btn centered @click="next" x-large class="primary mx-5">Next</v-btn>
                                </v-row>
                            </v-card>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card class="pa-10">
                                <v-row>
                                    <v-col>
                                        <v-card-title class="justify-center">Tell Us More About Your Pet!</v-card-title>
                                        <v-row>
                                            
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row justify="center" class="pt-3">
                                    <v-btn centered @click="prev" x-large class="primary mx-5">Previous</v-btn>
                                    <v-spacer/>
                                    <v-btn centered @click="next" x-large class="primary mx-5">Next</v-btn>
                                </v-row>
                            </v-card>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <v-card class="pa-10">
                                <v-row>
                                    <v-col>
                                        <v-card-title class="justify-center">Share Your Pet's Picture!</v-card-title>
                                        <v-row>
                                            
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row justify="center" class="pt-3">
                                    <v-btn centered @click="prev" x-large class="primary mx-5">Previous</v-btn>
                                    <v-spacer/>
                                    <v-btn centered @click="next" x-large class="primary mx-5">Next</v-btn>
                                </v-row>
                            </v-card>
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <v-card class="pa-10">
                                <v-row>
                                    <v-col>
                                        <v-card-title class="justify-center">Pet Summary</v-card-title>
                                        <v-row>
                                            
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row justify="center" class="pt-3">
                                    <v-btn centered @click="prev" x-large class="primary mx-5">Previous</v-btn>
                                    <v-spacer/>
                                    <v-btn centered x-large class="primary mx-5">Submit</v-btn>
                                </v-row>
                            </v-card>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            step: 1,
            type: '',
            details: {

            },
            photo: '',
            dog: require('../../../assets/images/medium/dog.png'),
            cat: require('../../../assets/images/medium/cat.png')
        }
    },
    computed: {
        dogcheck: function() { return (this.type == 'dog' ? 'success' : '')},
        catcheck: function() { return (this.type == 'cat' ? 'success' : '')},
    },
    methods: {
        next: function(){
            if(this.step == 4){
                this.step = 1
            } else {
                this.step = this.step + 1
            }
        },
        prev: function(){
            if(this.step != 1){
                this.step = this.step - 1
            }
        }
    }
}
</script>

<style>

</style>