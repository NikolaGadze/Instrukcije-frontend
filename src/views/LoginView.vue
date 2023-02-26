<template>
  
  <fragment> 
    <div class="background"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">

        <v-card class="pa-4">

          <div class="text-center">
            
            <v-avatar size="100" color="primary lighten-5">

              <v-icon size="40" color="primary"> mdi-account </v-icon>
            </v-avatar>

            <h2 class="primary--text">Prijava</h2>
          </div>

          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Unesite vašu email adresu"
                placeholder="Email"
                prepend-inner-icon="mdi-email"
              />

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow? 'text' : 'password'"
                label="Unesite vašu lozniku"
                placeholder="Lozinka"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
              />

              <p style="font-size: medium;">Nemate račun?<a href="/signup" style="text-decoration: none;"> Registrirajte se!</a></p>
              <v-switch label="Zapamti me" color="primary"></v-switch>
            </v-card-text>

            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="primary" @click="login"> 
                <span class="white--text px-8"> Prijavite se </span> 
              </v-btn>
            </v-card-actions>

          </v-form>

        </v-card>

      </v-col>
    </v-main>


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
    
    

  </fragment>  

</template>

<script>

import api from "@/plugins/api";

  export default {
  name: 'LoginView',
  data: () => ({

    loading: false,
    snackbar: false,
    text: "Pogrešan email ili lozinka!",

    passwordShow: false,
    password: '',
    passwordRules: [
      v => !!v || 'Lozinku je potrebno unijeti!',
      v => (v && v.length >= 6) || 'Lozinka mora imati 6 ili više znakova!',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Email adresu je pootrebno unijeti!',
      v => /.+@.+\..+/.test(v) || 'Neispravan format email-a!',
    ],
  
  }),


  methods: {
    login() {
      api.post('api/auth/login', {
       'email': this.email,
       'password': this.password
      }).then(response => {
        if (response.status === 200) {
          // Add token to local storage
          localStorage.setItem("app_token", response.data)
          // Go to home
          this.$router.push('/')
        }
      }).catch(error => {
      if (error.response && error.response.status === 422) {
        this.snackbar = true
      }
    })
    },
    submitHandler(){
      if (this.$refs.form.validate()){
        this.login()

      }
    },
    loadToSignUp(){
      window.open('/singup', '_self')
    }
    
  }
  
}
</script>
<style>

</style>
