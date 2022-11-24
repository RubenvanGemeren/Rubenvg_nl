<template>
  <v-app-bar
    collapse-on-scroll
    :collapse="!collapseOnScroll"
    :collapse-on-scroll="collapseOnScroll"
    collapse
    fluid
    color="deep-purple accent-4"
    dark
    scroll-target="#scrolling-techniques-6"
  >
    <v-app-bar-nav-icon
      v-model="collapseOnScroll"
    
    ></v-app-bar-nav-icon>

    <v-checkbox
      v-model="collapseOnScroll"
      color="white"
    ></v-checkbox>
    <v-toolbar-title>Collapsing Bar</v-toolbar-title>

    <v-spacer></v-spacer>

  </v-app-bar>
  <v-app 
    theme="light">


    <v-container
      tag="first_panel"
      class="h-100"
      fluid
      style="background-color: pink;">


      
      <v-row
        class="text-right"
        no-gutters
        align="center"
        style="height: 100%;">
        <v-col>
          <h1 style="font-size: 150px; font-weight: lighter;">Welcome</h1>
          <h1 style="font-size: 50px;font-weight: 400;">Ruben van Gemeren</h1>
        </v-col>



      </v-row>

    </v-container>

  </v-app>

  <v-app>
    <v-container
      fluid
      class="h-100"
      style="background-color: darkorange;"
      >
      <h1 class="display">Second part of the page</h1>
    </v-container>
  </v-app>

  <v-app>
    <v-container
      fluid
      class="h-100"
      style="background-color:lightskyblue;"
      >
      <h1 class="display">Third part of the page</h1>
    </v-container>
  </v-app>
</template>

<!-- change to <script lang="ts"> -->
<script >

export default {
    data: () => ({
      collapseOnScroll: true,
    }),
  }
</script>
