<template>
    <div class="profile" v-if="user">
        <v-container fluid style="margin-top: -1%;">
            <v-sheet
        min-height="100vh"
        rounded="lg">
        <v-row>
            <div class="text-center" style="margin-top: 1%;">
                <h1>Upravljanje korisnicima</h1>
            </div>
        </v-row>

        <v-row>
            <div class="text-center" style="margin-top: 1%;">
                <h3>Trenutni broj korisnika:  {{ this.total }}</h3>
            </div>
        </v-row>
        <v-row>
            <v-col>
                <div>
                  <v-container>
                    <v-simple-table dark>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            ID
                          </th>
                          <th class="text-left">
                            Ime
                          </th>
                          <th class="text-left">
                            Prezime
                          </th>
                          <th class="text-left">
                            Email
                          </th>
                          <th class="text-left">
                            Korisničko ime
                          </th>
                          <th class="text-left">
                            Uloga
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="userRole in userRoles"
                          :key="userRole.user_id"
                        >
                          <td>{{ userRole.user_id }}</td>
                          <td>{{ userRole.first_name }}</td>
                          <td>{{ userRole.last_name }}</td>
                          <td>{{ userRole.email}}</td>
                          <td>{{ userRole.username }}</td>
                          <td>{{ userRole.role_name }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>

                    <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                      <div class="text-center" v-if="show" @click="getUserRoles()">
                        <v-pagination
                          v-model="current_page"
                          :length="totalPages"
                          :total-visible="totalPages"
                          prev-icon="mdi-menu-left"
                          next-icon="mdi-menu-right"
                          color="black"
                          circle
                        ></v-pagination>
                      </div>
                    </v-col>


                    <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                      <div class="text-center">
                        
                        <v-btn
                        color="red accent-4"
                        dark
                        @click.stop="dialog = true"
                      >
                        Obriši korisnika!
                      </v-btn>

                      <v-dialog
                        v-model="dialog"
                        max-width="400"
                      >
                        <v-card>
                          <v-card-title class="text-h5" style="color: black; font-size: larger;">
                            Želite obrisati korisnika?
                          </v-card-title>

                          <v-card-text style="color: black; font-size: large;">
                            Ukolio želite obrisati određenog korisnika unesite njegov ID, i potvrdite brisanje.
                          </v-card-text>

                          
                          <v-card-text>
                            <v-text-field
                              label="Unesite ID korisnika"
                              v-model="deleted_user_id">
                            </v-text-field>
                          </v-card-text>
                           
                          

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              color="red lighten-1"
                              text
                              @click="dialog = false"
                            >
                              Natrag
                            </v-btn>

                            <v-btn
                              color="green darken-1"
                              text
                              @click="deleteUser()"
                            >
                              Potvrdi
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>

                      </div>
                    </v-col>




                    


                  </v-container>
                </div>
            </v-col>
        </v-row>          
        </v-sheet>  
        </v-container>  
        
        <div class="text-center ma-2">
      
          <v-snackbar
            v-model="snackbar"
            color="success"
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
        color="red"
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
  export default {
    data () {
      return {
        user : null,
        deleted_user_id : null,
        userRoles: [],
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
        dialog: false,
        snackbar: false,
        text: 'Korisnik je uspjesno izbrisan.',
        snackbar2: false,
        text2: 'Greška!',
  
      }
    },

    methods : {
      getUser() {
    
    api.get('api/auth/user').then(response => {
      if(response.status == 200) {
          this.user = response.data
          console.log(this.user)
        }
    })
      },

      getUserRoles() {
          api.get('api/auth/all-user-roles?page=' + this.current_page).then(response => {
      if(response.status == 200) {
          this.userRoles = response.data.data
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
      
    })
      },

      deleteUser() {
        api.delete('api/auth/delete-users/' + this.deleted_user_id).then(response => {
      if(response.status == 200) {
          this.snackbar = true
          this.getUserRoles()
          this.deleted_user_id = null
      } 
      
    }).catch(error => {
      if (error.response) {
        this.snackbar2 = true
      }
    })
    },

    
    
  },
  created() {
      this.getUser()
      this.getUserRoles()

  },
  }

</script>