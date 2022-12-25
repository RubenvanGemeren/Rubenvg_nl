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

    <v-main id="main_block">
      <v-container
        class="rounded-xl"
        fluid
        id="container_1"
        >
        <p class="intro_text">Hi, i'm</p>
        <h1 class="display name_text">Ruben</h1>
        <h1 class="display name_text_small">van</h1>
        <h1 class="display name_text">Gemeren</h1>
        <h1 id="title_text">Dutch Software Developer // color green enthusiast</h1>
    </v-container>
      
    <v-container
      class="rounded-xl"
      fluid
      id="container_2"
      >
      <p class="display intro_text">Who am I?</p>
      <div class="intro_container">

        <div>
          <p id="body_text">My name is <strong>Ruben</strong>, i'm <i>21 years</i> old and i'm from the Netherlands. As of autumn of 2022 i'm offically a <strong>bachelor of science</strong> after completing my computer science study at the Hogeschool Rotterdam, which means i'm finally a free man (kinda).</p>
          
          <br>
          
          <p id="body_text">Although I can say goodbye to my old classmates, I hope this is just <strong>one</strong> of the many steps i'll take in my educational carreer. My plan is to follow a master and dive deeper in the world of software development and the architecture of systems and applications.</p>
          
          <br>
          
          <p id="body_text">Besides working on software related projects on both a educational and a professional level, I also like to make time to hang out with friends (both on- and offline), collect music and exercise.</p>
        </div>

        <div>

          <div class="scene">
            <div
              class="card"
              @click="cardOne == 'start' ? (cardOne = 'flipped' ) : (cardOne = 'start' )"
              v-bind:class="{ flipme: cardOne == 'flipped' }"
            >
            <!-- Design custome tooltip! -->
            <v-tooltip text="Click me!" location="bottom">
              <template v-slot:activator="{ props }">
                <div class="card__face card__face--front" v-bind:="props">
                    <img id="full_body_img" src="../assets/3S4A3573-min.jpg" alt="Profile picture" />
                  </div>
                  <div class="card__face card__face--back" v-bind:="props">
                    <h2 class="card_back_text"><strong>February 2022</strong></h2>
                    <h1 class="card_back_text card_back_text--tip">What is this?</h1>
                    <p class="card_back_text card_back_text--tip">Every image can be rotated to reveal more information or extra bits that don't fit on the page itself.</p>
                  </div>
                </template>
              </v-tooltip>
            </div>
          </div>
        </div>
      </div>

    </v-container>

    <v-container
      fluid
      class=""
      id="container_3"
      >
      <p class="display intro_text">My Experience</p>
      <div class="container_3_box">
        <v-card
          class="card_experience card_webdev rounded-lg"
          color="green"
          elevation="20"
        >
          <v-card-title class="card_experience_title" >
            Web development
          </v-card-title>
          <v-card-subtitle>
            <p>Not just this website!</p>
          </v-card-subtitle>
          <v-card-text>
            <img src="../assets/logos/webdev_icons.png" alt="webdev icons" class="experience_card_img">
            <!-- Working with languages like <strong>PHP</strong> using <strong>Laravel</strong>, <strong>Javascript</strong> transformed with <strong>Typescript</strong> and modern frontend frameworks like <strong>Vue</strong> enchanched with <strong>Vuetify</strong>. Throughout the years I've worked on and developed both educational and professional level applications. Projects include <strong>CRM</strong>, <strong>ERP</strong> and <strong>Integration</strong> applications, as well as a <strong>restaurant system </strong> and <strong>web scraper</strong> used for national new sites. -->
          </v-card-text>
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>

        </v-card>
        <v-card
          class="card_experience card_ai rounded-lg"
          color="blue"
          elevation="20"
        >
          <v-card-title>
            Artificial intelligence
          </v-card-title>
          <v-card-subtitle>
            Changing the world!
          </v-card-subtitle>
          <v-card-text>
            <img src="../assets/logos/AI_icons.png" alt="AI icons" class="experience_card_img">
            <!-- A big part of my personal development during my education was learning about and working with <strong>artificial intelligence</strong> AKA AI. Besides spending more than half a year learning about what AI is and how it works I have also created both a <strong>machine learning</strong> and <strong>deep learing</strong> algorithm to get used to some of the most popular frameworks. <strong>Python</strong>, <strong>Tensorflow</strong>, <strong>Pandas</strong> and more. -->
              
          </v-card-text>
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>

        <v-card
          class="card_experience card_general rounded-lg"
          color="yellow"
          elevation="20"
        >
          <v-card-title>
            Programming
          </v-card-title>
          <v-card-subtitle>
            Whatever you need boss!
          </v-card-subtitle>
          <v-card-text>
            <img src="../assets/logos/programming_icons.png" alt="programming icons" class="experience_card_img">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -->
          </v-card-text>
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </div>
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
      cardOne: "start"
    }),
    
  }
</script>