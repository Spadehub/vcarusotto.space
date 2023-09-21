<template>
  <div class="switcher" :class="{'expanded': languagesDropDownActive}" @click="handleSwitcher()">
    <img src="../../assets/eng-flag.png" alt="English"
         v-if="selectedLanguage === languages.ENGLISH || languagesDropDownActive"
          @click="changeLanguage(languages.ENGLISH)">
    <img src="../../assets/deu-flag.jpg" alt="Deutsch"
         v-if="selectedLanguage === languages.GERMAN  || languagesDropDownActive"
         @click="changeLanguage(languages.GERMAN)">
    <img src="../../assets/ita-flag.png" alt="Italiano"
         v-if="selectedLanguage === languages.ITALIAN  || languagesDropDownActive"
         @click="changeLanguage(languages.ITALIAN)">
  </div>
</template>

<script>
const languages = {
  ENGLISH: 'English',
  GERMAN: 'Deutsch',
  ITALIAN: 'Italiano'
}
export default {
  name: "LanguageSwitcher",
  data(){
    return{
      languages,
      selectedLanguage: languages.ENGLISH,
      languagesDropDownActive: false
    }
  },
  methods:{
    handleSwitcher(){
      this.languagesDropDownActive = !this.languagesDropDownActive
    },
    changeLanguage(lang){
      if (lang !== this.selectedLanguage){
        this.selectedLanguage = lang

      }
    }
  }
}
</script>

<style scoped>
.switcher{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 50px;
  background-color: var(--tertiary-color);
  border-radius: 50%;
  border: rgba(0,0,0,0%) solid 2px;
  transition: height 1s; /* TODO: make it work */
}
.switcher img {
  width: 35px;
  min-height: 25px;
  border-radius: 30%;
  padding: 5px;
  transition: background-color .2s;
}
.expanded img{
  margin: 10px;
  min-height: 30px;
}
.expanded img:hover{
  background-color: var(--secondary-hover-color-transparent);
}
.expanded{
  min-height: 50px;
  height: fit-content;
  border-radius: 20px;
  border: none;
}
</style>