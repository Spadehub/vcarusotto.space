<template>
  <section class="main">
    <div id="name">
      <span>VINCENZO</span>
      <br>
      <span>CARUSOTTO</span>
    </div>
    <img id="image" src="../assets/application-photo.png" alt="picture unavailable">
    <div class="main-info">
      <span id="heading">{{ $t("about_me.full_stack_dev") }}</span>
      <span>{{ $t("about_me.based_in") + " " + $t("about_me.city") }},<br>{{ $t("about_me.country") }}</span>
      <br/>
      <div class="card personal-info">
        <span>{{ $t("about_me.personal_info") }}</span>
        <div class="table">
          <span id="left">{{ $t("about_me.full_name") }}:</span>
          <span id="right">Vincenzo Pio Emanuele Carusotto</span>
          <span id="left">{{ $t("about_me.birth") }}:</span>
          <span id="right">{{ $t("about_me.birth_date_place") }}</span>
        </div>
      </div>
      <br>
      <div class="edu">
        <div class="uni-link">
          <span>{{ $t("about_me.student_at") }}</span>
          <a href="https://www.hdm-stuttgart.de" id="hdm" class="card">
            <div id="hdm-logo">
              <img src="../assets/hdm-logo.png">
              <img id="revealed" src="../assets/hdm-logo-revealed.png">
            </div>
            <span>{{ $t("about_me.hdm_line1") }}</span>
            <span>{{ $t("about_me.hdm_line2") }}</span>
          </a>
        </div>
        <div class="card target-degree">
          <span>{{ $t("about_me.target_degree") }}</span>
          <span>{{ $t("about_me.study_course") }}</span>
          <i>{{ $t("about_me.bachelor") }}</i>
          <br>
          <span>{{ $t("about_me.finished_approximately") }}:</span>
          <span>2025</span>
        </div>
    <div class="card edu-background">
      <span>{{ $t("about_me.edu_background") }}</span>
      <a v-for="school in eduBackground" :key="school.id" :href="school.site" class="entry">
        <span id="date" v-html="school.date"/>
        <div id="school-desc">
          <span v-html="school.name"/>
          <span>{{ school.desc }}</span>
        </div>
      </a>
    </div>
    </div>
    </div>
    <div class="fixed-cards">
      <div class="fixed-left">
        <div class="card expertise">
          <span id="title">{{ $t("about_me.expertise") }}</span>
          <div class="entry">
            <span>{{ $t("about_me.mob_app_dev") }}</span>
            <div class="entry-images">
              <img src="../assets/apple-logo.svg">
              <img src="../assets/android-logo.png">
            </div>
          </div>
          <div class="entry">
            <span>{{ $t("about_me.web_dev") }}</span>
            <div class="entry-images">
              <img src="../assets/vue-logo.png">
              <img src="../assets/django-logo.png">
            </div>
          </div>
        </div>
        <router-link to="/works" class="card projects">
          <span id="title">{{ $t("about_me.projects") }}</span>
          <span>{{ projectsCount }}</span>
          <div class="find-out">
            <span>{{ $t("find_out") }}</span>
            <span id="more"> {{ " " + $t("more") + " "}} </span>
            <span>{{ $t("about") + " " + $t("my_works") }}</span>
          </div>
        </router-link>
      </div>
      <div class="fixed-right">
        <div class="card languages">
          <span id="title">{{ $t("about_me.languages") }}</span>
          <div class="spoken-languages">
            <div class="entry">
              <img src="../assets/ita-flag.png">
            </div>
            <div class="entry">
              <img src="../assets/deu-flag.jpg">
            </div>
            <div class="entry">
              <img src="../assets/eng-flag.png">
            </div>
          </div>
          <br/>
          <div class="programming-languages">
              <span class="entry">Java</span>
              <span class="entry">HTML</span>
              <span class="entry">CSS</span>
              <span class="entry">JS/TS</span>
              <span class="entry">Swift</span>
              <span class="entry">Python</span>
              <span class="entry">C&#x23;</span>
              <span class="entry">SQL</span>
        </div>
        </div>
      <div class="card contact">
        <span id="title">{{ $t("about_me.contact") }}</span>
        <span>{{ $t("about_me.city") }}, {{ $t("about_me.country") }}</span>
        <br/>
        <div class="mail">
          <a id="sendBtn" href="mailto:vincenzocarusotto@hotmail.com"><span class="material-symbols-outlined">mail</span> {{ $t("about_me.send_mail") }}</a>
          <span>vincenzocarusotto@hotmail.com</span>
        </div>
      </div>
    </div>
    </div>
    <div class="card my-story">
      <span>{{ $t("about_me.my_story_label") }}</span>
      <span>{{ $t("about_me.story") }}</span>
    </div>
    <div id="margin-not-working-chrome-workaround">Easter Egg: Chrome just ignores my margin-bottom, thus here is my Workaround</div>
  </section>
