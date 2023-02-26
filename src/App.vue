<template>
  <v-app id="inspire">

    <v-app-bar app class="cyan lighten-5">
      <v-app-bar-nav-icon style="color: black" @click="drawer = !drawer"></v-app-bar-nav-icon>


      <v-toolbar-title style="color: black; margin-right: 10px;">Instrukcije</v-toolbar-title>

      <img src="./assets/sum_logo.png" width="120px" @click="backHome()">

      <v-spacer></v-spacer>

      
      <!--<div v-if="!user">
        <v-toolbar-title style="color: black; margin-right: 10px; border-radius: 8px;">Prijavite se na sustav!</v-toolbar-title>
      </div>-->
      

      
      <!--<div v-if="!user">
        <button type="button" @click="leadToLogin()" class="btn btn-primary" style="margin-right: 10px; border-radius: 8px;" > Prijava </button> 
        <button type="button" @click="leadToSignin()" class="btn btn-primary" style="margin-right: 10px; border-radius: 8px;"> Registracija </button> 
      </div>-->

      

      <!--<div v-if="user">
        <v-btn @click="logout()" color="red" style="color: white">
          Odjava <v-icon v-if="!user" style="color:white" @click="logout()">
        mdi-logout
      </v-icon>
        </v-btn>
      </div>-->
      
    </v-app-bar>
    
    
    
    
    
    <v-navigation-drawer
      color="blue-grey "
      v-model="drawer"
      fixed
      temporary
    >
    <v-list>
        <v-list-item
          v-for="link in linksAdmins"
          :key="link"
          :to="link.ruta"
          link
          color="light-blue"       
        >
          <v-list-item-content>
            <v-list-item-title style="color: white; font-size: larger;"><v-icon style="margin-right: 10px;">{{ link.ikona }}</v-icon> {{ link.ime }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-spacer></v-spacer>

        <v-list-item @click="logout()" v-if="user === null">
          <v-list-item-content>
            <v-list-item-title style="color: white; font-size: larger;"><v-icon style="margin-right: 10px;">mdi-logout</v-icon> Odjava</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       

      </v-list>
    </v-navigation-drawer>

    
    
    <v-main class="cyan lighten-5">
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="12">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    
      <div class="novi_redak">
      <!--color="primary"-->
      

      <v-bottom-navigation class="cyan lighten-5">
        <v-btn @click="toFacebook()">
          <v-icon color="indigo darken-2" >mdi-facebook</v-icon>
        </v-btn>

        <v-btn @click="toInstagram()">
          <v-icon color="pink accent-3">mdi-instagram</v-icon>
        </v-btn>

        <v-btn @click="toTwitter()">
          <v-icon color="cyan lighten-2">mdi-twitter</v-icon>
        </v-btn>

        <v-btn @click="toYouTube()">
          <v-icon color="red darken-1">mdi-youtube</v-icon>
        </v-btn>

        <v-btn @click="toLinkedIn()">
          <v-icon color="blue darken-4">mdi-linkedin</v-icon>
        </v-btn>
        
      </v-bottom-navigation>
      </div>

      <v-footer
        class="novi_redak" 
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
        <!--blue darken-3 py-4 text-center white--text-->
          <v-col
            class="py-4 text-center white--text"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Ivan Raič i Nikola Gadže </strong>

            
          </v-col>

        </v-row>
      </v-footer>
    
  </v-app>

  
</template>

<script>
import api from "@/plugins/api";

export default {
    data: () => ({
      naslov: document.title = 'Instrukcije',
      drawer: null,
      user: null,

      linksGuests: [
        {ime: 'Početna', ruta: '/', ikona: 'mdi-home'},
        {ime: 'O nama', ruta: '/about', ikona: 'mdi-help-box'},
        {ime: 'Kontakt', ruta: '/contactUs', ikona: 'mdi-mail'},
        {ime: 'Registracija', ruta: '/signup', ikona: 'mdi-account-tag'},
        {ime: 'Prijava', ruta: '/login', ikona: 'mdi-login'},
    ],

    linksInstructorsUsers: [
        {ime: 'Početna', ruta: '/', ikona: 'mdi-home'},
        {ime: 'O nama', ruta: '/about', ikona: 'mdi-help-box'},
        {ime: 'Kontakt', ruta: '/contactUs', ikona: 'mdi-mail'},
        {ime: 'Registracija', ruta: '/signup', ikona: 'mdi-account-tag'},
        {ime: 'Prijava', ruta: '/login', ikona: 'mdi-login'},
        {ime: 'Pretražite instrukcije', ruta: '/searchInstructors', ikona: 'mdi-magnify'},
        {ime: 'Filtriranje instrukcija', ruta: '/filterInstructors', ikona: 'mdi-account-filter'},
        {ime: 'Pretražite studente', ruta: '/searchUsers', ikona: 'mdi-account-search'},
        {ime: 'Filtriranje studenta', ruta: '/filterUsers', ikona: 'mdi-account-group'},
        {ime: 'Profil', ruta: '/profile', ikona: 'mdi-account-circle'},
    ],

    linksAdmins: [
        {ime: 'Početna', ruta: '/', ikona: 'mdi-home'},
        {ime: 'O nama', ruta: '/about', ikona: 'mdi-help-box'},
        {ime: 'Kontakt', ruta: '/contactUs', ikona: 'mdi-mail'},
        {ime: 'Registracija', ruta: '/signup', ikona: 'mdi-account-tag'},
        {ime: 'Prijava', ruta: '/login', ikona: 'mdi-login'},
        {ime: 'Pretražite instrukcije', ruta: '/searchInstructors', ikona: 'mdi-magnify'},
        {ime: 'Filtriranje instrukcija', ruta: '/filterInstructors', ikona: 'mdi-account-filter'},
        {ime: 'Pretražite studente', ruta: '/searchUsers', ikona: 'mdi-account-search'},
        {ime: 'Filtriranje studenta', ruta: '/filterUsers', ikona: 'mdi-account-group'},
        {ime: 'Profil', ruta: '/profile', ikona: 'mdi-account-circle'},
        {ime: 'Upravljanje korisnicima', ruta: '/management', ikona: 'mdi-cog-outline'}
    ]





    }),

    methods:{
      leadToLogin() {
        window.open("/login","_self")
      },
      leadToSignin(){
        window.open("/signup", "_self")
      },
      backHome(){
        window.open("/", "_self")
      },
      toInstagram(){
        window.open("https://www.instagram.com/", 'blank')
      },
      toFacebook(){
        window.open("https://www.facebook.com/", 'blank')
      },
      toTwitter(){
        window.open("https://www.twitter.com/", 'blank')
      },
      toLinkedIn(){
        window.open("https://www.linkedin.com/", 'blank')
      },
      toYouTube(){
        window.open("https://www.youtube.com/", 'blank')
      },

      getUser() {
    
    api.get('api/auth/user').then(response => {
      if(response.status == 200) {
          this.user = response.data
      }
      
    })
      },

      logout() {
      // Remove token on logout
      localStorage.removeItem('app_token')
      this.$router.go(0)
    }
      
    },
    created() {
      
      //this.getUser()
    
  },
  }

  
</script>
<style scoped>
  
  .novi_redak{
    margin: 0;
    padding: 0;
    animation: bgcolor infinite 20s;
    
  }
 
    
  
  @keyframes bgcolor{
    0%
    {
      background-color: #e74c3c;
    }
    20%
    {
      background-color:#2980b9 ;
    }
    40%
    {
      background-color:#7f8fa6 ;
    }
    60%
    {
      background-color: #192a56;
    }
    80%
    {
      background-color:#34495e ;
    }
    100%{
      background-color: #e74c3c;
    }
  }
  
  
</style>