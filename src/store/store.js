import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginPrompt: '',
        registerPrompt: ''
    },

    getters: {

    },
    
    mutations: {
        //Nav Bar Login/Register state mutators
        openLogin(state){
            state.loginPrompt = 'is-active';
        },
        closeLogin(state){
            state.loginPrompt = '';
        },
        openRegister(state){
            state.registerPrompt = 'is-active';
        },
        closeRegister(state){
            state.registerPrompt = '';
        }
    },

    actions: {

    }
})