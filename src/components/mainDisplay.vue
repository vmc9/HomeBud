<template>
    <div class="columns is-vcentered is-multiline" id="columns">
        <div class="column has-text-centered">
            <div>
                <p class="title is-spaced">
                    {{seedData[count].name}}
                </p>
                <p class="subtitle is-spaced">
                    {{seedData[count].breed}}
                </p>
                
                <img   @click="next()" class="image is-inline-block" :src="require(`./../assets/images/${seedData[count].picture}`)" alt="Dog">
                
                <p class="subtitle is-spaced">
                    Went Missing: {{seedData[count].dod}}
                </p>
            </div>
        </div>

        <div class="column has-text-centered">
            <div id="about">
                <p class="title is=spaced">We help find lost pets!</p>
                <br>
                <p class="subtitle is-spaced">
                    HomeBud is a platform that provides necessary resources to take action towards finding a lost pet
                    <br><br>
                    You can use our platform as a digital launchpad for your search efforts!
                </p>
                <br>
                <img class="is-rounded"  src="./../assets/images/logo.png" id="logo">
            </div>
        </div>
    </div>
</template>

<script>
import {seedData} from "../seed.js"
export default {
    name: 'mainDisplay',
    data() {
        return{
            seedData,
            count: 0
        }
    },
    methods: {
        next() {
            this.count = (this.count+1) % seedData.length;
        }
    }
}
</script>

<style scoped>
    #columns {
        margin-top: 10px;
        
        color: ghostwhite;
    }
    #logo {
        max-width: 300px;
    }
    .image {
        width: 75%;
        padding: 15px;
        background-color: #FFF8E7;
        width:500px;
    }
    .title, .subtitle {
        color: ghostwhite;
    }
</style>