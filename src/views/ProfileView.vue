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

                <div class="d-flex justify-center mb-5" style="margin-left: -10%">
                    <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                    
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        style="margin: 20px"
                    >
                        Ažuriraj profil
                    </v-btn>
                    </template>
                    <v-card>
                    <v-card-title>
                        <span class="text-h5">Ažuriranje podataka o korisniku</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                        <v-row>
                            <v-col
                            cols="12"
                            sm="6"
                            >
                            <v-text-field
                                label="Ime"
                                required
                                v-model="user.first_name"
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            sm="6"
                            >
                            <v-text-field
                                label="Prezime"
                                required
                                v-model="user.last_name"
                            ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                            <v-text-field
                                label="Email"
                                required
                                v-model="user.email"
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            sm="6"
                            >
                            <v-text-field
                                label="Korisničko ime"
                                required
                                v-model="user.username"
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            sm="6"
                            >
                            <v-text-field
                                label="Broj telefona"
                                required
                                v-model="user.phone"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        color="red darken-2"
                        text
                        @click="dialog = false"
                        >
                        Zatvori
                        </v-btn>
                        <v-btn
                        color="light-green accent-4"
                        text
                        @click="updateProfile()"
                        >
                        Spremi
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
                </div>

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

        <div class="text-center ma-2">
      
        <v-snackbar
            v-model="snackbar"
            color="light-green accent-3"
        >
            {{ text }}

            <template v-slot:action="{ attrs }">
            <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false"
            >
                Zatvori
            </v-btn>
            </template>
        </v-snackbar>
        </div>
        
        <div class="text-center ma-2">
      
            <v-snackbar
                v-model="snackbar2"
                color="red darken-2"
            >
                {{ text2 }}

                <template v-slot:action="{ attrs }">
                <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar2 = false"
                >
                    Zatvori
                </v-btn>
                </template>
            </v-snackbar>
        </div>

    </div>
  </template>
  
  <script>
   import api from "@/plugins/api";
   import { mapState } from 'vuex'
   
    export default {
    name: 'ProfileView',
    data: () => ({

    prefix_slike: "public/uploads/",  
    slika: require('../assets/nema_slike.png'),
    profile: null,
    dialog: false,
    snackbar : false,
    snackbar2 : false,
    text : "Podatci su uspješno ažurirani!",
    text2 : "Greška!"
    }), 
  
  
    methods: {

        showProfile() {
            api.get('api/auth/show-profile').then(response => {
        if(response.status == 200) {
            this.profile = response.data
        }
        
      })
        },
        updateProfile() {
            api.put('api/auth/update-profile',{

                'first_name' : this.user.first_name,
                'last_name' : this.user.last_name,
                'username' : this.user.username,
                'email' : this.user.email,
                'phone' : this.user.phone

            }).then(response => {
                this.getUser()
                this.showProfile()
                this.snackbar = true
        
      }).catch(error => {
      if (error.response && error.response.status === 422) {
        this.snackbar2 = true
        
      }
    })
        },
    },
    computed: {
    ...mapState(['user']),

    },
    created() {
        console.log
        this.$store.dispatch("getUser")
        this.showProfile()

    },
}
  </script>
<style scoped>

</style>