<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" >
          <v-text-field append-icon="mdi-magnify" placeholder="Pretražite korisnike po imenu, mjestu ili predmetu.."  multiple attach outlined class="rounded-xl"></v-text-field>
        </v-col>

        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" >
          <v-select
            v-model="countries"
            :items="countries"
            attach
            chips
            label="Država"
          ></v-select>

          <v-select
            v-model="cities"
            :items="cities"
            attach
            chips
            label="Grad"
          ></v-select>

          <v-select
            v-model="subjects"
            :items="subjects"
            attach
            chips
            label="Predmet"
          ></v-select>
        </v-col>
    
        <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12" v-for="n in 9" :key="n">
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
            style="border: 2px solid DodgerBlue;"
          >
            

            <v-img
              height="350"
              :src="require('../assets/nema_slike.png')"
            ></v-img>

            <v-card-title>Ime i prezime</v-card-title>


            

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
              
            </v-card-text>

            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
  name: 'SearchInstructorsView',
  data: () => ({
    countries: ['Hrvatska', 'Srbija', 'Bosna i Hercegovina'],
    cities: ['Zagreb', 'Split', 'Osijek', 'Beograd', 'Kragujevac', 'Sarajevo', 'Mostar'],
    subjects : ['Programiranje', 'Anatomija', 'Statistika', 'Menadžment']
  
  }),


  methods: {

   
    
  }
  
}
</script>
