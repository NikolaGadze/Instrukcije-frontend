<template>
    <div class="profile">
        <v-container fluid style="margin-top: -1%;">
            <v-sheet
        min-height="100vh"
        rounded="lg">
        <v-row>
            <div class="text-center" style="margin-top: 1%;">
                <h1>Moj profil</h1>
            </div>
        </v-row>
        <v-row>
            <v-col cols="12" xl="5" lg="5" md="10" sm="10" xs="10" style="margin-left: 1%;  margin-right: 1%;">
                <v-img
                height="500"
                width="470"
                style="margin-top: 5%; border: 4px solid DodgerBlue; border-radius: 8%;"
                :src="slika"
                ></v-img>
                </v-col>

                <v-col cols="12" xl="6" lg="6" md="9" sm="9" xs="9">
                <div style="margin-top: 5%; margin-left: 1%; margin-right: 3%;">
                    <v-text-field
                    :value="ime"
                    outlined
                    disabled
                    append-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                    :value="prezime"
                    outlined
                    disabled
                    append-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                    value="Korisnicko ime"
                    outlined
                    disabled
                    append-icon="mdi-account-circle"
                ></v-text-field>

                <v-text-field
                    value="Email"
                    outlined
                    disabled
                    append-icon="mdi-email"
                ></v-text-field>

                <v-text-field
                    value="Broj telefona"
                    outlined
                    disabled
                    append-icon="mdi-phone"
                ></v-text-field>

                <v-text-field
                    value="Grad"
                    outlined
                    disabled
                    append-icon="mdi-city"
                ></v-text-field>

                <v-text-field
                    value="Država"
                    outlined
                    disabled
                    append-icon="mdi-flag"
                ></v-text-field>
                
                <v-text-field
                    value="Opis"
                    outlined
                    disabled
                    append-icon="mdi-pencil-circle"
                ></v-text-field>


                </div>

            
            </v-col>
        </v-row>          
        </v-sheet>  
        </v-container>              
    </div>
  </template>
  
  <script>
    export default {
    name: 'ProfileView',
    data: () => ({
      ime: "Nikola",
      prezime: "Gadže",
      slika: require('../assets/nema_slike.png')
    
    }),
  
  
    methods: {
  
     
      
    }
    
  }
  </script>
<style scoped>

</style>