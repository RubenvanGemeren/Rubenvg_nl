

<template>

  <v-app 
    id="app"
  >
    <v-navigation-drawer 
      v-model="drawer"
      id="nav_drawer"
      absolute
      temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar
      id="page_header"
      elevation="0">
      <v-app-bar-nav-icon id="header_element" @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>

      
      <a href="https://github.com/RubenvanGemeren" target="_blank"><v-icon id="header_element" size="large" class="mr-4">mdi-github</v-icon></a>
      <a href="https://www.linkedin.com/in/ruben-van-gemeren-1524a6151/?locale=en_US" target="_blank"><v-icon id="header_element" size="large" class="mx-4">mdi-linkedin</v-icon></a>
      <a href="https://steamcommunity.com/id/rubini9/" target="_blank"><v-icon id="header_element" size="large" class="mx-4">mdi-steam</v-icon></a>

    </v-app-bar>

    <v-main id="main_block">
      <v-container
      class="rounded-xl"
      fluid
      id="container_1"
      >
      <p id="hi_text">Hi, i'm</p>
      <h1 id="name_text" class="display">Ruben</h1>
      <h1 id="name_text_small" class="display">van</h1>
      <h1 id="name_text" class="display">Gemeren</h1>
      <h1 id="title_text">Dutch Software Developer // color green enthusiast</h1>
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