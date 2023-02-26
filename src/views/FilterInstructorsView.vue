<template>
  <div v-if="user">
    <v-container>
      <v-row>
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <div class="text-center">
            <h1 style="margin-bottom: 20px;">Filtriranje instruktora</h1>
            <h5>Ovdje možete primjeniti filtraciju instruktora, tako da ih potražujete</h5>
            <h5>po predmetu iz kojeg drže instrukcije, gradu i državi iz kojih dolaze.</h5>
          </div>
        </v-col>

        

        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <div class="container-fluid p-5 cyan lighten-4 text-white text-center" style="border-radius: 45px;">
            <div class="container-fluid">
              
              

                <v-autocomplete
                v-model="country"
                :items="countries"    
                prepend-icon="mdi-flag"
                label="Odaberite državu">
                </v-autocomplete>

                <v-autocomplete
                v-model="city" 
                :items="cities" 
                prepend-icon="mdi-city"
                label="Odaberite grad">
                </v-autocomplete>

                <v-autocomplete
                v-model="subject"
                :items="subjects"   
                prepend-icon="mdi-school"
                label="Odaberite predmet">
                </v-autocomplete>

                <div class="d-flex justify-content-center">
                  <v-btn rounded color="primary" dark @click="filterInstructors()">
                      Primjeni filtere!
                    </v-btn>
                </div>
                


            </div>
          </div>
        </v-col>
    
        

        <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12" v-for="instructor in instructors" :key="instructor.username">
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
            style="border: 2px solid DodgerBlue; box-shadow: 15px 25px 38px black;"
          >
            

            <v-img
              height="350"
              :src="require('../assets/nema_slike.png')"
              style="border-bottom: 2px solid DodgerBlue;"
            ></v-img>

            <v-card-title class="justify-center">{{ instructor.first_name + ' ' + instructor.last_name }}</v-card-title>

            <div class="d-flex justify-center" style="margin-bottom: 3%;">
              <v-btn color="primary" @click="showDetails(instructor)">Detalji!</v-btn>
            </div>
            
          </v-card>
        </v-col>

        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <div class="text-center" v-if="show" @click="filterInstructors()">
            <v-pagination
              v-model="current_page"
              :length="totalPages"
              :total-visible="totalPages"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
              circle
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 blue darken-1 mb-5 white--text">
          {{ selected_instructor.first_name + ' ' +  selected_instructor.last_name}}
        </v-card-title>

        <v-card-text style="color: black; font-size: larger;">
          <b>Grad:</b> {{ selected_instructor.city_name}}   
        </v-card-text>

        <v-card-text style="color: black; font-size: larger;">
          <b>Država:</b> {{ selected_instructor.country_name}}   
        </v-card-text>

        <v-card-text style="color: black; font-size: larger;">
          <b>Email:</b> {{ selected_instructor.email}}   
        </v-card-text>

        <v-card-text style="color: black; font-size: larger;">
          <b>Broj telefona:</b> {{ selected_instructor.phone}}   
        </v-card-text>

        <v-card-text style="color: black; font-size: larger;">
          <b>Korisničko ime:</b> {{ selected_instructor.username}}   
        </v-card-text>

        <v-card-text style="color: black; font-size: larger;">
          <b>Predmet:</b> {{ selected_instructor.subject_name}}   
        </v-card-text>

        

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Zatvori
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="text-center ma-2">
      
      <v-snackbar
        v-model="snackbar"
        color="red"
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

    

  </div>
</template>

<script>
import api from "@/plugins/api";
  export default {
  name: 'FilterInstructorsView',
  data: () => ({
    countries: ['Hrvatska', 'Srbija', 'Bosna i Hercegovina'],
    cities: ['Zagreb', 'Split', 'Osijek', 'Rijeka', 'Beograd', 'Novi Sad', 'Niš','Kragujevac', 'Sarajevo', 'Mostar', 'Banja Luka', 'Tuzla'],
    subjects : ['Programiranje', 'Anatomija', 'Matematika'],
    country: '',
    city : '',
    subject : '',
    instructors : [],
    current_page: null,
    first_page_url : null,
    from: null,
    last_page: null,
    last_page_url: null,
    links: [],
    next_page_url: null,
    path: null,
    per_page: 9,
    prev_page_url: null,
    to: null,
    total : null,
    search: '',
    dialog: false,
    selected_instructor: {},
    show : false,
    totalPages : null,
    user: null,
    snackbar: false,
    text: 'Instruktor nije pronađen.',
    message: null
  
  }),


  methods: {
    getUser() {
    
    api.get('api/auth/user').then(response => {
      if(response.status == 200) {
          this.user = response.data
      }
      
    })
      },

      
      
      filterInstructors() {
          api.get('api/auth/filter-instructors' + '?' + '&country=' +this.country + '&city=' + this.city + '&subject=' + this.subject +'&page=' + this.current_page).then(response => {
      if(response.status == 200) {
          this.instructors = response.data.data
          this.current_page = response.data.current_page
          this.first_page_url = response.data.first_page_url
          this.from = response.data.from
          this.last_page = response.data.last_page
          this.last_page_url = response.data.last_page_url
          this.links = response.data.links
          this.next_page_url = response.data.next_page_url
          this.path = response.data.path
          this.per_page = response.data.per_page
          this.prev_page_url = response.data.prev_page_url
          this.to = response.data.to
          this.total = response.data.total
          this.totalPages = response.data.last_page
          this.show = true
      } 
      
    }).catch(error => {
      if (error.response && error.response.status === 404) {
        this.message = this.message
        this.snackbar = true
      }
    })
      },

      showDetails(selected_instructor) {
        this.selected_instructor = selected_instructor
        this.dialog = true
      }

      
      
  },
  created() {
      this.getUser()

  },
    
  }
  

</script>
