import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import login from './modules/login'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        login
    }
})

export default store