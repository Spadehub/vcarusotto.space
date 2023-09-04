<template>
  <!--TODO: redesign homepage -->
  <section class="main">
      <img src="../assets/project-images/flash-project-mockups.png" id="bgImage">
      <router-link to="/me" class="card about-me-short">
        <div class="card-content">
          <span id="my-name-is">My name is</span>
          <img id="image" src="../assets/logo.png" alt="picture unavailable">
          <div id="name">
            <span>VINCENZO</span>
            <br>
            <span>CARUSOTTO</span>
          </div>
          <div id="profession">
            <p>and I</p>
            <p>develop</p>
            <p>and</p>
            <p>design</p>
            <p>SOFTWARE</p>
          </div>
        </div>
        <div class="find-out">
          <span>find out</span>
          <span id="more"> more </span>
          <span>about me</span>
        </div>
      </router-link>
    <router-link to="/work/8487" class="card latest-project">
      <div class="card-content">
        <span>My latest Project</span>
        <div class="primaryAction">
          <img src="../assets/avatar/flash_icon.png" alt="flash chat icon not available">
          <span>Flash Chat</span>
        </div>
        <span>Web App and iOS App</span>
      </div>
      <div class="find-out">
        <span>find out </span>
        <span id="more"> more </span>
        <span>about my latest project</span>
      </div>
    </router-link>
    <a id="vue" href="https://vuejs.org">
      <img src="../assets/made-with-vue.png" alt="made with Vue.js">
    </a>
  </section>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
p{
  padding: 0;
  margin: 0;
}

#bgImage {
  position: absolute;
  right: 20px;
  top: 400px;
  max-width: 100vw;
  height: fit-content;
  max-height: 100vh;
  object-fit: cover;
  z-index: -1;
}
.card{
  position: relative;
  width: 80vw;
  padding: 30px 30px 10px 30px;
  cursor: pointer;
}
.card:hover{
  padding: 40px 40px 10px 40px;
}
.card, .card:hover{
  transition: padding-bottom .3s, padding-top .3s, padding-left .3s, padding-right .3s;
}
.latest-project{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30pt;
  background-color: rgba(100, 100, 100, 80%);
  border-radius: 20px;
  color: white;
  box-shadow: 0 0 100px 5px gray;
}
.latest-project:hover{
  background-color: rgba(200, 200, 200, 80%);
  color: black;
}
.latest-project .card-content span:nth-child(1){
  font-weight: bold;
}
.latest-project .card-content img{
  max-width: 70px;
  margin-right: 10px;
}
.latest-project .card-content div:nth-child(2){
  padding-right: 20px;
  margin-block: 5px;
  font-weight: bolder;
  font-size: 120%;
  font-style: italic;
  font-family: Futura, serif;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  white-space: nowrap;
}
.latest-project .card-content span:nth-child(3){
  font-size: 70%;
}
.latest-project .find-out{
  color: rgb(220,220,220);
  position: relative;
  left: 60px;
  color: gray;
}
.about-me-short{
  display: grid;
  font-size: 30pt;
  background-color: rgba(240, 240, 240, 90%);
  border-radius: 20px;
  box-shadow: 0 0 100px 5px gray;
  justify-content: center;
  color: black;
}
.about-me-short:hover{
  background-color: rgba(210, 210, 210, 95%);
}
.about-me-short .find-out {
  color: gray;
}
#my-name-is{
  grid-column: 1;
  grid-row: 1;
}
#image, #name {
  grid-column: 1;
  grid-row: 2;
}
#image{
  position: relative;
  left: -50px;
}
#name{
  position: relative;
  left: 50px;
}
#profession{
  grid-column: 1;
  grid-row: 3;
}
.card-content{
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
}
#my-name-is{
  color: gray;
  min-width: 210px;
  text-align: center;
}
#image{
  width: 100px;
  height: 100px;
  align-self: center;
}
#profession {
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
#profession p {
  margin: 0;
  text-align: center;
}
#profession p:nth-child(1), p:nth-child(3) {
  color: gray;
  font-size: 20pt;
}
#profession p:nth-child(2){
  font-family: Silom, sans-serif;
}
#profession p:nth-child(4){
  font-family: Snell Roundhand, sans-serif;
}
#profession p:nth-child(5) {
  font-size: 110%;
  font-weight: bold;
}

@media (min-width: 1200px) {
  .main {
    flex-direction: row-reverse;
    justify-content: center;
  }
  .card{
    width: 40vw;
  }
  #bgImage{
    max-width: 50vw;
    top: 0;
    left: 0;
  }
  .about-me-short {
    display: grid;
  }
  #image{
    width: auto;
    height: 8em;
    position: relative;
    top: -45px;
    left: 0;
    grid-column: 1;
    grid-row: 2;
  }
  #image, #my-name-is{
    margin-right: 20px;
    text-align: right;
  }
  #my-name-is{
    grid-column: 1;
    grid-row: 1;
    align-self: flex-start;
  }
  #name{
    grid-column: 2;
    grid-row: 1;
    position: unset;
  }
  #profession{
    grid-column: 2;
    grid-row: 2;
  }
  #profession p {
    text-align: left;
  }
}

</style>