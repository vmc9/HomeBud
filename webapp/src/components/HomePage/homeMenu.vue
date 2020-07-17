<template>
      <div id="menu">
        <v-tabs 
          background-color="primary"
          centered
          dark
          grow
          icons-and-text
        >
          <v-tab>
            I Lost A Pet
            <v-icon>mdi-alert-decagram</v-icon>
          </v-tab>
          <v-tab>
            I Found A Pet
            <v-icon>mdi-eye</v-icon>
          </v-tab>
          <v-tab>
            I Want To Help Out
            <v-icon>mdi-heart-circle</v-icon>
        </v-tab>
        <v-tab-item>
            <lost-pet></lost-pet>
        </v-tab-item>
        <v-tab-item>
            <found-pet></found-pet>
        </v-tab-item>
        <v-tab-item>
            <help-out></help-out>
        </v-tab-item>
        </v-tabs>
      </div>
</template>

<script>
import FoundPet from "./foundPet"
import LostPet from "./lostPet"
import HelpOut from "./helpOut"
export default {
    components: {
        FoundPet,
        LostPet,
        HelpOut
    },
    data() {
        return {

        }
      }
    }
</script>