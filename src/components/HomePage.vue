<template>
  <section class="main" :style="{overflow: showDiscover ? 'unset' : 'hidden'}">
      <div id="background-image" v-show="showDiscover"/>
    <transition-group name="fade">
      <div class="terminal" v-if="showTermynal">
        <v-termynal :lineDelay="100" @finish="dismissTermynal()" forward-button>
          <vt-input>yarn run serve</vt-input>
          <vt-progress :progressDelay="0.69"/>
          <vt-text>Serving portfolio...</vt-text>
          <vt-spinner/>
          <vt-text>Done in 69ms</vt-text>
        </v-termynal>
      </div>

      <div class="homepage" :class="{'move-up' : showDiscover}" v-else @wheel.prevent="this.handleScroll()">
          <div id="hello" :class="{'hide' : showDiscover}">
            <span>{{ $t("homepage.he") }}</span>
            <span>{{ $t("homepage.llo") }}</span>
            <span>{{ $t("homepage.iam") }}</span>
          </div>
        <div class="banner" :class="{'animate-entry': !showDiscover}">
          <div id="name" :class="{'name-animate' : showDiscover}">
            <span>Vincenzo Carusotto</span>
          </div>
          <span id="profession" :style="{color: showDiscover ? 'var(--tertiary-color)' : 'inherit'}">
            {{ $t("homepage.software_developer") }}
          </span>
          <span id="expand-more" class="material-symbols-outlined"
                :class="{'disabled' : showDiscover}" @click="this.handleScroll()">
            expand_more</span>
        </div>

          <div class="discover" :class="{'hide' : !showDiscover}">
            <h1>{{ $t("homepage.discover") }}</h1>
            <div class="cards">
              <router-link to="/me" href="" class="card" id="persona">
                <img src="../assets/application-photo.png" alt="">
                <span>{{ $t("homepage.more_about") }}<br>{{$t("homepage.my_persona")}}</span>
                <img src="../assets/logo.png" alt="">
              </router-link>
              <router-link to="/works" class="card" id="works">
                <img src="../assets/project-images/flash-project-mockups.png" alt="">
                <span>{{ $t("homepage.more_about") }}<br>{{$t("homepage.my_works")}}</span>
                <img src="../assets/project-images/momhunt-screenshots.png" alt="">
              </router-link>
            </div>
            <div id="background-gradient"/>
          </div>

      </div>
    </transition-group>
  </section>
</template>

<script>
import {
  VTermynal,
  VtInput,
  VtProgress,
  VtText,
  VtSpinner
} from "@lehoczky/vue-termynal"

export default {
  name: "HomePage",
  components: {VtSpinner, VtText, VtProgress, VtInput, VTermynal},
  data(){
    return{
      showTermynal: true,
      showDiscover: false
    }
  },
  methods:{
    dismissTermynal(){
      this.showTermynal = false
    },
    handleScroll(){
      this.showDiscover = true
    }
  }
}

</script>

<style scoped>
.main{
  font-size: 3em;
  justify-content: center;
}
.terminal{
  position: absolute;
  max-width: 90%;
}
.homepage{
  width: 100%;
  display: flex;
  flex-direction: inherit;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10%;
  transition: top 1s;
}
.move-up{
  top: 0;
}
#background-image{
  background-image: var(--homepage-background);
  background-size: cover;
  background-repeat: no-repeat;
  height: 50%;
  position: absolute;
  top: -100px;
  width: 100%;
  z-index: -1;
  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  -webkit-transition: background-image 1s ease-in-out;
  transition: background-image 1s ease-in-out;
}

.cards{
  display: flex;
  flex-direction: row;
}
.card{
  padding: 20px;
}
#hello {
  opacity: 1;
  transition: opacity 1s, transform 1s;
  position: relative;
  left: 50px;
  animation: move-left ease 1s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  margin-top: auto;
}
#hello *{
  animation: fade-in ease 2s;
  animation-fill-mode: forwards;
  opacity: 0;
}
#hello span:nth-child(1){
  animation-delay: 1s;
}
#hello span:nth-child(2){
  animation-delay: 1.5s;
  color: var(--tertiary-color);
}
#hello span:nth-child(3){
  animation-delay: 3s;
  color: var(--tertiary-color);
}
.banner{
  display: flex;
  flex-direction: inherit;
  align-items: center;

}
.animate-entry *{
  animation: slide-fade-in ease 2s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.hide {
  opacity: 0 !important;
}
#name{
  animation-delay: 4s;
}
#profession{
  animation-delay: 5s;
  font-size: 30pt;
}
#expand-more{
  animation-delay: 6s;
  margin-top: 30px;
  cursor: pointer;
  width: 10%;
  min-width: 100px;
  border-radius: 25px;
  z-index: 1;
  transition: background-color .5s;
}
#expand-more:hover{
  background-color: var(--secondary-hover-color);
}
#expand-more:is(.disabled) {
  background-color: unset;
  cursor: unset;
}
.discover{
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  transition: opacity 1s;
  margin-bottom: 50px;
}
#background-gradient{
  position: absolute;
  height: 100%;
  width: 100%;
  padding-bottom: 20%;
  background: var(--background-gradient-color);
  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,1)));
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
  z-index: -1;
}
.cards{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
  width: 80%;
}
.card{
  height: 150px;
  padding: 0;
  position: relative;
  overflow: hidden;
  outline: 0.2rem solid transparent;
  outline-offset: 5px;
  transition: outline-color .3s, background-color 1s !important;
}
.card:hover{
  outline-color: var(--highlight-color-secondary);
}
.card img {
  height: inherit;
  position: absolute;
}
.card#persona img:nth-child(1){
  left: -30px
}
.card#persona img:nth-child(3){
  right: -70px
}
.card#works img:nth-child(1){
  left: -30px;
  height: 150%;
}
.card#works img:nth-child(3){
  right: -220px
}

@keyframes slide-fade-in {
  from{
    opacity: 0;
    transform: translateY(20%);
    visibility: hidden;
  }
  to{
    opacity: 1;
    transform: translateY(0%);
    transition: transform 1s;
    visibility: visible;
  }
}
@keyframes fade-in {
  from{
    opacity: 0;
    visibility: hidden;
  }
  to{
    opacity: 1;
    visibility: visible;
  }
}
@keyframes move-left {
  from {
    left: 50px;
  }
  to {
    left: 0;
  }
}
@keyframes scale-bigger {
  from{
    transform: unset;
  }
  to{
    transform: scale(1.3);
  }
}

@media (min-width: 1000px) {
  .cards{
    flex-direction: row;
  }
  .name-animate{
    animation: scale-bigger ease 1s !important;
    animation-fill-mode: forwards !important;
  }
}

</style>