</template>

<script>
import MyWorksUtils from "@/scripts/MyWorksUtils";

export default {
  name: "AboutMe",
  data(){
    return{
      projectsCount: MyWorksUtils.localProjectInfo.length,
      eduBackground: [
        {
          id: "MHS",
          date: "2019<br>-<br>2017",
          name: "Max-Hachenburg-Schule,<br>Mannheim, Germany",
          desc: "Economic Computer Science “Fachhochschulreife”",
          site: "https://www.mhsma.de"
        },
        {
          id: "ADS",
          date: "2016<br>-<br>2011",
          name: "Alfred-Delp-Schule,<br>Lampertheim, Germany",
          desc: "“Realschule”",
          site: "https://www.ads-lampertheim.com"
        },
        {
          id: "CEIP",
          date: "2011<br>-<br>2010",
          name: "C.E.I.P. AUSIÀS MARCH,<br>Els Poblets, Spain",
          desc: "Elementary School",
          site: "https://portal.edu.gva.es/ceipausiasmarch/"
        },
        {
          id: "MR",
          date: "2010<br>-<br>2006",
          name: "Scuola Elementare Mario Rapisardi,<br>Canicattì, Italy",
          desc: "Elementary School",
          site: "https://www.icrapisardi.edu.it"
        }
      ]
    }
  }
}
</script>

