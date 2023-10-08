<template>
  <section class="main">
    <div id="loading" v-if="!work.id">
      <span>{{ $t("work.fetching_repo") }}...</span>
      <LoadingAnim/>
    </div>
    <div v-else>
      <img id="logo" :src="getAvatar(work)" alt="No Logo yet" >
      <div id="heading">
        <BadgeComp v-if="localWork.isWIP" id="wip-badge" text="WIP" text_color="white" bg_color="brown"/>
        <span class="title">{{ work.name }}</span>
      </div>
      <span id="projectID">
        {{ $t("work.project_id") }}: #{{ work.id }}
        |
        {{ $t("work.creation_date") }}: {{ new Date(work['created_at']).toLocaleDateString('de-DE') }}
      </span>

      <div class="platforms">
        <BadgeComp  v-for="platform in localWork.platforms" :key="localWork.platforms.indexOf(platform)"
                    :text="platform" text_color="var(--text-color)" bg_color="var(--primary-color)"/>
      </div>
      <div id="repo">
        <a :href="work['web_url']" class="card">
          <img src="../assets/gitlab-logo.png">
          <div class="find-out">
            <span>{{ $t("work.visit_the") }}</span>
            <span id="more"> {{ " " + $t("work.repository") + " " }} </span>
            <span>{{ $t("work.for_more") }}</span>
          </div>
        </a>
      </div>
      <div id="made-with">
        <span class="title smaller-title">{{ $t("work.made_with") }}:</span>
        <div class="entries">
          <BadgeComp  v-for="madeWith in localWork.madeWith" :key="localWork.madeWith.indexOf(madeWith)"
                      :text="madeWith" text_color="var(--text-color)" bg_color="var(--primary-color)"/>
        </div>
      </div>
      <div class="description">
        <span class="title smaller-title">{{ $t("work.desc_label") }}</span>
        <span>{{ work.description ?? "/"}}</span>
      </div>
      <div class="creators-comment">
        <span class="title smaller-title">{{ $t("work.creators_comment_label") }}</span>
        <span>"{{ localWork.creatorsComment ?? "/"}}"</span>
      </div>
      <div class="screenshots">
        <img v-if="localWork.bgImg" :src="localWork.bgImg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import {useRoute} from "vue-router"
import APIServices from "@/scripts/APIServices";
import LoadingAnim from "@/components/miniComponents/LoadingAnim";
import MyWorksUtils from "@/scripts/MyWorksUtils";
import BadgeComp from "@/components/miniComponents/BadgeComp";

export default {
  name: "WorkComp",
  components: {
    BadgeComp,
    LoadingAnim
  },
  data(){
    return{
      workID: Number(useRoute().params.work_id),
      work: {},
      localWork: MyWorksUtils.getLocalProjectInfoByID(Number(useRoute().params.work_id)),
      getAvatar: MyWorksUtils.getAvatar,
    }
  },
  async mounted() {
    await APIServices.fetchProjectByID(this.workID).then(response => {
      this.work = response.data
      console.log(this.isDarkMode)
    }).catch((error) => {
      console.log(error)
      //TODO: display error correctly
    })
  }
}
</script>

<style scoped>
.main{
  gap: 20px;
}
#logo {
  height: 250px;
  width: 250px;
  padding: 20px;
  background: radial-gradient(circle, rgba(93,93,93,1) 0%, rgba(0,0,0,1) 100%);
  border: 10px solid rgba(200,200,200,.8);
  border-radius: 25%;
  color: white;
}
#heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  margin-top: 10px;
}
.title {
  font-size: 150%;
  font-weight: bold;
  line-height: 50px;
}
#wip-badge{
  margin-right: 10px;
  font-size: 80%;
}
#projectID {
  color: var(--text-color-secondary);
  font-size: 70%;
  margin-left: 10px;
}
.platforms {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;
}
.description, .creators-comment {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.description span, .creators-comment span {
  width: 90vw;
  align-self: center;
}
.creators-comment span:not(.title) {
  font-size: 80%;
  color: var(--text-color-secondary);
  font-style: italic
}
.smaller-title {
  font-size: 90%;
}
.screenshots {
  margin-top: 50px;
  overflow-x: auto;
  width: 100vw;
}
.screenshots img {
  height: 500px;
  border-radius: 10px;
}
#repo {
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 150px;
}
#repo a:hover {
  background-color: var(--secondary-hover-color);
}
#repo a, #repo a:hover {
  transition: background-color .3s;
}
#repo img {
  height: 50px;
  margin-bottom: 0;
}
#made-with {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
#made-with .entries {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  white-space: nowrap;
  flex-wrap: wrap;
}
</style>