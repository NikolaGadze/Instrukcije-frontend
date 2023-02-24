<template>
    <div class="profile" v-if="user">
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
            <v-col cols="12" xl="5" lg="5" md="9" sm="9" xs="9" style="margin-left: 1%;  margin-right: 1%;">
                <v-img
                height="500"
                width="470"
                style="margin-top: 5%; border: 4px solid DodgerBlue; border-radius: 8%;"
                :src="this.slika"
                ></v-img>
                </v-col>

                <v-col cols="12" xl="6" lg="6" md="9" sm="9" xs="9">
                <div style="margin-top: 5%; margin-left: 1%; margin-right: 3%;">
                    <v-text-field
                    :value="this.profile.data.first_name"
                    outlined
                    disabled
                    append-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                    :value="this.profile.data.last_name"
                    outlined
                    disabled
                    append-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                    :value="this.profile.data.username"
                    outlined
                    disabled
                    append-icon="mdi-account-circle"
                ></v-text-field>

                <v-text-field
                    :value="this.profile.data.email"
                    outlined
                    disabled
                    append-icon="mdi-email"
                ></v-text-field>

                <v-text-field
                    :value="this.profile.data.phone"
                    outlined
                    disabled
                    append-icon="mdi-phone"
                ></v-text-field>

                <v-text-field
                    :value="this.profile.data.country_name"
                    outlined
                    disabled
                    append-icon="mdi-flag"
                ></v-text-field>

                <v-text-field
                    :value="this.profile.data.city_name"
                    outlined
                    disabled
                    append-icon="mdi-city"
                ></v-text-field>
                
                </div>

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

    prefix_slike: "public/uploads/",  
    slika: require('../assets/nema_slike.png'),
    user: null,
    profile: null,


    }), 
  
  
    methods: {
        getUser() {
    
      api.get('api/auth/user').then(response => {
        if(response.status == 200) {
            this.user = response.data
        }
        
      })
        },

        showProfile() {
            api.get('api/auth/show-profile').then(response => {
        if(response.status == 200) {
            this.profile = response.data
        }
        
      })
        }
    },
    created() {
        console.log
        this.getUser()
        this.showProfile()

    },
}
  </script>
<style scoped>

</style>