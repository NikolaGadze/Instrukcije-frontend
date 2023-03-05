"use strict";(self["webpackChunkprojekt_naslovna"]=self["webpackChunkprojekt_naslovna"]||[]).push([[311],{9556:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var i=a(1653),o=a(5102),r=a(3423),s=a(4562),n=a(9582),l=a(4886),u=a(266),m=a(5125),c=a(4324),d=a(3059),p=a(9780),h=a(2648),f=function(){var e=this,t=e._self._c;return t("fragment",[t("div",{staticClass:"background"},[t("div",[t(i.Z,{attrs:{color:"blue darken-2",dark:"",dismissible:""}},[e._v(" Uneseni email, korisničko ime i broj telefona moraju biti jedinstveni, i ne smiju već biti korišteni. ")])],1),t(d.Z,{staticClass:"d-flex justify-center align-center"},[t(u.Z,{staticClass:"mx-auto",attrs:{cols:"10",lg:"4"}},[t(n.Z,{staticClass:"pa-4"},[t("div",{staticClass:"text-center"},[t(r.Z,{attrs:{size:"100",color:"primary lighten-5"}},[t(c.Z,{attrs:{size:"40",color:"primary"}},[e._v(" mdi-account ")])],1),t("h2",{staticClass:"primary--text"},[e._v(" Registrirajte se kao korisnik ")])],1),t(m.Z,{ref:"form",attrs:{enctype:"multipart/form-data",method:"post"},on:{submit:function(t){return t.preventDefault(),e.submitHandler.apply(null,arguments)}}},[t("div",[t(l.ZB,[t("div",[t(p.Z,{attrs:{rules:e.firstNameRules,required:"",type:"name",label:"Ime",placeholder:"Ime","prepend-inner-icon":"mdi-account"},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}})],1),t("div",[t(p.Z,{attrs:{rules:e.lastNameRules,type:"name",label:"Prezime",placeholder:"Prezime","prepend-inner-icon":"mdi-account"},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1),t("div",[t(p.Z,{attrs:{rules:e.usernameRules,type:"name",label:"Korisničko ime",placeholder:"Korisničko ime","prepend-inner-icon":"mdi-account-circle"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("div",[t(p.Z,{attrs:{rules:e.emailRules,type:"email",label:"Email",placeholder:"Email","prepend-inner-icon":"mdi-email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("div",[t(p.Z,{attrs:{rules:e.passwordRules,type:e.passwordShow?"text":"password",label:"Lozinka",placeholder:"Lozinka","prepend-inner-icon":"mdi-key","append-icon":e.passwordShow?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.passwordShow=!e.passwordShow}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("div",[t(p.Z,{attrs:{rules:e.passwordConfirmationRules,type:e.password_Show?"text":"password",label:"Potvrda lozinke",placeholder:"Potvrda lozinke","prepend-inner-icon":"mdi-key","append-icon":e.password_Show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.password_Show=!e.password_Show}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1),t("div",[t(p.Z,{attrs:{rules:e.phoneRules,type:"phone",label:"Broj telefona",placeholder:"Broj telefona","prepend-inner-icon":"mdi-phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),t("div",[t(o.Z,{attrs:{rules:e.countryNameRules,items:e.countries,"prepend-icon":"mdi-flag",label:"Odaberite državu"},model:{value:e.form.country_name,callback:function(t){e.$set(e.form,"country_name",t)},expression:"form.country_name"}})],1),t("div",[t(o.Z,{attrs:{rules:e.cityNameRules,items:e.cities,"prepend-icon":"mdi-city",label:"Odaberite grad"},model:{value:e.form.city_name,callback:function(t){e.$set(e.form,"city_name",t)},expression:"form.city_name"}})],1),t("div",[t(h.Z,{attrs:{rules:e.descriptionNameRules,outlined:"",name:"input-7-4",label:"Unesite naziv predmeta iz kojih tražite instrukcije"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)])],1),t(l.h7,{staticClass:"justify-center"},[t(s.Z,{attrs:{loading:e.loading,type:"submit",color:"primary"}},[t("span",{staticClass:"white--text px-8"},[e._v("Registriraj se")])])],1)],1)],1)],1)],1),t("div",[t(i.Z,{attrs:{border:"top",color:"red darken-2",dark:"",dismissible:""},model:{value:e.errorPasswordAlert,callback:function(t){e.errorPasswordAlert=t},expression:"errorPasswordAlert"}},[e._v(" Lozinke moraju biti jednake ")])],1)],1)])},v=[],w=(a(7658),a(3891)),k={name:"InstructorRegisterView",data:()=>({form:{first_name:null,last_name:null,username:null,email:null,password:null,password_confirmation:null,phone:null,country_name:null,city_name:null,description:null},countries:["Hrvatska","Srbija","Bosna i Hercegovina"],cities:["Zagreb","Split","Osijek","Rijeka","Beograd","Novi Sad","Niš","Kragujevac","Sarajevo","Mostar","Banja Luka","Tuzla"],subjects:["Programiranje","Anatomija","Matematika"],passwordShow:!1,password_Show:!1,errorPasswordAlert:!1,firstNameRules:[e=>!!e||"Ime je potrebno unijeti",e=>e&&e.length>=2||"Ime mora imati 2 ili više slova!"],lastNameRules:[e=>!!e||"Prezime je potrebno unijeti",e=>e&&e.length>=2||"Prezime mora imati 2 ili više slova!"],usernameRules:[e=>!!e||"Korisničko ime je potrebno unijeti",e=>e&&e.length>=2||"Korisničko ime mora imati 2 ili više slova!"],emailRules:[e=>!!e||"Potrebno je unijeti email",e=>/.+@.+\..+/.test(e)||"Neispravan format email adrese!"],passwordRules:[e=>!!e||"Lozinku je potrebno unijeti",e=>e&&e.length>=6||"Lozinka mora imati 6 ili više znakova!"],passwordConfirmationRules:[e=>!!e||"Potvrdu lozinke je potrebno unijeti"],phoneRules:[e=>!!e||"Potrebno je unijeti broj telefona",e=>e&&e.length>=9||"Broj telefona mora imati 9 ili više znakova!"],countryNameRules:[e=>!!e||"Potrebno je odabrati državu"],cityNameRules:[e=>!!e||"Potrebno je odabrati grad"],descriptionNameRules:[e=>!!e||"Potrebno je unijeti neki predmet"]}),methods:{registerAsUser(){w.Z.post("api/auth/registerAsUser",this.form).then((e=>{this.$router.push("/login")}))},checkPassword:function(){this.form.password!=this.form.password_confirmation&&(this.errorPasswordAlert=!0)},submitHandler(){this.$refs.form.validate()&&(this.checkPassword(),this.registerAsUser())}}},b=k,g=a(1001),y=(0,g.Z)(b,f,v,!1,null,null,null),j=y.exports},2648:function(e,t,a){a.d(t,{Z:function(){return s}});var i=a(9780),o=a(7678);const r=(0,o.Z)(i.Z);var s=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick((()=>{var t;e?this.calculateInputHeight():null===(t=this.$refs.input)||void 0===t||t.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"},genInput(){const e=i.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){i.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})}}]);
//# sourceMappingURL=311.17b60e68.js.map