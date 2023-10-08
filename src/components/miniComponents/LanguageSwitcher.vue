<template>
  <div class="switcher" :class="{'switcher-expanded' : isExpandable}" @mouseover="isExpandable = true">
    <div v-for="(language) of languages" :key="language">
      <img :src="language.flag" :alt="language.desc" @click="changeLanguage(language)"
            :class="{'selected' : this.selectedLanguage === language} ">
    </div>
  </div>
</template>

<script>

import i18n from "@/i18n";

const languages = {
  ENGLISH: {
    desc: 'English',
    locale: "en",
    flag: require('../../assets/eng-flag.png'),
    position: '0'
  },
  GERMAN: {
    desc: 'Deutsch',
    locale: "de",
    flag: require('../../assets/deu-flag.jpg'),
    position: '-66px'
  },
  /* TODO: Implement Italian
  ITALIAN: {
    desc: 'Italiano',
    locale: "it",
    flag: require('../../assets/ita-flag.png'),
    position: '-132px'
  }*/
}
export default {
  name: "LanguageSwitcher",
  data(){
    return{
      languages,
      selectedLanguage: languages.ENGLISH,
      isExpandable: false
    }
  },
  methods:{
    setPersistedLang(){
      for (let lang in languages) {
        if (languages[lang].locale === localStorage["locale"]) {
          this.changeLanguage(languages[lang])
        }
      }
    },
    changeLanguage(lang){
      this.isExpandable = !this.isExpandable
      if (lang !== this.selectedLanguage){
        this.selectedLanguage = lang
        i18n.global.locale.value = this.selectedLanguage.locale
        localStorage["locale"] = this.selectedLanguage.locale
      }
    }
  },
  mounted() {
    this.setPersistedLang()
  }
}
</script>

<style scoped>
.switcher{
  height: fit-content;
  max-height: 50px;
  width: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: var(--tertiary-color);
  border-radius: 50px;
  transition: max-height .5s ease !important;
}
.switcher-expanded:hover{
  max-height: 183px;
  border-radius: 35px;
}
.switcher img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  position: relative;
  top: v-bind(selectedLanguage.position);
  transition: top .5s ease,  background-color .5s ease;
}
.switcher img:hover{
  background-color: var(--primary-color-transparent);
}
.switcher-expanded:hover img{
  top: 0;
}
.switcher:hover .selected {
  background-color: var(--primary-color);
}
</style>