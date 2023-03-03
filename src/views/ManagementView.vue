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
                          <th class="text-left">
                            Ukloni
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
                          <td><v-icon style="color: white" @click="showDetails(userRole)">mdi-delete</v-icon></td>
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

                    <v-dialog
                      v-model="dialog2"
                      width="550"
                    >
                      <v-card>
                        <v-card-title class="text-h5 red darken-1 mb-5 white--text">
                          Jeste li sigurni da želite obrisati korisnika?
                        </v-card-title>

                        <v-card-text style="color: black; font-size: larger;">
                          <b>Ime i prezime:</b> {{ selected_user.first_name + ' ' +  selected_user.last_name}} 
                        </v-card-text>

                        <v-card-text style="color: black; font-size: larger;">
                          <b>Email:</b> {{ selected_user.email}}   
                        </v-card-text>

                        <v-card-text style="color: black; font-size: larger;">
                          <b>Korisničko ime:</b> {{ selected_user.username}}   
                        </v-card-text>

                        <v-card-text style="color: black; font-size: larger;">
                          <b>Uloga:</b> {{ selected_user.role_name}}   
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              color="red lighten-1"
                              text
                              @click="dialog2 = false"
                            >
                              Natrag
                            </v-btn>

                            <v-btn
                              color="green darken-1"
                              text
                              @click="deleteUser(selected_user.user_id)"
                            >
                              Izbriši
                            </v-btn>
                          </v-card-actions>
                      </v-card>
                    </v-dialog>




                    


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
  import { mapState } from 'vuex'
  
  export default {
    data () {
      return {
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
        dialog2: false,
        selected_user: {},
  
      }
    },

    methods : {
      

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

      deleteUser(user_id) {
        api.delete('api/auth/delete-users/' + user_id).then(response => {
      if(response.status == 200) {
          this.snackbar = true
          this.getUserRoles()
      } 
      
    }).catch(error => {
      if (error.response) {
        this.snackbar2 = true
      }
    })
    },

    showDetails(selected_user) {
        this.selected_user = selected_user
        this.dialog2 = true
      }

    
    
  },
  computed: {
    ...mapState(['user']),

     },
  
  created() {
      this.$store.dispatch("getUser")
      this.getUserRoles()

  },
  }

</script>