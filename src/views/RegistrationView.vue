<template>
    
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
        }
         
    }
    
  }
</script>
  