<template>
  <fragment> 
    <div class="background"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">

        <v-card class="pa-4">

          <div class="text-center">
            
            <v-avatar size="100" color="primary lighten-5">

              <v-icon size="40" color="primary"> mdi-mail </v-icon>
            </v-avatar>

            <h2 class="primary--text"> Kontaktirajte nas </h2>
          </div>

          <v-form @submit.prevent="submitHandler" ref="form">
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
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-email"/>
            
              

            

                <v-textarea
                outlined
                name="input-7-4"
                label="Napišite kako vam možemo pomoći?">
              </v-textarea>
              </v-card-text>


    

            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="primary" mailto="raicivan06@gmail.com">
                <span class="white--text px-8">Pošalji</span> 
              </v-btn>
            </v-card-actions>

            

          </v-form>
        </v-card>
      </v-col>
    </v-main>
    

  </fragment> 
</template>

<script>


export default {
  name: 'UserRegistrationView',
  data: () => ({

    

    email: '',
    emailRules: [
      v => !!v || 'E-mail je potrebno unijeti!',
      v => /.+@.+\..+/.test(v) || 'E-mail mora biti odgovarajućeg formata!',
    ],

    return:{
      isEditing: false,
      model: null,
      
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