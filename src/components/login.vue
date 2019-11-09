<template>
    <div class="modal" :class="status ? 'is-active' : ''" id="login">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h3 class="title is-3">Log in to HomeBud</h3>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input type="text" class="input" v-model="input.username">
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
export default {
    name: 'login',
    data() {
        return {
            input: {
                username: '',
                password: '',
            }
        }
    },
    props: {
        status: Boolean,
    },
    methods: {
        validate(){
            console.log(this.input);
        },
        close(){
             this.$emit("closeLogin");
             document.getElementById("login").classList.toggle("is-active", false);
        }
    }
}
</script>

<style scoped>

</style>