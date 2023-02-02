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
              <p style="text-align: center; margin-bottom: 30px;
              ">Nikola Gadže, rođen 9.11.2001 godine u Splitu,<br>
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
  </div>


</template>

<script>
  export default {
  name: 'AboutView',
  data: () => ({
    dialog1: false,
    dialog2: false,
  
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
