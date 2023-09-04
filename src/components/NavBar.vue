<template>
  <section class="navbar">
    <a id="admin-setting" href="../">
      <img src="../assets/logo.png" alt="logo">
    </a>
    <div class="link-container">
      <router-link to="/home" class="home">Home</router-link>
      <router-link to="/me" class="me">About me</router-link>
      <router-link to="/works" class="works">My Works</router-link>
    </div>
    <label for="checkbox" class="darkmode-toggle-label" @click="toggleMode()">
      <span v-if="darkMode">🌙</span>
      <span v-if="!darkMode">☀️</span>
    </label>
  </section>
</template>

<script>
export default {
  name: "NavBar",
  props: ['darkMode'],
  methods:{
    toggleMode(){
      this.$emit('toggle-darkmode');
    }
  }
}
</script>

<style scoped>
  .navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: var(--black-gradient);
    background-size: 300vw;
    height: 5em;
    position: fixed;
    top: 10px;
    left: 2vw;
    right: 2vw;
    z-index: 200;
    border-radius: 20px;
    box-shadow: 0 0 100px 30px gray;
    font-family: Silom, sans-serif;
    transition: background-position 1s;
  }
  .link-container{
    width: 100%;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
  }
  .link-container a {
    text-decoration: none;
    transition: padding .3s, background-color .3s;
    border-radius: 15px;
    margin-inline: 10px;
    white-space: nowrap;
    width: 30vw;
  }
  .navbar a.navbarActiveClass{
    flex-grow: .05;
  }
  .navbar:has(a.navbarActiveClass.home){
    background-position-x: 70%;
  }
  .navbar:has(a.navbarActiveClass.me){
    background-position-x: 50%;
  }
  .navbar:has(a.navbarActiveClass.works){
    background-position-x: 30%;
  }
  .navbar a:not(.navbarActiveClass){
    color: white;
  }
  .navbar a:hover:not(.navbarActiveClass, #vue, #admin-setting){
    background-color: rgba(150,150,150, 50%);
    padding-block: 20px;
    flex-grow: .05;
  }
  .navbar a, .navbar a:hover:not(.navbarActiveClass) {
    transition: .3s;
  }
  #admin-setting, #vue {
    height: 50px;
    width: 50px;
    position: fixed;
    transition: opacity .3s, visibility .5s;
    opacity: 0;
    visibility: hidden;
  }
  #admin-setting img, #vue img {
    height: 50px;
  }
  #admin-setting{
    left: 5vw;
  }
  #admin-setting img {
    border-radius: 50%;
    border: rgba(255, 255, 255, 0%) solid 2px;
  }
  #admin-setting img:hover{
    border-color: rgba(255, 255, 255, 100%);
  }
  #admin-setting img, #admin-setting img:hover {
    transition: border-bottom-color .3s, border-top-color .3s, border-left-color .3s, border-right-color .3s;
  }
  #vue{
    right: 10vw;
  }
  .navbarActiveClass{
    background-color: white;
    color: black;
    padding-block: 10px;
    padding-inline: 20px;
    border-radius: 20px;
  }
  @media (min-width: 1200px) {
    #admin-setting,#admin-setting img, #vue, #vue img {
      opacity: 100%;
      transition: opacity .3s, visibility .5s;
      visibility: visible;
    }
    .navbar:has(a.navbarActiveClass.home){
      background-position-x: 63%;
    }
    .navbar:has(a.navbarActiveClass.me){
      background-position-x: 50%;
    }
    .navbar:has(a.navbarActiveClass.works){
      background-position-x: 37%;
    }
    .navbar a:hover:not(.navbarActiveClass, #vue, #admin-setting){
      padding-block: 10px;
    }
    .link-container a {
      width: fit-content;
      border-radius: 20px;
      margin-right: -30px;
    }
  }
  @media (min-width: 400px) {
    .navbar {
      font-size: 15pt;
      height: 4em;
    }
  }
</style>