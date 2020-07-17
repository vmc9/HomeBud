<template>
  <div class="login">
    <v-container class="primary mt-5" style="max-width: 1200px">
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
    <v-container class="white my-10 elevation-20" style="max-width: 1200px">
        <v-row> 
          <v-col cols="12" class="d-flex align-center justify-center"> 
            <v-img :src="title" aspect-ratio="3" contain style="max-width: 500px"/>
          </v-col>
        </v-row>
        <div align="center" class="d-flex align-center justify-center">
            <p class="subtitle-1" style="width: 800px">
              Welcome back!
            </p>
          </div>
        <v-form> 
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
          </v-row>
          <v-row class="d-flex align-center justify-center">
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
            <v-btn class="mr-4" @click="submit">submit</v-btn>
            <v-btn class="mr-4" @click="clear">clear</v-btn>
            <v-btn class="mr-4" @click="clear">forgot my password</v-btn>
          </div>
        </v-form>
      </v-container>
      <v-container class="primary mt-5" style="max-width: 1200px">
        <v-row class="justify-center align-center">
          <v-col class="d-flex justify-center">
            <v-img :src="banner4" aspect-ratio="1.7" contain style="max-width: 500px"/>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-img :src="banner5" aspect-ratio="1.7" contain style="max-width: 500px"/>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-img :src="banner6" aspect-ratio="1.7" contain style="max-width: 500px"/>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required, minLength, helpers} from 'vuelidate/lib/validators'
const pass = helpers.regex('pass', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)
export default {
  data() {
    return {
      banner1:require('../../assets/images/medium/ali.jpg'),
      banner2:require('../../assets/images/medium/gina.jpg'),
      banner3:require('../../assets/images/medium/mike.jpg'),
      banner4:require('../../assets/images/medium/mila.jpg'),
      banner5:require('../../assets/images/medium/chris.jpg'),
      banner6:require('../../assets/images/medium/jess.jpg'),      
      title: require('../../assets/images/title.png'),
      username: '',
      password: '',
    }
  },
  computed:{
    ...mapGetters(['jwt', 'authenticated', 'user']),
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('Username is required.')
      !this.$v.username.minLength && errors.push('Username must be at least 10 characters long')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      !this.$v.password.pass && errors.push('Password must meet requirements' )
      return errors
    },
  },
  methods: {
    ...mapActions(['fetchJWT', 'loginUser']),
    async submit(){
      this.$v.$touch()
      if(!this.$v.$invalid){
        await this.fetchJWT({ 
          username: this.username, 
          password: this.password
          })
        if(this.authenticated){
          const data = {
            username: this.username,
            token: this.jwt
            }
          let found = await this.loginUser({ data })
          if(found){
            this.$router.push(`./user/${this.user.username}`)
          }
        }
        else {
          //TODO: Address case where authentication fails
          console.log("Not Authenticated")
        }
      }
    },
    clear(){
      this.$v.$reset()
      this.username = ''
      this.password = ''
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(10)
    },
    password: {
      required,
      pass
    },
  } 
}
</script>