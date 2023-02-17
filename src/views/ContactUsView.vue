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

            <h2 class="primary--text"> Kontaktirajte nas putem emaila!</h2>
          </div>

          <v-form @submit.prevent="sendEmail" ref="form">
              <v-card-text>
                <v-text-field v-model="to" label="Email" append-icon="mdi-mail" required></v-text-field>
                <v-text-field v-model="subject" label="Naslov" append-icon="mdi-text-long" required></v-text-field>
                <v-textarea v-model="message" label="Poruka" append-icon="mdi-pencil" outlined required></v-textarea>
              </v-card-text>


    

            <v-card-actions class="justify-center">
              <v-btn type="submit" color="primary">Pošalji</v-btn>
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

    <v-snackbar
      v-model="error_snackbar"
      color="red darken-1"
    >
      {{ text2 }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="error_snackbar = false"
        >
          Zatvori
        </v-btn>
      </template>
    </v-snackbar>

    


  </fragment> 
</template>

<script>

export default {
  name: 'ContactUsView',
  data: () => ({
    to: '',
    subject: '',
    message: '',
    snackbar : false,
    error_snackbar: false,
    text: "Email je uspješno poslan!",
    text2: "Pogreška pri slanju emaila!"
  }),

  methods: {
    async sendEmail() {
      try {
        const response = await fetch('https://formspree.io/f/xoqzdarp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _replyto: this.to,
            subject: this.subject,
            message: this.message
          })
        })
        if (response.ok) {
          this.snackbar = true
          this.to = ''
          this.subject = ''
          this.message = ''
        } else {
          this.error_snackbar = true

        }
      } catch (error) {
        this.error_snackbar = true
        console.error(error)
      }
    }

  
  }

    
       
  }
  

</script>