<template>
  <div class="switcher">
    <div v-for="(language) of languages" :key="language">
      <img :src="language.flag" :alt="language.desc" @click="changeLanguage(language)"
            :class="{'selected' : selectedLanguage === language} ">
    </div>
  </div>
</template>

<script>
const languages = {
  ENGLISH: {
    desc: 'English',
    flag: require('../../assets/eng-flag.png'),
    position: '0'
  },
  GERMAN: {
    desc: 'Deutsch',
    flag: require('../../assets/deu-flag.jpg'),
    position: '-66px'
  },
  ITALIAN: {
    desc: 'Italiano',
    flag: require('../../assets/ita-flag.png'),
    position: '-132px'
  }
}
export default {
  name: "LanguageSwitcher",
  data(){
    return{
      languages,
      selectedLanguage: languages.ENGLISH,
    }
  },
  methods:{
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
.switcher:hover{
  max-height: 200px;
  border-radius: 35px;
}
.switcher:hover img{
  top: 0;
}
.switcher:hover .selected{
  background-color: var(--primary-color);
}
</style>