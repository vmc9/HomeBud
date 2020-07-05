import {api} from "../../plugins/services"

const auth = {
    state: {
        currentJWT: '',
        authenticated: false
    },

    getters: {
        jwt: (state) => state.currentJWT,
        authenticated: (state) => state.authenticated
    },

    mutations: {
        setJWT(state, jwt) {
            state.currentJWT = jwt
        },
        setAuthenticated(state, status) {
            state.authenticated = status
        }
    },

    actions: {
        async fetchJWT({ commit }, { username, password}){
            try {
                const res = await api.post("/users/login", {username, password})
                if(res.status == 200){
                    commit('setJWT', res.data.token)
                    commit('setAuthenticated', true)
                } 
            } catch (error) {
                console.log(error)
            }
        },
    }
}

export default auth