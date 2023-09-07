<template>
  <section id="app">
    <NavBar @toggle-darkmode="toggleDarkMode()" :is-dark-mode="isDarkMode"/>
    <router-view/>
    <DarkmodeSwitcher :is-dark-mode="isDarkMode" @click="toggleDarkMode()" id="darkmode-toggle-floating"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from "@/components/NavBar.vue";
import DarkmodeSwitcher from "@/components/miniComponents/DarkmodeSwitcher.vue";

export default defineComponent({
  name: 'App',
  components: {
    DarkmodeSwitcher,
    NavBar
  },
  data(){
    return{
      isDarkMode: false
    }
  },
  mounted() {
    this.isDarkMode = this.hasDarkPreference();

  },
  methods: {
    hasDarkPreference(){
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    toggleDarkMode(){
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.setAttribute('dark-mode', this.isDarkMode.toString())
    }
  }
});
</script>

<style>
@import "styles/generalStyle.css";
@import "styles/darkMode.css";

#darkmode-toggle-floating{
  position: fixed;
  bottom: env(safe-area-inset-bottom);
  right: 5vw;
  height: 60px;
  width: 60px;
  font-size: 20pt;
  box-shadow: 0 0 10px 1px rgba(0,0,0,.7);
  border: solid rgba(0,0,0,0%) 2px;
  transition: opacity .3s, visibility .5s,
              border-bottom-color .3s, border-top-color .3s, border-left-color .3s, border-right-color .3s;

}
#darkmode-toggle-floating:hover{
  border-color: whitesmoke;
}

@media (min-width: 1200px) {
  #darkmode-toggle-floating{
    opacity: 0;
    visibility: hidden;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
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
</style>