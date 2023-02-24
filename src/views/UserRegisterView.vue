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

            <h2 class="primary--text"> Registrirajte se kao korisnik </h2>
          </div>

          <v-form @submit.prevent="submitHandler" ref="form" enctype="multipart/form-data">
              <v-card-text>
                <v-text-field
                type="name"
                label="Ime"
                placeholder="Ime"
                prepend-inner-icon="mdi-account"/>
                
                <v-text-field
                type="name"
                label="Prezime"
                placeholder="Prezime"
                prepend-inner-icon="mdi-account"/>

              <v-text-field
                type="name"
                label="Korisničko ime"
                placeholder="Korisničko ime"
                prepend-inner-icon="mdi-account-circle"/>
            
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-email"/>
            
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow? 'text' : 'password'"
                label="Lozinka"
                placeholder="Lozinka"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"/>
              <v-text-field
                v-model="conf_password"
                :rules="password_Rules"
                :type="password_Show? 'text' : 'password'"
                label="Potvrda lozinke"
                placeholder="Potvrda lozinke"
                prepend-inner-icon="mdi-key"
                :append-icon="password_Show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="password_Show = !password_Show"/>

                <v-text-field
                type="phone"
                label="Broj telefona"
                placeholder="Broj telefona"
                prepend-inner-icon="mdi-phone"/>

                <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Odaberite fotografiju"
                  prepend-icon="mdi-camera"
                  label="Slika">
                </v-file-input>

                <v-autocomplete      
                prepend-icon="mdi-flag"
                label="Odaberite državu">
                </v-autocomplete>

                <v-autocomplete      
                prepend-icon="mdi-city"
                label="Odaberite grad">
                </v-autocomplete>

                <v-textarea
                outlined
                name="input-7-4"
                label="Unesite naziv predmeta iz kojih tražite instrukcije">
              </v-textarea>
              </v-card-text>


    

            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="primary"> 
                <span class="white--text px-8">Registriraj se</span> 
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
  name: 'UserRegistrationView',
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
      }
       
  }
  
}
</script>