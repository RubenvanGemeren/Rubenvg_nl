import Vue from "vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HelloWorld from "scr/components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld
  }, 
  {
    path: "/about",
    name: "About",
    
    component: () =>
        import("scr/views/About.vue"),
  },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router