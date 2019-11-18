<template>
    <div class="modal" :class="loginPrompt" id="login">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h3 class="title is-3">Log in to HomeBud</h3>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input type="text" class="input" v-model="input.username" @blur="userSearch" :class="userValid">
                    </div>
                    <!--Username is-success/is-danger-->
                    <p class="help"
                    :class="userValid">{{userTip}}</p>
                </div>

                <div class="field"> 
                    <div class="control">
                        <label class="label">Password</label>
                    </div>
                    <input type="password" class="input" v-model="input.password" @blur="passSearch" :class="passValid">
                    <!--Username is-success/is-danger-->
                    <p class="help"
                    :class="passValid">{{passTip}}</p>
                </div>  

                <div class="field">
                    <div class="control">
                        <button class="button" @click="validate">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" id="x" @click="close"></button>
    </div>
</template>

<script>
import {mock} from './../mockUser';
export default {
    name: 'login',
    data() {
        return {
            input: {
                username: '',
                password: '',
            },
            userValid: '',
            userTip: '',
            passValid: '',
            passTip: ''
        }
    },
    computed: {
        loginPrompt(){
            return this.$store.state.loginPrompt;
        },
    },
    methods: {
        userSearch(){
            if(this.input.username!=''){
                let found = false;
                for(let user of mock){
                    if(user.userName == this.input.username){
                        found = true;
                        break;
                    }
                }
                found ? this.userValid = 'is-success' : this.userValid = 'is-danger';
                found ? this.userTip = 'Username is Valid' : this.userTip = 'Username is not Valid';
            }
            else{
                this.userTip = '';
                this.userValid = '';
            } 
        },
        passSearch(){
            if(this.input.password!=''){
                let found = false;
                for(let user of mock){
                    if(user.password == this.input.password&&user.userName == this.input.username){
                        found = true;
                        break;
                    }
                }
                found ? this.passValid = 'is-success' : this.passValid = 'is-danger';
                found ? this.passTip = 'Passwrod is Valid' : this.passTip = 'Password is not Valid';
            }
            else{
                this.passTip = '';
                this.passValid = '';
            }   
        },
        validate(){
            let validated = false;
            if(this.input.username!=''&& this.input.password!=''){
                for(let user of mock){
                    if(user.userName == this.input.username && user.password == this.input.password){
                        this.$store.commit('loggedIn', user);
                        this.close();
                        validated = true;
                        break;
                    }
                }
            }
            validated ? console.log(`Welcome ${this.$store.state.user.firstName}`) : console.log("Login Failed");
        },
        close(){
             this.$store.commit('closeLogin');
        }
    }
}
</script>

<style scoped>
    #login {
        background-color: rgb(97,97,100,0.2);
    }
</style>