<template>
    <div>
        Hello {{ fixFirst }}!
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    computed: {
        ...mapGetters(['authenticated', 'user']),
        fixFirst() {
            let a = this.user.firstname.substring(0 , 1).toUpperCase()
            let b = this.user.firstname.substring(1, this.user.firstname.length)
            return a + b
        }
    },
    methods: {
        ...mapActions([])
    }
}
</script>
