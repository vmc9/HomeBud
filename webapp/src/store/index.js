import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import login from './modules/login'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        login
    },
    plugins: [createPersistedState({
        paths: ['auth', 'login']
    })]
})

export default store