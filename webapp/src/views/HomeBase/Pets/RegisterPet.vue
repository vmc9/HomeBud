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
                        <!--Pet Type-->
                        <v-stepper-content step="1">
                            <v-card class="pa-10">
                                <v-row>
                                    <v-col>
                                        <v-card-title class="justify-center">What kind of pet are you registering?</v-card-title>
                                        <v-row>
                                            <v-col>
                                                <v-img :src="dog" contain aspect-ratio="2.5"/>
                                                <v-row justify="center" class="pt-10">
                                                    <v-btn x-large @click="details.type = 'dog'" :class="dogcheck">My Pet is a Dog</v-btn>
                                                </v-row>
                                            </v-col>
                                            <v-col>
                                                <v-img :src="cat" contain aspect-ratio="2.5" />
                                                <v-row justify="center" class="pt-10">
                                                    <v-btn x-large @click="details.type = 'cat'" :class="catcheck">My Pet is a Cat</v-btn>
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
                            <v-snackbar
                            v-model="warning"
                            dark
                            :timeout=timeout
                            >
                                We need to know what kind of pet you have before moving forward
                            </v-snackbar>
                        </v-stepper-content>
                        <!--Pet Details-->
                        <!--Complete validation-->
                        <v-stepper-content step="2">
                            <v-card class="pa-10">
                                <v-row>
                                    <v-col>
                                        <v-card-title class="justify-center">Tell Us More About Your Pet!</v-card-title>
                                        <v-form>
                                            <v-row class="pa-10">
                                                <v-col>
                                                    <v-text-field
                                                    v-model="details.name"
                                                    label="Name"
                                                    :error-messages="nameErrors"                    
                                                    @input="$v.details.name.$touch()"
                                                    @blur="$v.details.name.$touch()"
                                                    required/>
                                                </v-col>
                                                <v-col>
                                                    <v-text-field
                                                    v-model="details.breed"
                                                    label="Breed"
                                                    hint="Or Breed Mix!"
                                                    :error-messages="breedErrors"                    
                                                    @input="$v.details.breed.$touch()"
                                                    @blur="$v.details.breed.$touch()"
                                                    required/>
                                                </v-col>
                                                <v-col>
                                                    <v-text-field
                                                    v-model="details.color"
                                                    label="Color"
                                                    :error-messages="colorErrors"                    
                                                    @input="$v.details.color.$touch()"
                                                    @blur="$v.details.color.$touch()"
                                                    required/>
                                                </v-col>
                                            </v-row>
                                            <v-row class="pa-10">
                                                <v-col>
                                                    <v-select
                                                    v-model="details.age"
                                                    :items="agecheck"
                                                    label="Age"
                                                    :error-messages="ageErrors"                    
                                                    @input="$v.details.age.$touch()"
                                                    @blur="$v.details.age.$touch()"
                                                    required/>
                                                </v-col>
                                                <v-col>
                                                    <v-select
                                                    v-model="details.size"
                                                    label="Size"
                                                    :items="sizes"
                                                    :error-messages="sizeErrors"                    
                                                    @input="$v.details.size.$touch()"
                                                    @blur="$v.details.size.$touch()"
                                                    required/>
                                                </v-col>
                                                <v-col>
                                                    <v-select
                                                    v-model="details.sex"
                                                    label="Sex"
                                                    :items="sexes"
                                                    :error-messages="sexErrors"                    
                                                    @input="$v.details.sex.$touch()"
                                                    @blur="$v.details.sex.$touch()"
                                                    required/>
                                                </v-col>
                                            </v-row>
                                            <v-row class="pa-10">
                                                <v-col>
                                                    <v-textarea
                                                    counter
                                                    no-resize
                                                    clearable
                                                    clear-icon="mdi-close"
                                                    v-model="details.description"
                                                    :error-messages="descriptionErrors"                    
                                                    @input="$v.details.description.$touch()"
                                                    @blur="$v.details.description.$touch()"
                                                    label="Description"
                                                    hint="Tell us what you think makes your Bud unique and identifiable!"
                                                    outlined/>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-col>
                                </v-row>
                                <v-row justify="center" class="pt-3">
                                    <v-btn centered @click="prev" x-large class="primary mx-5">Previous</v-btn>
                                    <v-spacer/>
                                    <v-btn centered @click="next" x-large class="primary mx-5">Next</v-btn>
                                </v-row>
                            </v-card>
                            <v-snackbar
                            v-model="warning"
                            dark
                            :timeout=timeout
                            >
                                We need to know more about your pet before moving forward
                            </v-snackbar>
                        </v-stepper-content>
                        <!--Pet Photos-->
                        <v-stepper-content step="3">
                            <v-card class="pa-10">
                                <v-row>
                                    <v-col>
                                        <v-card-title class="justify-center">Share Your Pet's Pictures!</v-card-title>
                                        <v-row>
                                            <v-col>
                                                <v-file-input
                                                :rules="rules"
                                                multiple
                                                v-model='pictures'
                                                show-size
                                                accept="image/*"
                                                outlined
                                                counter
                                                color="primary"
                                                label="Please only attach image files">
                                                    <template v-slot:selection="{ text }">
                                                            <v-chip
                                                              color="primary"
                                                              dark
                                                              label
                                                              small
                                                            >
                                                              {{ text }}
                                                            </v-chip>
                                                    </template>
                                                </v-file-input>
                                            </v-col>
                                        </v-row>
                                        <v-card-title class="justify-center">
                                            Add up to 5 picutres of your pet to give a complete picture of their appearance
                                        </v-card-title>
                                        <v-card-title class="justify-center">
                                            Hold the CTRL key while selecting files to pick more than one
                                        </v-card-title>
                                        <v-card-title class="primary--text justify-center">
                                            Max total file size is 500 kB
                                        </v-card-title>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col v-for="pic in preview" :key="pic">
                                        <v-row justify="center">
                                            <v-img :src="pic" contain aspect-ratio="2.5" class="preview"/>
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
                        <!--Pet Summary-->
                        <v-stepper-content step="4">
                            <v-card class="pa-10">
                                <v-row>
                                    <v-col>
                                        <v-card>
                                            <v-row justify="center" class="py-3">
                                                    <v-avatar size="150"><v-img :src="profile" alt=""/></v-avatar>
                                            </v-row>
                                            <v-row justify="center">
                                                    <v-card-title>{{ details.name }}'s Details</v-card-title>
                                            </v-row>
                                            <v-simple-table>
                                                <tbody>
                                                    <tr v-for="(detail, key) in details" :key="key">
                                                        <template v-if="key != 'description'">
                                                            <td v-if="detail != ''" class="text-center" style="width: 600px">{{key}}</td> 
                                                            <td v-if="detail != ''" class="text-center" style="width: 600px">{{detail}}</td>
                                                        </template>
                                                        <template v-else>
                                                            <td class="text-center" colspan="2">{{detail}}</td>
                                                        </template>
                                                    </tr>
                                                </tbody>
                                            </v-simple-table>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                <v-divider/>
                                <v-row>
                                    <v-col>
                                        <v-card>
                                            <v-card-title class="justify-center">Pet Gallery</v-card-title>
                                            <v-row>
                                                <v-col v-for="(pic, index) in preview" :key="index">
                                                    <v-row justify="center">
                                                        <v-img  :src="pic" contain aspect-ratio="2.5" @click="select_profile(index)" class="preview"/>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                            <v-card-title class="justify-center">Select one photo to be your pet's profile picture</v-card-title>
                                        </v-card>
                                    </v-col>
                                </v-row>

                                <v-row justify="center" class="pt-3">
                                    <v-btn centered @click="prev" x-large class="primary mx-5">Previous</v-btn>
                                    <v-spacer/>
                                    <v-btn centered x-large class="primary mx-5">Clear</v-btn>
                                    <v-spacer/>
                                    <v-btn centered @click="submit" x-large class="primary mx-5">Submit</v-btn>
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
import { required } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            step: 1,
            details: {
                type: '',
                name: '',
                breed: '',
                size: '',
                age: '',
                sex: '',
                color: '',
                description: ''
            },
            pictures: [],
            sizes: ['Small', 'Medium', 'Large'],
            sexes: ['Male', 'Female'],
            cat_ages: ['Kitten (0 - 7 Months)', 'Junior (7 months - 2 Years)', 'Adult (2 Years - 6 Years)', 'Mature (6 Years - 10 Years)', 'Senior (Older than 10 Years)'],
            dog_ages: ['Puppy (0 - 7 Months)', 'Junior (7 months - 2 Years)', 'Adult (2 Years - 6 Years)', 'Mature (6 Years - 10 Years)', 'Senior (Older than 10 Years)'],
            profile: require('../../../assets/images/medium/nice.jpg'),
            dog: require('../../../assets/images/medium/dog.png'),
            cat: require('../../../assets/images/medium/cat.png'),
            warning: false,
            timeout: 5000,
            rules: [
                value => !value || value.size < 500000 || 'Uploads must be less than 500Kb'
            ]
        }
    },
    computed: {
        dogcheck() { return (this.details.type == 'dog' ? 'success' : '')},
        catcheck() { return (this.details.type == 'cat' ? 'success' : '')},
        agecheck() {
            let animal = ['Young (0 - 7 Months)', 'Junior (7 months - 2 Years)', 'Adult (2 Years - 6 Years)', 'Mature (6 Years - 10 Years)', 'Senior (Older than 10 Years)'] 
            if(this.details.type == 'dog'){
                animal = this.dog_ages
            } else if(this.details.type == 'cat'){
                animal = this.cat_ages
            }
            return animal
        },
        preview() {
            let prevpictures = []
            let current = ''
            if(this.pictures.length > 0){
                this.pictures.forEach(pic => {
                    current = URL.createObjectURL(pic)
                    prevpictures.push(current)
                });
            }
            return prevpictures
        },
        typeval(){ return this.details.type == ''},
        nameErrors(){
            const errors = []
            if (!this.$v.details.name.$dirty) return errors
            !this.$v.details.name.required && errors.push('Pet Name is required.')
            return errors
        },
        breedErrors(){
            const errors = []
            if (!this.$v.details.breed.$dirty) return errors
            !this.$v.details.breed.required && errors.push('Pet Breed is required.')
            return errors
        },
        sizeErrors(){
            const errors = []
            if (!this.$v.details.size.$dirty) return errors
            !this.$v.details.size.required && errors.push('Pet Size is required.')
            return errors
        },
        ageErrors(){
            const errors = []
            if (!this.$v.details.age.$dirty) return errors
            !this.$v.details.age.required && errors.push('Pet Age is required.')
            return errors
        },
        sexErrors(){
            const errors = []
            if (!this.$v.details.sex.$dirty) return errors
            !this.$v.details.sex.required && errors.push('Pet Sex is required.')
            return errors
        },
        colorErrors(){
            const errors = []
            if (!this.$v.details.color.$dirty) return errors
            !this.$v.details.color.required && errors.push('Pet Color is required.')
            return errors
        },
        descriptionErrors(){
            const errors = []
            if (!this.$v.details.description.$dirty) return errors
            !this.$v.details.description.required && errors.push('Pet Description is required.')
            return errors
        }
    },
    methods: {
        next: function(){
            if(this.step == 1){
                if(this.details.type == ''){
                    this.warning = true
                } else {
                    this.warning = false
                    this.step = this.step + 1
                }
            } else if(this.step == 2){
                this.$v.$touch()
                if(this.$v.$invalid){
                    this.warning = true
                } else {
                    this.warning = false
                    this.step = this.step + 1
                }
            } else if(this.step ==3){
                this.step = this.step + 1
            }
        },
        prev: function(){
            this.profile = require('../../../assets/images/medium/nice.jpg')
            if(this.step != 1){
                this.step = this.step - 1
                this.warning = false
            }
        },
        submit: function(){
            console.log(this.$data)
        },
        select_profile: function(index){
            this.profile = this.preview[index]
        }
    },
    validations: {
        details: {
            name: {
                required
            },
            breed: {
                required
            },
            size: {
                required
            },
            age: {
                required
            },
            sex: {
                required
            },
            color: {
                required
            },
            description: {
                required
            }
        }
    }   
}
</script>

<style>
    .preview{
        min-width: 150px;
        max-width: 200px;
        min-height: 150px;
        max-height: 200px;
    }
</style>