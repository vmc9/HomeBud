<template>
    <v-card class="primary">
            <v-list-item class="py-3">
              <v-list-item-avatar color='white'></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title  class="white--text">Pet: {{name}}</v-list-item-title>
                  <v-list-item-subtitle  class="white--text">Owner: {{owner}}</v-list-item-subtitle>
                  <v-list-item-subtitle  class="white--text">Lost: {{lost}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src=picture aspect-ratio="1.5"/>

          <v-card-text class='white--text'>
              {{message}}
            </v-card-text>

            <v-card-actions>
              <v-btn text color="white">
                See Page
              </v-btn>
              <v-btn text color="white">
                Track
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon color="white">
                <v-icon>mdi-message-alert</v-icon>
              </v-btn>
              <v-btn icon color="white">
                <v-icon>mdi-map-marker</v-icon>
              </v-btn>
              <v-btn icon color="white">
                <v-icon>mdi-arrow-down-bold-circle</v-icon>
              </v-btn>
              <v-btn icon color="white">
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            message: "Roxy is a sweet girl, last seen jumping over her owner's backyard fence. She is a small Shiba, responds to her name, and is dearly missed by her family!",
            name: "Roxy",
            owner: "Marie Kondo",
            lost: "June 6 2020",
            avatar: "",
            picture: require("../assets/images/1.jpg")
        }
    }
}
</script>