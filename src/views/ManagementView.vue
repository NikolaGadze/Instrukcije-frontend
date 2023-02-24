<template>
    <div class="profile">
        <v-container fluid style="margin-top: -1%;">
            <v-sheet
        min-height="100vh"
        rounded="lg">
        <v-row>
            <div class="text-center" style="margin-top: 1%;">
                <h1>Upravljanje korisnicimaa</h1>
            </div>
        </v-row>
        <v-row>
            <v-col>
        
            
            </v-col>
        </v-row>          
        </v-sheet>  
        </v-container>              
    </div>
  </template>
  
  <script>
  import api from "@/plugins/api";
    export default {
    name: 'ProfileView',
    data: () => ({
      user: null
    
    }),
  



    
  }
  </script>
<style scoped>

</style>