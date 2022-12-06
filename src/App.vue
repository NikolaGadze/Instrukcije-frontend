<template>
  <v-app id="inspire">

    <v-app-bar app class="blue-grey darken-4">
      <v-app-bar-nav-icon style="color: white" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white">Instrukcije</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      color="blue-grey darken-4"
      v-model="drawer"
      fixed
      temporary
    >
    <v-list>
        <v-list-item
          v-for="link in links"
          :key="link"
          :to="link.ruta"
          link
          color="light-blue"       
        >
          <v-list-item-content>
            <v-list-item-title style="color: white; font-size: larger;"><v-icon style="margin-right: 10px;">{{ link.ikona }}</v-icon> {{ link.ime }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main class="blue-grey darken-4">
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="12">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

      <v-footer
        color="primary"
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <v-col
            class="deep-purple darken-4 py-4 text-center white--text"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Ivan Raič i Nikola Gadže</strong>
          </v-col>
        </v-row>
      </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        {ime: 'Početna', ruta: '/', ikona: 'mdi-home'},
      ],
    }),
  }
</script>