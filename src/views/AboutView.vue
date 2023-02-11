<template>
  <div class="about">
     
    <v-row style="text-align: center">
      <v-col cols="12">
          <h2 style="color: white; font-size: 30px">Informacije o autorima projekta</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" style="color: white; text-align: center; font-size: x-large;">
        <div>
          <v-icon color="white" size="30px" @click="toGithubIvan()">mdi-github</v-icon>
          <h2>
            Ivan Raič
          </h2>
          <p style="text-align: center; margin-bottom: 30px;">Ivan Raič, rođen 11.11.2001 godine u Mostaru,<br>
              rodom iz Stoca, a živi u okolici Stoca.<br>
              Završio Osnovnu školu Stolac,<br>
              a zatim u Srednjoj Strukovnoj Školi Stolac,<br>
              završio smjer Računalni tehničar za strojarstvo<br>
              Nakon toga upisuje Informatiku na FPMOZ-u<br>
              gdje je trenutno student 3.godine.
          </p>

          <template>
            <v-row justify="center">
              <v-dialog
                v-model="dialog1"
                width="600px"
              >
                
                  
                
                    <v-card>
                      
                      <v-card-text>
                        <br>
                        
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer> 
                        
                        <v-btn
                          color="red darken-1"
                          text
                          @click="dialog1 = false"
                        >
                          Zatvori
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
            </div>
          </v-col>


          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" style="color: white; text-align: center; font-size: x-large">
            <div>
              <v-icon color="white" size="30px" @click="toGithubNikola()">mdi-github</v-icon>
              <h2>
                Nikola Gadže
              </h2>
              <p style="text-align: center; margin-bottom: 30px;">
                Nikola Gadže, rođen 9.11.2001 godine u Splitu,<br>
                rodom iz Ljubuškog, a živi u okolici Ljubuškog.<br>
                Završio Osnovnu školu Tina Ujevića u Vitini,<br>
                a zatim Gimnaziju u Ljubuškom.<br>
                Nakon toga upisuje Informatiku na FPMOZ-u<br>
                gdje je trenutno student 3.godine.
              </p>
            </div>
            
            <template>
              <v-row justify="center">
                <v-dialog
                  v-model="dialog2"
                  width="600px"
                >
                  
                  <v-card>
                    
                    <v-card-text>
                      <br>
                      
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer> 
                      
                      <v-btn
                        color="red darken-1"
                        text
                        @click="dialog2 = false"
                      >
                        Zatvori
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>
          </v-col>
        </v-row>

    <v-row justify="center" >
      <v-expansion-panels accordion>
        <v-expansion-panel
          v-for="vision in visions" :key="vision" cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
       
          <v-expansion-panel-header style="text-decoration: solid;">{{vision.ime}}</v-expansion-panel-header>
          <v-expansion-panel-content>
              {{ vision.opis }}
          </v-expansion-panel-content>

          
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <br><hr style="color:white"/>
    <v-row style="text-align: center">
        <v-col cols="12">
          <h2 style="color: white; font-size: 30px">Tehnologije koje će se koristiti za izradu aplikacije</h2>
        </v-col>
      </v-row>

      <v-row style="text-align:center; color:aliceblue">
        <v-col v-for="tehnologija in tehnologije" :key="tehnologija" cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
          <template>
            <v-card class="mx-auto my-12 blue-grey darken-4" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>

              <v-img height="350" :src="tehnologija.slika"></v-img>

              <v-card-title class="justify-center" style="color: white">{{ tehnologija.ime }}</v-card-title>
            </v-card>
          </template>
        </v-col>
      </v-row>

  </div>


</template>

