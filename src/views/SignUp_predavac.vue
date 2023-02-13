<template>
  


  <fragment> 
    <div class="background"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
  
        <v-card class="pa-4">
  
          <div class="text-center">
              
            <v-avatar size="100" color="indigo lighten-4">
  
              <v-icon size="40" color="indigo"> mdi-account </v-icon>
            </v-avatar>
  
            <h2 class="indigo--text"> Sign Up </h2>
          </div>
  
          <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                <v-text-field
                  v-model="ime"
                  type="name"
                  label="Korisnicko ime"
                  placeholder="Korisnicko ime"
                  prepend-inner-icon="mdi-account"
                />
              </v-card-text>  


              <v-card-text>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  prepend-inner-icon="mdi-account"
                />
              </v-card-text>
              
              <v-card-text>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :type="passwordShow? 'text' : 'password'"
                  label="Password"
                  placeholder="Password"
                  prepend-inner-icon="mdi-key"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                />
                <v-text-field
                  v-model="conf_password"
                  :rules="password_Rules"
                  :type="password_Show? 'text' : 'password'"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  prepend-inner-icon="mdi-key"
                  :append-icon="password_Show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="password_Show = !password_Show"
                />

              </v-card-text>

          <!--ODABERI DRZAVU-->
          <v-container fluid>
            <v-row>
             <v-col cols="12">
                <v-autocomplete
                  v-model="values"
                  :odaberi_drzavu="odaberi_drzavu"
                  density="drzava"
                  label="Odaberi Državu"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>


          <!--UNESI PREDMET-->

          <v-text-field
            label="Predmet koji želite podučavati"
            :rules="rules"
            hide-details="auto"
            
          ></v-text-field><br>

          <!--Slika-->
          <v-file-input
            label="File input"
            variant="filled"
            prepend-icon="mdi-camera"
          ></v-file-input>
          
                


              <v-switch label="Remeber me" color="indigo"></v-switch>
      
  
              <v-card-actions class="justify-center">
                <v-btn :loading="loading" type="submit" color="indigo"> 
                  <span class="white--text px-8"> Sign In </span> 
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
    name: 'SignUp_predavac',
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

      

      odaberi_drzavu: ['Hrvatska', 'Srbija' , 'Bosna i Hercegovina'],
      
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
  