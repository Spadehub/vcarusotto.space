<template>
  <section class="main">
    <div id="name">
      <span>VINCENZO</span>
      <br>
      <span>CARUSOTTO</span>
    </div>
    <img id="image" src="../assets/application-photo.png" alt="picture unavailable">
    <div class="main-info">
      <span id="heading">Full Stack Developer</span>
      <span>Based in Stuttgart,<br>Germany</span>
      <br/>
      <div class="card personal-info">
        <span>Personal Information</span>
        <div class="table">
          <span id="left">Full Name:</span>
          <span id="right">Vincenzo Pio Emanuele Carusotto</span>
          <span id="left">Birth:</span>
          <span id="right">19.03.1998 in Canicattì, Italy</span>
        </div>
      </div>
      <br>
      <div class="edu">
        <div class="uni-link">
          <span>Student at</span>
          <a href="https://www.hdm-stuttgart.de" id="hdm" class="card">
            <div id="hdm-logo">
              <img src="../assets/hdm-logo.png">
              <img id="revealed" src="../assets/hdm-logo-revealed.png">
            </div>
            <span>STUTTGART MEDIA</span>
            <span>UNIVERSITY</span>
          </a>
        </div>
        <div class="card target-degree">
          <span>Target Degree</span>
          <span>Economic Computer Science and Digital Media</span>
          <i>Bachelor of Science</i>
          <br>
          <span>Finished approximately:</span>
          <span>2025</span>
        </div>
    <div class="card edu-background">
      <span>Educational Background</span>
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
          <span id="title">Expertise</span>
          <div class="entry">
            <span>Mobile App Development</span>
            <div class="entry-images">
              <img src="../assets/apple-logo.svg">
              <img src="../assets/android-logo.png">
            </div>
          </div>
          <div class="entry">
            <span>Web Development</span>
            <div class="entry-images">
              <img src="../assets/vue-logo.png">
              <img src="../assets/django-logo.png">
            </div>
          </div>
        </div>
        <router-link to="/works" class="card projects">
          <span id="title">Projects</span>
          <span>{{ projectsCount }}</span>
          <div class="find-out">
            <span>find out </span>
            <span id="more"> more </span>
            <span>about my works</span>
          </div>
        </router-link>
      </div>
      <div class="fixed-right">
        <div class="card languages">
          <span id="title">Languages</span>
          <div class="spoken-languages">
            <div class="entry">
              <img src="../assets/ita-flag.png">
              <span>Italian</span>
            </div>
            <div class="entry">
              <img src="../assets/deu-flag.jpg">
              <span>German</span>
            </div>
            <div class="entry">
              <img src="../assets/eng-flag.png">
              <span>English</span>
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
        <span id="title">Contact</span>
        <span>Stuttgart, Germany</span>
        <br/>
        <div class="mail">
          <a id="sendBtn" href="mailto:vincenzocarusotto@hotmail.com"><span class="material-symbols-outlined">mail</span> Send Mail</a>
          <span>vincenzocarusotto@hotmail.com</span>
        </div>
      </div>
    </div>
    </div>
    <div class="card my-story">
      <span>My Story</span>
      <span>
        I was born in Italy in the year 1998 in a town called Canicattì in Sicily.
        At the age of 8 my father bought our first Personal Computer, a Windows Machine.
        It ran Windows XP at the time and I remember falling in love with it right away; there was so much to do.
        As I aged and the technology evolved, I started seeing the potential that these machines had; so much that could be created.
        At the age of 9 my parents, my aunt and I moved to Spain, Valencia for reasons related to work.
        Away from my friends and family my child self had difficult time learning a new language and adapting to the new Environment.
        But shortly after that, for the same reasons, my parents decided to move to Germany, where I currently live.
        So I had to begin all over again: learn a new language, make new friends, adapting to new and much more different Environment.
        In the meantime I also started learning English: mostly over my computer or over video-games.
        I can count myself lucky to like languages and not having too much trouble learning new ones.
        Even though, moving twice in such short time gave me hard times in my childhood, I can now surely say that I would not be the same Person now without those.
        The experiences that I made, the cultural differences, the new languages that I learned; they all played a big role in making me a more open minded and mature person.
        Why did I choose to become a developer? Surely not just because I liked the computer very much.
        Even long before I wrote my first Hello World program, I felt that people that could do these things have the control over the devices that are like Plugins for our biological self.
        May sound silly, but nowadays, without a smartphone in your pocket you can hardly do half the of the things that you do on your everyday basis.
        So I wanted to have that kind of control and thus I started trying to do more and more stuff with my devices,
        to the point that I could be considered the tech guy, that everyone calls when they need help with their devices.
        Finally, after writing my first lines of code at school, I decided to study Computer Science.
      </span>
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
  padding-inline: 20px;
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
.spoken-languages .entry, .programming-languages .entry{
  border-radius: 5px;
}
.spoken-languages .entry{
  display: flex;
  justify-content: start;
  align-items: center;
  width: 150px;
  margin-bottom: 10px;
}
.languages .entry{
  background: var(--secondary-hover-color);
}
.languages .entry img{
  border-radius: 40%;
  height: 20px;
  width: 30px;
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