<template>
  <div :class="{dark: darkMode}">
    <NavBar @toggle-darkmode="toggleDarkMode()"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  data(){
    return{
      darkMode: true
    }
  },
  mounted() {
    this.darkMode = this.hasDarkPreference();
     //TODO
  },
  methods: {
    hasDarkPreference(){
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    toggleDarkMode(){
      this.darkMode = !this.darkMode;
    }
  }
});

</script>

<style>
@import "styles/generalStyle.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@font-face {
  font-family: "Silom";
  src: local("Silom"),
  url(assets/fonts/Silom.ttf) format("truetype");
}
@font-face {
  font-family: "Futura";
  src: local("Futura"),
  url(assets/fonts/Futura.ttf) format("truetype");
}
@font-face {
  font-family: "Snell Roundhand";
  src: local("Snell Roundhand"),
  url(assets/fonts/Snell_Roundhand.ttf) format("truetype");
}

/*Dark Mode*/
.dark{
  --primary-color: rgb(45,60,75);
  --primary-color-transparent: rgba(45,60,75,.9);
  --secondary-hover-color: rgb(75,80,95);
  --secondary-hover-color-transparent: rgb(75,80,95,.9);
  --tertiary-color: gray;
  --background-color : rgb(25,39,52);

  background-color: var(--background-color);
  transition: 1s;
}
.dark * {
  transition: color .5s;
}
.dark span {
  color: white;
}
.dark .languages .entry{
  background: black !important;
}
.dark .navbar{
  box-shadow: 0 0 100px 30px black !important;
}
.dark .latest-project {
  box-shadow: 0 0 100px 5px black !important;
}
.dark .about-me-short {
  box-shadow: 0 0 100px 5px black !important;
}
.dark .card {
  background-color: var(--primary-color);
}
.dark a:hover {
  background-color: var(--secondary-hover-color);
}
.dark .card:hover .find-out > span:is(#more){
  color: deeppink;
}
</style>