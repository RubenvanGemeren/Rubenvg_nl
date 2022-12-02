

<template>

  <v-app 
    id="app"
  >
    <v-navigation-drawer v-model="drawer" id="nav_drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar
      id="page_header"
      rounded>
      <v-app-bar-nav-icon id="header_element" @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>

      <h1 id="header_element">Ruben van Gemeren</h1>
      
      <v-spacer></v-spacer>
      
      <a href="https://github.com/RubenvanGemeren" target="_blank"><v-icon id="header_element" size="large" class="mr-4">mdi-github</v-icon></a>
      <a href="https://www.linkedin.com/in/ruben-van-gemeren-1524a6151/?locale=en_US" target="_blank"><v-icon id="header_element" size="large" class="mx-4">mdi-linkedin</v-icon></a>
      <a href="https://steamcommunity.com/id/rubini9/" target="_blank"><v-icon id="header_element" size="large" class="mx-4">mdi-steam</v-icon></a>

    </v-app-bar>

    <v-main id="main_block">
      <v-container
      fluid
      class=""
      id="container_1"
      >
      <h1 class="display">First part of the page</h1>
      <p>Dit is een introductie, beschrijf wie ik ben en wat ik kan/doe </p>
    </v-container>
      <v-container
      fluid
      class=""
      id="container_2"
      >
      <h1 class="display">Second part of the page</h1>
    </v-container>
      <v-container
      fluid
      class=""
      id="container_3"
      >
      <h1 class="display">Third part of the page</h1>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import '@/assets/myscss/myscss.scss';

  export default {
    data: () => ({ drawer: null }),
  }
</script>