<script>
  export default {
  name: 'AboutView',
  data: () => ({
    dialog1: false,
    dialog2: false,

    visions : [
    {ime: 'Osnovno o projektu', opis: 'Naziv projekta su Instrukcije, čiji je osnovni cilj studentima i učenicima omogućiti što lakše stupanje u kontakt s predavačima koji nude usluge instrukcija, te koji se također kao korisnici prijavljuju na sustav. Ulogu gosta u ovoj aplikaciji imaju učenici i studenti, kao i sve ostale osobe koje nisu prijavljene na sustav te oni mogu pregledavati sadržaje na aplikaciji, te tako doći do potebnih informacija koje im trebaju broj telefona, email, mjesto i slično. Ulogu korisnika imaju učenici i studenti koji su prijavljeni na sustav. Oni osim što mogu vidjeti potrebne informacije oni direktno mogu stupiti u kontakt sa predavačom preko aplikacije, i zabilježiti sebi mjesto, ako su im zadovoljeni ponuđenim predavačom, te su također u mogućnosti davati recenzije predavačima. Predavači također imaju ulogu korisnika, ali oni mogu objavljivati i uređivati svoje oglase i raspored. Administrator pregledava rad sustava i upravlja korisnicima.'},
    {ime: 'Motivacija za projekt', opis: 'Motivaciju za ovaj projekt smo dobili jer smo i mi studenti i sami nekada imamo potrebu za pronalazak instrukcija. S obzirom na malu dostupnost predavača, te malu dostupnost provjernih informacija teško je stupiti u kontakt s dobrim i provjerenim predavačima. Ovim projektom želimo olakšati pronalazak dobrih i dostupnih predavača po željenim parametrima.'},
    
  ],
  tehnologije: [
      { ime: 'HTML', slika: 'https://imgs.search.brave.com/tNr6FaOC1uPTCjt0rtO71COF0rJYMdum0rjC-Dt3NQc/rs:fit:600:350:1/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2h0bWw1LWxvZ28t/cG5nL2h0bWw1LWxv/Z28taW1hZ2UtbG9n/by1odG1sLTcucG5n' },
      { ime: 'CSS', slika: 'https://imgs.search.brave.com/MgT3JX9doCmi_iWfKy11g9HbzQDdI_ml3g4F_NeSB5A/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0NTUy1Mb2dvLnBu/Zw' },
      { ime: 'Bootstrap', slika: 'https://imgs.search.brave.com/Ytvcr5-8bzOPaIvNKP4aa6B5bfoUAi1IZUKoekDTgQI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kb3du/bG9hZC5sb2dvLndp/bmUvbG9nby9Cb290/c3RyYXBfKGZyb250/LWVuZF9mcmFtZXdv/cmspL0Jvb3RzdHJh/cF8oZnJvbnQtZW5k/X2ZyYW1ld29yaykt/TG9nby53aW5lLnBu/Zw' },
      { ime: 'JavaScript', slika: 'https://imgs.search.brave.com/bS4S_lf44stv2WqIKcYigvkNUSWTFqQziR1wIjmtc_4/rs:fit:500:313:1/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0phdmFTY3JpcHQt/TG9nby01MDB4MzEz/LnBuZw' },
      { ime: 'VueJS', slika: 'https://imgs.search.brave.com/VnUn-w-q5O0xeIwrPTs_eDI21iDgK71SJoVtjDa7f3Q/rs:fit:924:636:1/g:ce/aHR0cHM6Ly9kd2ds/b2dvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wOS9W/dWVfanNfbG9nby5w/bmc' },
      { ime: 'Vuetify', slika: 'https://imgs.search.brave.com/TKjF7IQj8HpPKvXIbpPUgghJbMYUkN2ExDW-mJ4qH8Q/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L2ZpbGVz/L25vLzExMzEwMS9w/bmcvdnVldGlmeS5w/bmc' },
      { ime: 'PHP', slika: 'https://imgs.search.brave.com/HaR8ieAjljBMuO8ZRfyr49U2_H-lA_uSWXa8jdqvXMU/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9waHAvcGhwX1BO/RzE4LnBuZw' },
      { ime: 'Laravel', slika: 'https://imgs.search.brave.com/YqHCjQS952JzncK5-HTyS5g4IcCf-JV-Yi9Pa2TS7S8/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9sb2dv/c3BuZy5vcmcvZG93/bmxvYWQvbGFyYXZl/bC9sb2dvLWxhcmF2/ZWwtMTAyNC5wbmc' },
      { ime: 'SQL', slika: 'https://imgs.search.brave.com/lIh89F0-ubarUMqSFWwTLETeYIb3rCK4GwTaPugWfWI/rs:fit:600:315:1/g:ce/aHR0cHM6Ly9henVy/ZS5taWNyb3NvZnQu/Y29tL3N2Z2hhbmRs/ZXIvc3FsLXNlcnZl/ci1zdHJldGNoLWRh/dGFiYXNlP3dpZHRo/PTYwMCZoZWlnaHQ9/MzE1' }
    ],
    
    
  
  }),

  methods: {
    toGithubNikola: function(){
        window.open('https://github.com/NikolaGadze')
      },
      toGithubIvan: function(){
        window.open('https://github.com/raici')
      },
  }
  
  
}
</script>
