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
          class="card_webdev rounded-lg"
          color="transparent"
          flat
        >
        <div class="card_experience">
              <img src="../assets/logos/bootstrap-5-1.svg" alt="" class="experience_card_img--webdev bootstrap">
              <img src="../assets/logos/laravel-1.svg" alt="" class="experience_card_img--webdev laravel">
              <img src="../assets/logos/logo-javascript.svg" alt="" class="experience_card_img--webdev javascript">
              <h1 class="card_experience_title">Web development</h1>
              <img src="../assets/logos/typescript.svg" alt="" class="experience_card_img--webdev typescript">
              <img src="../assets/logos/vue-9.svg" alt="" class="experience_card_img--webdev vue">
              <img src="../assets/logos/php-1.svg" alt="" class="experience_card_img--webdev php">
        </div>
        </v-card>
        <v-card
          class="card_ai rounded-lg"
          color="transparent"
          flat
        >
          <div class="card_experience">

            <img src="../assets/logos/icons8-anaconda.svg" alt="" class="experience_card_img--ai anaconda">
            <img src="../assets/logos/tensorflow-2.svg" alt="" class="experience_card_img--ai tensorflow">
            <h1 class="card_experience_title">Artificial Intelligence</h1>
            <img src="../assets/logos/Pandas_logo.svg.png" alt="" class="experience_card_img--ai--pandas pandas">
            <img src="../assets/logos/python-5.svg" alt="" class="experience_card_img--ai python">

          </div>
        </v-card>

        <v-card
          class="card_general rounded-lg"
          color="transparent"
          flat
        >
          <div class="card_experience">

                <img src="../assets/logos/c--4.svg" alt="" class="experience_card_img--prog csharp">
                <img src="../assets/logos/android-logomark.svg" alt="" class="experience_card_img--prog android">
                <img src="../assets/logos/github-icon-1.svg" alt="" class="experience_card_img--prog github">
                <h1 class="card_experience_title">Programming</h1>
                <img src="../assets/logos/devexpress.png" alt="" class="experience_card_img--prog--devexpress devexpress">
                <img src="../assets/logos/icons8-virtual-reality-96.png" alt="" class="experience_card_img--prog vr">
                <img src="../assets/logos/mysql-6.svg" alt="" class="experience_card_img--prog sql">
          </div>
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