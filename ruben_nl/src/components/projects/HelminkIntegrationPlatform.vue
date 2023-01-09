<template>
    <v-app>
        <v-navigation-drawer 
      v-model="drawer"
      id="nav_drawer"
      absolute
      temporary
      elevation="24">

    </v-navigation-drawer>

    <v-app-bar
      id="page_header"
      elevation="0">
      <v-app-bar-nav-icon id="header_element" @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>
      
      <a href="https://github.com/RubenvanGemeren" target="_blank"><v-icon id="header_element" size="large" class="mr-4">mdi-github</v-icon></a>
      <a href="https://www.linkedin.com/in/ruben-van-gemeren-1524a6151/?locale=en_US" target="_blank"><v-icon id="header_element" size="large" class="mx-4">mdi-linkedin</v-icon></a>
      <a href="https://steamcommunity.com/id/rubini9/" target="_blank"><v-icon id="header_element" size="large" class="mx-4">mdi-steam</v-icon></a>
      <v-btn
            class="wobble-hor-bottom"
            rounded="lg"
            variant="tonal"
            elevation="10"
            color="success"
      >
          Thank you
          <v-dialog
          v-model="dialog"
          activator="parent"
          id="thank_you_dialog"
        >
          <v-card
            id="thank_you_card">
            <v-card-text
              >
              <p id="thank_you_text">Before you begin I want to thank you for visiting this website, I worked hard on it and I think it's <strong id="cool_text">pretty cool</strong>. It will be a ongoing project so you might wanna check in once in a while to see new ideas being worked on!</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="success" block @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>

    </v-app-bar>
    </v-app>
</template>