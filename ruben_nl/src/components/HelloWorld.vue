<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>

      <h1>Ruben van Gemeren</h1>
      
      <v-spacer></v-spacer>
      
      <v-icon size="large" class="mr-4">mdi-github</v-icon>
      <v-icon size="large" class="mx-4">mdi-linkedin</v-icon>
      <v-icon size="large" class="mx-4">mdi-steam</v-icon>

    </v-app-bar>

    <v-main>
      <v-container
      fluid
      class=""
      style="background-color: darkorange;"
      >
      <h1 class="display">First part of the page</h1>
      <p>Dit is een introductie, beschrijf wie ik ben en wat ik kan/doe</p>
    </v-container>
      <v-container
      fluid
      class=""
      style="background-color: darkgreen;"
      >
      <h1 class="display">Second part of the page</h1>
    </v-container>
      <v-container
      fluid
      class=""
      style="background-color: darkblue;"
      >
      <h1 class="display">Third part of the page</h1>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>