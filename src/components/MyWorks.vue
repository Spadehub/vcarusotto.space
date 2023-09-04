<template>
  <section class="main my-works">
    <div id="loading" v-if="works.length <= 0">
      <span>Fetching Gitlab Repositories...</span>
      <LoadingAnim/>
    </div>
    <div v-else class="entry" v-for="work in works" :key="works.indexOf(work)">
      <router-link :to="'/work/' + work.id" class="card"
                   :class="isEven(works.indexOf(work)) ?  'left' : 'right'">
        <div class="text">
          <div id="title">
            <img id="logo" :src="getAvatar(work)" alt="avatar not available">
            <span>{{ work.name }}</span>
          </div>
          <span>{{ work.description }}</span>
        </div>
        <div class="find-out">
          <span>find out </span>
          <span id="more"> more </span>
          <span>about {{ work.name }}</span>
        </div>
        <img :src="getLocalProjectByID(work.id).bgImg" id="bgImg" alt="">
      </router-link>
      </div>
  </section>
</template>

<script>
import LoadingAnim from "@/components/miniComponents/LoadingAnim";
import MyWorksUtils from "@/scripts/MyWorksUtils";

export default {
  name: "MyWorks",
  components: {LoadingAnim},
  data(){
    return{
      works: []
    }
  },
  methods: {
    isEven: (number) => {
      return number % 2 === 0
    },
    getLocalProjectByID: MyWorksUtils.getLocalProjectInfoByID,
    getAvatar: MyWorksUtils.getAvatar
  },
  async mounted(){
    this.works = await MyWorksUtils.fetchProjects()
  }
}
</script>

<style scoped>
.main #title {
  font-weight: bold;
  font-size: 1.5em;
}
.main .card {
  width: 90vw;
  padding: 20px;
  display: flex;
  margin-block: 20px;
  flex-direction: column;
}
.entry {
  display: flex;
  width: 100vw;
  position: relative;
}
.entry:has(.left) {
  flex-direction: row;
}
.entry .left {
  border-radius: 0 25px 25px 0;
}
.entry:has(.right) {
  flex-direction: row-reverse;
}
.entry .right {
  border-radius: 25px 0 0 25px;
}
.entry #bgImg{
  position: absolute;
  height: 300px;
  max-width: 99vw;
  overflow-x: hidden;
  object-fit: cover;
  z-index: -1;
  border-radius: 10px;
}
.left #bgImg{
  right: 1vw;
}
.right #bgImg{
  left: 1vw;
}
#title{
  display: flex;
  align-items: center;
}
.left #title{
  flex-direction: row;
}
.right #title{
  flex-direction: row-reverse;
}
#logo{
  border-radius: 25%;
}
.card {
  background-color: var(--primary-color-transparent);
}
.card:hover {
  background-color: var(--secondary-hover-color-transparent);
  padding-inline: 30px;
}
.card, .card:hover {
  transition: padding-right .5s, padding-left .5s;
}
.card #logo{
  height: 30pt;
  max-width: 100px;
  margin-inline: 10px;
}
.card .find-out{
  margin-top: 20px;
}
.card .text{
  display: flex;
  flex-direction: column;
}
.right {
  text-align: left;
  flex-direction: row;
}
.left {
  text-align: right;
  flex-direction: row-reverse;
}
.right #title {
  align-self: start;
}
.left #title {
  align-self: end;
}
@media (min-width: 1200px) {
  .main .card {
    width: 70vw;
  }
}
</style>