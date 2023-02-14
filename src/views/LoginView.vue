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
              <v-btn :loading="loading" type="submit" color="primary"> 
                <span class="white--text px-8"> Prijavite se </span> 
              </v-btn>
            </v-card-actions>

          </v-form>

        </v-card>

      </v-col>
    </v-main>
    <v-snackbar color="green" v-model="snackbar">
      Login success
    </v-snackbar>

  </fragment>  

</template>

<script>
  export default {
  name: 'LoginView',
  data: () => ({

    loading: false,
    snackbar: false,

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

    submitHandler(){
      if (this.$refs.form.validate()){
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.snackbar = true
        }, 3000)

      }
    },
    loadToSignUp(){
      window.open('/singup', '_self')
    }
    
  }
  
}
</script>
<!--<style>
  .background{
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOMNNMWt6ZrmsmMNJ5VgAFY4mJXh3M5brdg&usqp=CAU) !important;
    height: 350px;
    width: 100%;
    display: block;
    position: absolute;
    top:0;
    background-size: cover;
    
  }
</style>-->
