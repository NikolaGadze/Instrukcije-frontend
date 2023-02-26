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

            <h2 class="primary--text"> Registrirajte se kao instruktor </h2>
          </div>

          <v-form @submit.prevent="submitHandler" ref="form" enctype="multipart/form-data" method="post">


              <div>
                <v-card-text>
                  <div>
                    <v-text-field
                      v-model="form.first_name"
                      :rules="firstNameRules"
                      required
                      type="name"
                      label="Ime"
                      placeholder="Ime"
                      prepend-inner-icon="mdi-account"/>
                  </div>
                  

                  <div>
                    <v-text-field
                    v-model="form.last_name"
                    :rules="lastNameRules"
                    type="name"
                    label="Prezime"
                    placeholder="Prezime"
                    prepend-inner-icon="mdi-account"/>
                  </div>


                  <div>
                    <v-text-field
                    v-model="form.username"
                    :rules="usernameRules"
                    type="name"
                    label="Korisničko ime"
                    placeholder="Korisničko ime"
                    prepend-inner-icon="mdi-account-circle"/>
                  </div>
                

                  <div>
                    <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    prepend-inner-icon="mdi-email"/>
                  </div>
                
                
                  <div>
                    <v-text-field
                    v-model="form.password"
                    :rules="passwordRules"
                    :type="passwordShow? 'text' : 'password'"
                    label="Lozinka"
                    placeholder="Lozinka"
                    prepend-inner-icon="mdi-key"
                    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordShow = !passwordShow"/>
               
                  </div>

              
                  <div>
                    <v-text-field
                    v-model="form.password_confirmation"
                    :rules="passwordConfirmationRules"
                    :type="password_Show? 'text' : 'password'"
                    label="Potvrda lozinke"
                    placeholder="Potvrda lozinke"
                    prepend-inner-icon="mdi-key"
                    :append-icon="password_Show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="password_Show = !password_Show"/>
                  </div>

                  
                  <div>
                    <v-text-field
                    v-model="form.phone"
                    :rules="phoneRules"
                    type="phone"
                    label="Broj telefona"
                    placeholder="Broj telefona"
                    prepend-inner-icon="mdi-phone"/>
                  </div>
              
              

                  <div>
                    <v-autocomplete
                    v-model="form.country_name"
                    :rules="countryNameRules"
                    :items="countries"    
                    prepend-icon="mdi-flag"
                    label="Odaberite državu">
                    </v-autocomplete>
                  </div>


                  <div>
                    <v-autocomplete
                    v-model="form.city_name" 
                    :rules="cityNameRules"
                    :items="cities" 
                    prepend-icon="mdi-city"
                    label="Odaberite grad">
                    </v-autocomplete>
                  </div>


                  <div>
                    <v-autocomplete
                    v-model="form.subject_name"
                    :rules="subjectNameRules"
                    :items="subjects"   
                    prepend-icon="mdi-school"
                    label="Odaberite predmet">
                    </v-autocomplete>
                  </div>          
              </v-card-text>
              </div>

              
    

            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="primary"> 
                <span class="white--text px-8">Registriraj se</span> 
              </v-btn>
            </v-card-actions>

            

          </v-form>
        </v-card>
      </v-col>
    </v-main>
    
  </fragment>
</template>

<script>
import api from "@/plugins/api";
export default {
  name: 'InstructorRegisterView',
  data: () => ({
    form: {
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      password: null,
      password_confirmation: null,
      phone: null,
      country_name: null,
      city_name: null,
      subject_name : null,
    },
    
    countries: ['Hrvatska', 'Srbija', 'Bosna i Hercegovina'],
    cities: ['Zagreb', 'Split', 'Osijek', 'Rijeka', 'Beograd', 'Novi Sad', 'Niš','Kragujevac', 'Sarajevo', 'Mostar', 'Banja Luka', 'Tuzla'],
    subjects : ['Programiranje', 'Anatomija', 'Matematika'],
    
    passwordShow: false,
    
    password_Show: false,

    firstNameRules: [
      v => !!v || 'Ime je potrebno unijeti',
      v => (v && v.length >= 2) || 'Ime mora imati 2 ili više slova!',
    ],

    lastNameRules: [
      v => !!v || 'Prezime je potrebno unijeti',
      v => (v && v.length >= 2) || 'Prezime mora imati 2 ili više slova!',
    ],

    usernameRules: [
      v => !!v || 'Korisničko ime je potrebno unijeti',
      v => (v && v.length >= 2) || 'Korisničko ime mora imati 2 ili više slova!',
    ],

    emailRules: [
      v => !!v || 'Potrebno je unijeti email',
      v => /.+@.+\..+/.test(v) || 'Neispravan format email adrese!',
    ],

    passwordRules: [
      v => !!v || 'Lozinku je potrebno unijeti',
      v => (v && v.length >= 6) || 'Lozinka mora imati 6 ili više znakova!',
    ],

    passwordConfirmationRules: [
      v => !!v || 'Potvrdu lozinke je potrebno unijeti',
    ],

    phoneRules: [
      v => !!v || 'Potrebno je unijeti broj telefona',
      v => (v && v.length >= 9) || 'Broj telefona mora imati 9 ili više znakova!',
    ],

    countryNameRules: [
      v => !!v || 'Potrebno je odabrati državu',
    ],

    cityNameRules: [
      v => !!v || 'Potrebno je odabrati grad',
    ],

    subjectNameRules: [
      v => !!v || 'Potrebno je odabrati predmet',
    ],

   
  }),
  methods: {
      registerAsInstructor() {
        api.post('api/auth/registerAsInstructor', this.form).then(response => {
        // After register, go to login
        this.$router.push('/login')
         
      })
    },
    submitHandler() {
      if (this.$refs.form.validate()){
  
        this.registerAsInstructor()
        
        }
      }
  }
  
}
</script>
