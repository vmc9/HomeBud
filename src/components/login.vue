<template>
    <div class="modal" :class="loginPrompt" id="login">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h3 class="title is-3">Log in to HomeBud</h3>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input type="text" class="input" v-model="input.username" @blur="userSearch">
                    </div>
                </div>

                <div class="field"> 
                    <div class="control">
                        <label class="label">Password</label>
                    </div>
                    <input type="password" class="input" v-model="input.password">
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

        }
    },
    computed: {
        loginPrompt(){
            return this.$store.state.loginPrompt;
        }
    },
    methods: {
        userSearch(){
            let found = false;
            if(this.input.username!=''){
                for(let user of mock){
                    if(user.userName == this.input.username){
                        found = true;
                        break;
                    }
                }
            }
            found ? console.log("User Found!") : console.log("User Not Found!"); 
        },
        validate(){
            let validated = false;
            if(this.input.username!=''&& this.input.password!=''){
                for(let user of mock){
                    if(user.userName == this.input.username && user.password == this.input.password){
                        console.log("Login Successfull");
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