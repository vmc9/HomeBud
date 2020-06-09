<template>
  <div class="home">
    <v-container style="max-width: 1200px">
      <v-row>
        <v-col  class="d-flex align-center justify-center">
          <div class="px-5 white--text">
            <p class="display-3 text-left font-weight-bold">Welcome to HomeBud!</p>
            <p class="display-1 text-left font-weight-bold"> The app that helps you find lost pets</p>
          </div>
        </v-col>
        <v-col  class="d-flex align-center justify-center">
          <v-img :src="logo" aspect-ratio="1.7" contain class="my-10"  style="width: 400"/>
        </v-col>
      </v-row>

      <v-tabs
        v-model="tab"
        background-color="primary"
        centered
        dark
        grow
        icons-and-text
      >
        <v-tabs-slider color="grey"></v-tabs-slider>
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
         <v-icon>{{ item.icon }}</v-icon>
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.tab"
        >
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <v-row>
        <v-col style="max-width: 600px">
          <v-card class="primary">
            <v-list-item class="py-3">
              <v-list-item-avatar color='white'></v-list-item-avatar>
              <v-list-content>
                <v-list-item-title  class="white--text">Pet: Roxy</v-list-item-title>
                  <v-list-item-subtitle  class="white--text">Owner: Mari Kondo</v-list-item-subtitle>
                  <v-list-item-subtitle  class="white--text">Lost: June 1st 2020</v-list-item-subtitle>
              </v-list-content>
            </v-list-item>

            <v-img :src="profile" aspect-ratio="1.5"/>

            <v-card-text class='white--text'>
              Roxy is a sweet girl, last seen jumping over her owner's backyard fence.
              She is a small Shiba, responds to her name, and is dearly missed by her family!
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="white"
              >
                See Page
              </v-btn>
              <v-btn
                text
                color="white"
              >
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
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <p class="display-1 white--text font-weight-bold">
            HomeBud helps you plan  your search for a lost pet.
            <br/> <br/>
            We provide key resources and tools to ensure you are reunited as fast as possible. 
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      logo: require('../assets/images/logo.png'),
      profile: require('../assets/images/1.jpg'),
      tab: null,
      items: [
        {tab: "I Lost A Pet", content: 'What to do if you lost a pet', icon: "mdi-alert-decagram"},
        {tab: "I Found A Pet", content: 'What to do if you found a pet', icon: 'mdi-eye'},
        {tab: "I Want to Help", content: 'How you can help', icon: 'mdi-heart-circle'}
      ]
    }
  }
}
</script>
