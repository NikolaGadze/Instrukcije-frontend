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
                v-model="first_name"
                :rules="firstNameRules"
                type="name"
                label="Ime"
                placeholder="Ime"
                prepend-inner-icon="mdi-account"/>
                
                <v-text-field
                v-model="last_name"
                :rules="lastNameRules"
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
                prepend-inner-icon="mdi-email" style="margin-bottom: 25px"/>
            
              

            
                <v-textarea
                v-model="message"
                :rules="messageRules"
                outlined
                name="input-7-4"
                label="Napišite kako vam možemo pomoći?">
              </v-textarea>
              </v-card-text>


    

            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="primary" @click="sendEmail()">
                <span class="white--text px-8">Pošalji</span> 
              </v-btn>
            </v-card-actions>

            

          </v-form>
        </v-card>
      </v-col>
    </v-main>

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

    


  </fragment> 
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUsView',
  data: () => ({

    
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    firstNameRules: [
      v => !!v || ' Potrebno je unijeti vaše ime!',
    ],

    lastNameRules: [
      v => !!v || ' Potrebno je unijeti vaše prezime!',
    ],

    emailRules: [
      v => !!v || 'E-mail je potrebno unijeti!',
      v => /.+@.+\..+/.test(v) || 'E-mail mora biti odgovarajućeg formata!',
    ],
    messageRules: [
      v => !!v || 'Potrebno je napisati zbog čega Vam je potrebna pomoć!',
    ],

    snackbar: false,
    dialog2: false,
    text: 'Vaši podatci su uspješno poslani!',
  
    

    

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

      sendEmail(e) {
        


        if((!this.first_name == '') && (!this.last_name == '') && (!this.age == '') && (!this.email == '')){
          try {
            //service_1b6o6zi
            //template_4n9gko5
            //jS33g69OXb2H-HKiF
        emailjs.sendForm('service_1b6o6zi', 'template_4n9gko5', e.target,
        'jS33g69OXb2H-HKiF', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
        }
      
          this.snackbar = true
          this.first_name = ''
          this.last_name = ''
          this.email = ''
          this.message = ''
    },

  
  }

    
       
  }
  

</script>