<style scoped>
#name{
  font-size: 3rem;
}
#image{
  max-height: 50%;
  padding: 40px 40px 0 0;
  background: radial-gradient(circle, rgba(93,93,93,1) 0%, rgba(0,0,0,1) 100%);
  border: 10px solid rgba(200,200,200,.8);
  border-radius: 25px;
}
.main-info, .uni-link{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-info > span:nth-child(4), .card > span:nth-child(1){
  font-weight: bold;
}
.personal-info {
  width: 500px;
  justify-self: center;
  align-self: center;
}
.personal-info .table{
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1fr 1fr;
  margin-block: 10px;
  width: 100%;
}
.table #left{
  text-align: right;
}
.table #right{
  display: block;
  text-align: left;
  border-left: gray solid 2px;
  margin-left: 10px;
  padding-left: 5px;
}
.table #left span, .table #right span:not(span:last-child){
  margin-bottom: 10px;
}
.card{
  padding-block: 10px;
}
.fixed-cards, .fixed-right, .fixed-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#hdm{
  font-size: 3.7rem;
  display: inherit;
  flex-direction: inherit;
  align-items: inherit;
  font-family: Pathway Gothic One, serif;
  border-radius: 10px;
  padding-block: 20px;
  transition: background-color .5s;
  cursor: pointer;
  margin-bottom: 20px;
}
#hdm:hover{
  transition: background-color .5s;
}
#hdm img{
  width: 300px;
}
#hdm span:nth-child(3){
  font-size: 5.5rem;
  line-height: 50px;
}
#hdm-logo{
  display: grid;
}
#hdm-logo img{
  grid-column: 1;
  grid-row: 1;
}
#hdm-logo img:nth-child(2), .hdm:hover img:not(#revealed){
  opacity: 0;
}
#hdm:hover img:is(#revealed){
  opacity: 1;
}
#hdm-logo img:nth-child(2), .hdm:hover img:not(#revealed), .hdm:hover img:is(#revealed){
  transition: opacity .3s;
}
.entry img{
  width: 3.5em;
}
.projects > span:nth-child(2){
  font-size: 10em;
  line-height: 1em;
}
.projects:hover{
  background-color: var(--secondary-hover-color);
}
.projects, .projects:hover{
  transition: background-color .3s;
}
.find-out{
  position: relative;
  left: 8%;
}
.spoken-languages{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  height: 100px;
}
.spoken-languages .entry, .programming-languages .entry{
  border-radius: 5px;
}
.spoken-languages .entry{
  display: flex;
  align-items: center;
}
.programming-languages .entry{
  background: var(--secondary-hover-color);
}
.spoken-languages .entry img{
  border-radius: 10%;
  height: 50px;
  width: 70px;
  align-items: end;
}
.languages > span:nth-child(1){
  margin-bottom: 20px;
}
.languages .entry > span{
  text-align: left;
}
.programming-languages {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 90%;
}
.programming-languages .entry{
  padding-inline: 5px;
}
.mail > a{
  background-color: brown;
  border-radius: 15px;
  padding: 10px;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
}
.mail > a:hover{
  width: 280px;
  background-color: rgb(100 0 0);
}
.mail > a:hover, .mail > a{
  transition: width .3s, background-color .3s;
}
.mail > span{
  font-size: .7em;
}
.target-degree {
  width: 350px;
}
.target-degree i{
  font-size: .7em;
}
.target-degree span:nth-child(6){
  font-size: 2em;
  font-weight: bold;
}
.my-story{

}
.edu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.edu-background, .my-story{
  margin-top: 20px;
  height: fit-content;
  padding-bottom: 15px;
  width: 800px;
}
.edu-background .entry {
  display: grid;
  grid-template-columns: 70px 1fr;
  text-align: left;
  margin-top: 10px;
  width: 90%;
}
.edu-background .entry #date{
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: .8em;
  font-weight: bold;
  line-height: 20px;
}
.edu-background .entry #school-desc{
  border-radius: 25px;
  padding: 10px;
  font-size: .8em;
  grid-column: 2;
  display: flex;
  flex-direction: column;
}
.edu-background .entry #school-desc:hover {
}
.edu-background .entry > #school-desc, #school-desc:hover{
  transition: background-color .3s, color .3s;
}
.edu-background .entry #school-desc span:nth-child(2){
  font-size: .8em;
}
#margin-not-working-chrome-workaround {
  font-size: 10pt;
  color: var(--background-color);
  cursor: default;
}

@media (min-width: 1300px) and (min-height: 700px){
  .fixed-cards > *{
    height: calc(100vh - 100px);
    justify-content: space-around;
    position: fixed;
    top: 100px;
    padding-block: 0;
  }
  .fixed-cards .card {
    max-height: 300px;
    width: 350px;
  }
  .fixed-left{
    left: 0;
  }
  .fixed-right{
    right: 0;
  }
  .fixed-left .card{
    border-radius: 0 10px 10px 0;
  }
  .fixed-right .card{
    border-radius: 10px 0 0 10px;
  }
  .my-story {
    width: calc(100vw - 800px);
    padding-inline: 10px;
  }
  .my-story span:nth-child(2) {
    margin-top: 5px;
    font-style: italic;
    font-size: 80%;
    text-align: justify;
  }
  .personal-info, .edu-background {
    width: calc(100vw - 920px);
    max-width: 600px;
  }
}
@media (min-width: 800px){
  .fixed-cards{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .fixed-right, .fixed-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .fixed-right .card, .fixed-left .card {
    height: 350px;
  }
  .edu {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>