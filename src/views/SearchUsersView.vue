<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <div class="text-center">
            <h1 style="margin-bottom: 20px;">Pretraga korisnika</h1>
            <h5>Ovdje možete pretraživati korisnike po predmetu iz kojeg su naveli da im trebaju instrukcije, gradu i državi iz koje dolaze.</h5>
            <h5>Također možete ih pretraživati po njihovom imenu i prezimenu, a ako ima previše podataka, možete ih filtrirati</h5>
            <h5>po dolje navedenim kategorijama.</h5>
          </div>
        </v-col>

        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <div class="container-fluid p-5 cyan lighten-4 text-white text-center" style="border-radius: 45px;">
            <div class="container-fluid">
              <v-text-field append-icon="mdi-magnify" placeholder="Pretražite korisnike po imenu, mjestu ili predmetu.." clearable multiple outlined class="rounded-xl"></v-text-field>

            

                <div class="d-flex justify-content-center">
                  <v-btn rounded color="primary" dark>
                      Pretraži!
                    </v-btn>
                </div>
                
            </div>
          </div>
        </v-col>

        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <div class="text-center">
            <h5>Ako niste zadovoljni pretragom, možete primjeniti i filtraciju, odabrati i tražiti</h5>
            <h5>po već unaprijed definiranim parametrima!</h5>
            
          </div>
        </v-col>

        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <div class="container-fluid p-5 cyan lighten-4 text-white text-center" style="border-radius: 45px;">
            <div class="container-fluid">
              <v-text-field append-icon="mdi-pencil" placeholder="Ime" label="Ime" clearable></v-text-field>
              
              <v-text-field append-icon="mdi-pencil" placeholder="Prezime" label="Prezime" clearable></v-text-field>

              <v-text-field append-icon="mdi-pencil" placeholder="Predmet" label="Predmet" clearable></v-text-field>
            
              
                <v-select
                  v-model="countries"
                  :items="countries"
                  attach
                  chips
                  label="Država"
                  clearable
                ></v-select>

                <v-select
                  v-model="cities"
                  :items="cities"
                  attach
                  chips
                  label="Grad"
                  clearable
                ></v-select>


                <div class="d-flex justify-content-center">
                  <v-btn rounded color="primary" dark>
                      Primjeni filtere!
                    </v-btn>
                </div>
                


            </div>
          </div>
        </v-col>
    
        <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12" v-for="n in 9" :key="n">
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            
            max-width="374"
            style="border: 2px solid DodgerBlue; box-shadow: 15px 25px 38px black;"
            
          >
            

            <v-img
              height="350"
              :src="require('../assets/nema_slike.png')"
            ></v-img>

            
            <v-card-title class="justify-center">Ime i prezime</v-card-title>

            
            
            <v-card-title>Grad: Zagreb</v-card-title>

            <v-card-title>Država: Hrvatska</v-card-title>
            
            <v-card-title>Email: imeprezime@gmail.com</v-card-title>

            <v-card-title>Broj telefona: +38591000000</v-card-title>

            <v-card-title>Predmet: Programiranje</v-card-title>


            
          </v-card>
        </v-col>

        <v-col>
          <div class="text-center">
            <v-pagination
              v-model="current_page"
              :length="total_pages"
              total-visible="9"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
              circle
        ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
  name: 'SearchUsersView',
  data: () => ({
    countries: ['Hrvatska', 'Srbija', 'Bosna i Hercegovina'],
    cities: ['Zagreb', 'Split', 'Osijek', 'Beograd', 'Kragujevac', 'Sarajevo', 'Mostar'],
    current_page: 1,
    total_pages : 9
  
  }),


  methods: {

   
    
  }
  
}
</script>
<style scoped>
 
</style>