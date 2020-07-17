<template>
    <div>
        <authorized-user v-if="authorized"/>
        <unauthorized-user v-else/>
    </div>
</template>

<script>
import AuthorizedUser from '../../components/UserPage/authorizedUser'
import UnauthorizedUser from '../../components/UserPage/unauthorizedUser'
import { mapGetters } from 'vuex'
export default {
    name: 'User',
    components: {
        AuthorizedUser,
        UnauthorizedUser
    },
    data(){
        return {
            authorized: false
        }
    },
    computed: {
        ...mapGetters(['authenticated', 'user'])
    },
    methods: {

    },
    beforeMount: function() {
        if(this.$route.params.username == this.user.username ){
            this.authorized = true
        }
        else {
            this.authorized = false
        }
    }
}
</script>
