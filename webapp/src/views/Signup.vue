<template>
  <div class="signup">
    <v-container class="white my-10 elevation-20" style="max-width: 1200px">
        <v-row> 
          <v-col cols="12" class="d-flex align-center justify-center"> 
            <v-img :src="title" aspect-ratio="3" contain style="max-width: 500px"/>
          </v-col>
        </v-row>
        <div align="center" class="d-flex align-center justify-center">
            <p class="subtitle-1" style="width: 800px">
              You're just one step away from being closer to reuniting with your best bud.
              <br/><br/>
              We just need a few details from you.</p>
          </div>
        <v-form> 
          <v-row class="d-flex align-center justify-center">  
              <v-col cols="5">
                  <v-text-field
                    v-model="firstname"
                    :error-messages="firstNameErrors"
                    label="First name"
                    required
                    @input="$v.firstname.$touch()"
                    @blur="$v.firstname.$touch()"
                  ></v-text-field>
              </v-col>
              <v-col cols="5" justify="center">
                  <v-text-field
                  v-model="lastname"
                  :error-messages="lastNameErrors"
                  label="Last name"
                  required
                  @input="$v.lastname.$touch()"
                  @blur="$v.lastname.$touch()"
                  ></v-text-field>
              </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center">
              <v-col cols="5">
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="Email"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
              </v-col>
              <v-col cols="5">
                  <v-text-field
                    v-model="postalcode"
                    :error-messages="postalErrors"
                    label="Postal Code"
                    required
                    @input="$v.postalcode.$touch()"
                    @blur="$v.postalcode.$touch()"
                  ></v-text-field>
              </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="5">
                <v-text-field
                  v-model="username"
                  :error-messages="usernameErrors"
                  label="User name"
                  required
                  @input="$v.username.$touch()"
                  @blur="$v.username.$touch()"
                ></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  label="Password"
                  required
                  type="password"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>
            </v-col>
          </v-row>
          <div align="center" class="my-10">
            <p class="caption" style="width: 500px">Your password should be 8-16 characters long, and include a combination of uppercase and lower case letters, numbers, and special digits.</p>
            <v-btn class="mr-4" @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </div>
        </v-form>
      </v-container>
      <v-container class="primary" style="max-width: 1200px">
        <v-row class="justify-center align-center">
          <v-col class="d-flex justify-center">
            <v-img :src="banner1" aspect-ratio="1.7" contain style="max-width: 500px"/>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-img :src="banner2" aspect-ratio="1.7" contain style="max-width: 500px"/>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-img :src="banner3" aspect-ratio="1.7" contain style="max-width: 500px"/>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import { required, minLength, email, helpers} from 'vuelidate/lib/validators'
const pass = helpers.regex('pass', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)
export default {
  data() {
    return {
      banner1:require('../assets/images/medium/dan.jpg'),
      banner2:require('../assets/images/medium/renee.jpg'),
      banner3:require('../assets/images/medium/travis.jpg'),    
      title: require('../assets/images/title.png'),
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      postalcode: ''
    }
  },
  computed:{
    firstNameErrors () {
      const errors = []
      if (!this.$v.firstname.$dirty) return errors
      !this.$v.firstname.required && errors.push('First Name is required.')
      return errors
    },
    lastNameErrors () {
      const errors = []
      if (!this.$v.lastname.$dirty) return errors
      !this.$v.lastname.required && errors.push('Last Name is required.')
      return errors
    },
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('Username is required.')
      !this.$v.username.minLength && errors.push('Username must be at least 10 characters long')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Email is required.')
      !this.$v.email.email && errors.push('Email must be valid')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      !this.$v.password.pass && errors.push('Password must meet requirements' )
      return errors
    },
    postalErrors () {
      const errors = []
      if (!this.$v.postalcode.$dirty) return errors
      !this.$v.postalcode.required && errors.push('Postal Code is required.')
      return errors
    },
  },
  methods: {
    submit(){
      this.$v.$touch()
    },
    clear(){
      this.$v.$reset()
      this.firstname = ''
      this.lastname = ''
      this.username = ''
      this.password = ''
      this.email = ''
      this.postalcode = ''
    }
  },
  validations: {
    firstname: {
      required
    },
    lastname: {
      required
    },
    username: {
      required,
      minLength: minLength(10)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      pass
    },
    postalcode: {
      required,
    }
  } 
}
</script>