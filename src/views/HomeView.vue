<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img cover height="250" src="../assets/predavac.jpg" >

    </v-img>

    <v-card-item>
      

      <v-card-subtitle class="font-weight-bold" style="text-align: center;">
        Želiš prenijeti znanje na druge?<br>
        Prijavi se kao predavač
      </v-card-subtitle>
    </v-card-item>

    

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-btn @click="loadToSignup_predavac()" color="deep-purple-lighten-2" variant="text" style="margin-bottom: 10px;"> Registiraj se</v-btn>

  <!--Student-->
  
      <v-progress-linear
        :active="student"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    

    <v-img cover height="250" src="../assets/student_za_karticu.jpg" >

    </v-img>

    <v-card-item>
      

      <v-card-subtitle class="font-weight-bold" style="text-align: center;">
        Želite naučiti više?<br>
        Na pravom ste mjestu!<br>
      </v-card-subtitle>
    </v-card-item>

    

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-btn @click="loadToSignup_student()" color="deep-purple-lighten-2" variant="text" style="margin-bottom: 10px;"> Registiraj se</v-btn>
  </v-card>

</template>

<script>
export default {
  data:() => ({

  }),
  methods: {
    loadToSignup_predavac(){
      window.open("/SignUp_predavac", "_self")
    },
    loadToSignup_student(){
      window.open("/SignUp_student", "_self")
    },

  }
}


</script>



