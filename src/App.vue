<template>
  <v-app id="inspire">

    <v-app-bar app class="blue-grey darken-4">
      <v-app-bar-nav-icon style="color: white" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white;">Instrukcije</v-toolbar-title>

      <img src="./assets/sum_logo.png" width="120px" @click="backHome()">

      <v-divider></v-divider>
      
      <button type="button" @click="leadToLogin()" class="btn btn-primary" style="margin-right: 20px; border-radius: 8px;" > Login </button> 
      <button type="button" @click="leadToSignin()" class="btn btn-primary" style="margin-right: 10px; border-radius: 8px;"> Sign Up </button> 
    </v-app-bar>
    
    
    
    
    
    <v-navigation-drawer
      color="blue-grey darken-4"
      v-model="drawer"
      fixed
      temporary
    >
    <v-list>
        <v-list-item
          v-for="link in links"
          :key="link"
          :to="link.ruta"
          link
          color="light-blue"       
        >
          <v-list-item-content>
            <v-list-item-title style="color: white; font-size: larger;"><v-icon style="margin-right: 10px;">{{ link.ikona }}</v-icon> {{ link.ime }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main class="blue-grey darken-4">
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

      <v-footer
        color="primary"
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <v-col
            class="blue darken-4 py-4 text-center white--text"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Ivan Raič i Nikola Gadže</strong>
            
          </v-col>
        </v-row>
      </v-footer>

  </v-app>

  
</template>

<script>
  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,


      links: [
        {ime: 'Početna', ruta: '/', ikona: 'mdi-home'},
        {ime: 'O nama', ruta: '/about', ikona: 'mdi-account-group'},
        {ime: 'Registracija', ruta: '/signup', ikona: 'mdi-account-tag'},
        {ime: 'Prijava', ruta: '/login', ikona: 'mdi-login'},
        
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
      
      
      
    }
  }
</script>
<style scoped>
  

  
</style>