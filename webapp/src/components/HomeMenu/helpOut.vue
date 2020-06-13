<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col>
                    <v-img :src="lost" aspect-ratio="1.5" contain style="max-width: 500px"/>
                </v-col>
                <v-col>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lost: require("../../assets/images/medium/help_cat.png")
        }
    }
    
}
</script>