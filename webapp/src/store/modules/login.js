import {api} from "../../plugins/services"

const login = {
    state: {
        currentUser: ''
    },

    getters: {
        user: (state) => state.currentUser
    },

    mutations: {
        setUser(state, user) {
            state.currentUser = user
        }
    },

    actions: {
        async loginUser({ commit }, { data }){
            try {
                const config = { 
                    headers:{
                        Authorization: "Bearer " + data.token
                    }
                }
                const res = await api.get("users/" + data.username, config)
                if(res.status == 200){
                    commit('setUser', res.data.user)
                    console.log('Logged in')
                    console.log(res.data.user)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default login