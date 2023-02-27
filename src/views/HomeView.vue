<template>
  
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <v-row>
     
      <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12" >
        <v-img src="../assets/pocetna.jpg" style="width: 600px; border-radius: 15px; border: 2px solid DodgerBlue; box-shadow: 15px 25px 38px black;" id="slika" ></v-img>
      </v-col>
      
      
      
      <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">

        <h3 class="naslovi" style="text-align: center; margin-top: 25%; text-shadow: 4px 4px lightskyblue; margin-bottom: 0%; font-size: x-large;">Dobro došli na online instrukcije<br></h3>
        <p  style="text-align: center; margin-top: 5% ;font-size: x-large;
        ">Prijavite se kao Instruktor ili kao student i saznajte više o našoj aplikaciji</p>
        

        
      </v-col>
      

    </v-row>
    

    
    <v-row class="row" style="margin-top:5%;">
      <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">

        <h4 style="margin-top: 10%; text-align: center; text-shadow: 4px 4px lightskyblue;"> Što su online instrukcije? </h4>

        <p style="text-align: center; margin-top: 5%; font-size: x-large;">
        Naziv projekta su Instrukcije, čiji je osnovni cilj studentima i učenicima omogućiti što lakše stupanje u kontakt s predavačima koji 
        nude usluge instrukcija. </p>
      </v-col>

      <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
        <div> 
          <v-img id="slika_d" src="../assets/test.png" style="border-radius: 15px; border: 2px solid DodgerBlue; box-shadow: 15px 25px 38px black; margin-bottom: 5%;"></v-img>
        </div>
      </v-col>

    </v-row>
    

  
</div>



</template>

<script>
export default {
data:() => ({
 
}),
methods: {
  
}
}

</script> 
<style >


 /*#slika{
  position: relative;
  animation: mymove 3s;
  animation-fill-mode: forwards;
  
  padding: 10px;
  border:1px solid;
  box-shadow: 5px 10px 18px black;
  display: flex;
}
#slika:hover{
  box-shadow: 15px 25px 38px black;
}
@keyframes mymove{
  from {top: 0px;}
  to {top: 200px; }
}
#slika_d{
  position: relative;
  animation: my 3s;
  animation-fill-mode: forwards;
  
  padding: 10px;
  border:1px solid;
  box-shadow: 5px 10px 18px black;
  display: flex;
  border-radius: 15px;
}
@keyframes my{
  from {top: -0px;}
  to {top: -200px; }
}
#slika_d:hover{
  box-shadow: 15px 25px 38px black;
  
}*/



</style>


