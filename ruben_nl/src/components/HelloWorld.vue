

<template>

  <v-app 
    id="app"
  >
    <v-navigation-drawer 
      v-model="drawer"
      id="nav_drawer"
      absolute
      temporary
      elevation="24">
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
      <v-btn
            rounded="lg"
            variant="tonal"
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

    <v-main id="main_block">
      <v-container
        class="rounded-xl"
        fluid
        id="container_1"
        >
        <p id="intro_text">Hi, i'm</p>
        <h1 id="name_text" class="display">Ruben</h1>
        <h1 id="name_text_small" class="display">van</h1>
        <h1 id="name_text" class="display">Gemeren</h1>
        <h1 id="title_text">Dutch Software Developer // color green enthusiast</h1>
    </v-container>
      
    <v-container
      class="rounded-xl"
      fluid
      id="container_2"
      >
      <div id="intro_container">

        <div>
          <p id="intro_text" class="display">Who am I?</p>
          <p id="body_text">My name is <strong>Ruben</strong>, i'm <i>21 years</i> old and i'm from the Netherlands. As of autumn of 2022 i'm offically a <strong>bachelor of science</strong> after completing my computer science study at the Hogeschool Rotterdam, which means im finally a free man (kinda).</p>
          
          <br>
          
          <p id="body_text">Although I can say goodby to my old classmates, I hope this is just <strong>one</strong> of the many steps i'll take in my educational carreer. My plan is to follow a master and dive deeper in the world of software development and the architecture of systems and applications.</p>
          
          <br>
          
          <p id="body_text">Besides working on software related projects on both a educational and a professional level, I also like to make time to hang out with friends (both on- and offline), collect music and exercise.</p>
        </div>

        <div>
          <v-divider vertical></v-divider>
        </div>


        <div>
          <img id="head_img" src="../assets/3S4A3547_small.jpg" alt="Profile picture" />
        </div>
      </div>
      
        <v-divider color="yellow" vertical style="display: inline;"></v-divider>
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
    data: () => ({ 
      drawer: null ,
      // The alert can be used for a later event.
      alert: true,
      dialog: false,
    }),
    
  }
</script>