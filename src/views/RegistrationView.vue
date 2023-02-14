<template>
  <v-row >
    <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12" >
      <v-row>
        <v-col>
          <p id="naslov">Želite prenijeti znanje na druge?</p>
          <p class="tekst"> Registriraj se kao instruktor i podijeli svoje znanje</p>
          <p class="tekst">Kao instruktor imati ćete razne pogodnosti.<br>
            Moći ćete urediti svoj profil te kreirati učionicu za rad sa studentima. </p>
        </v-col>
      </v-row>
      
      <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="500"
        style="border-radius: 20px; border:1px solid blue;"
        
      >
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img cover height="500" width="500" src="../assets/predavac.jpg" >
          <v-row>
            <v-btn @click="loadToSignup_predavac()" color="#FFFFFF" variant="outlined" 
            style="opacity: 0.9; border-radius: 5px; color: blue;"
            > Registiraj se
            </v-btn>
          </v-row>
        </v-img>

       

      </v-card>
    
    
    </v-col>
  
    <!--student-->
    
    <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
      <v-row>
        <v-col>
          <p id="naslov">Želite naučiti više?</p>
          <p class="tekst">Registiraj se kao student/korisnik i pretraži nekoga tko ti može pomoći</p>
          <p class="tekst">Kao korisnik imati ćete mogućnosti pretražiti instruktore po mjestu, predmetu koji želite naučiti i stupiti u kontakt s njima.</p>
        </v-col>
      </v-row>

      <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="500"
        style="border-radius: 20px; border:1px solid blue"
      >
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img cover height="500" width="500" src="../assets/student_za_karticu.jpg" >
          <v-row justify="center">
            
            <v-btn @click="loadToSignup_student()" variant="outlined" 
            color="#FFFFFF" 
            style="opacity: 0.7; border-radius: 5px; color: blue;"
            > Registiraj se</v-btn>
            
          </v-row>
        </v-img>

      </v-card>
    </v-col>
  </v-row>

</template>
  
<script>


  export default {
    name: 'RegistrationView',
    data: () => ({
  
      loading: false,
      snackbar: false,
  
      passwordShow: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be 6 characters or more!',
      ],

      password_Show: false,
      conf_password: '',
      password_Rules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be 6 characters or more!',
      ],

      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      return:{
        isEditing: false,
        model: null,
        states:[
          'Hrvatska', 'Bosna i Hercegovina', 'Srbija',
        ],
      }
      

    }),

    methods: {
      submitHandler(){
        if (this.$refs.form.validate()){
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.snackbar = true
          }, 3000)}
        },
      loadToSignup_predavac(){
        window.open('/signup_predavac', '_self')
      },
      loadToSignup_student(){
        window.open('/signup_student', '_self')
      }

         
    }
    
  }
</script>
<style scoped>
#naslov{
  text-align: center;
  text-decoration: solid;
  color: black;
  margin-top: 10px;
  font-size: 150%;
  border-left: 6px solid lightblue;
  background-color: lightblue;
  border-radius: 10px;
}
.tekst{
  text-align: center;
  font-size: large;
}
</style>

  