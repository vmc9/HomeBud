<template>
    <div class="modal is-active" id="login">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h3 class="title is-3">Log in to HomeBud</h3>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input type="text" class="input" placeholder="">
                    </div>
                </div>

                <div class="field"> 
                    <div class="control">
                        <label class="label">Password</label>
                    </div>
                    <input type="password" class="input" placeholder="">
                </div>  

                <div class="field">
                    <div class="control">
                        <button class="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style scoped>

</style>