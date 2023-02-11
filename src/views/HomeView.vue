<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    
  >
    <v-list-item three-line>
      <v-list-item-content>
        
        <v-list-item-title class="text-h6 mb-1">
          Prijavi se kao predavac
        </v-list-item-title>
        <v-list-item-subtitle>Želiš prenijeti svoje znanje na druge?
          Ovo je pravo mjesto za tebe!
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        type="button" @click="loadToSignup_predavac()"
        
      >
        Sign Up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data:() => ({

  }),
  methods: {
    loadToSignup_predavac(){
      window.open("/SignUp_predavac", "_self")
    },
  }
}


</script>



