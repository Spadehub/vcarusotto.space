import MyWorksUtils from "@/scripts/MyWorksUtils";
import APIServices from "@/scripts/APIServices";
import i18n from "@/i18n";

const t = i18n.global.t

export default {
    //Projects that will be retrieved
    localProjectInfo: [
        {
            id: 8487,
            avatar_url: require("@/assets/avatar/flash_icon.png"),
            bgImg: require("@/assets/project-images/flash-proto-light.png"),
            platforms: ['Web-App', 'iOS'],
            madeWith: ['Vue JS', 'Django', 'Xcode (Swift)'],
            isWIP: true,
            creatorsComment: t("work.creators_comment.flash")
        },
        {
            id: 7803,
            avatar_url: "",
            bgImg: require("@/assets/project-images/locawiki_proto_light.png"),
            platforms: ['Android'],
            madeWith: ['Android Studio (Java)'],
            isWIP: false,
            creatorsComment: t("work.creators_comment.locawiki")
        },
        {
            id: 8596,
            avatar_url: "",
            bgImg: require("@/assets/project-images/momhunt-screenshots.png"),
            platforms: ['Android', 'iOS'],
            madeWith: ['Unity (C#)'],
            isWIP: true,
            creatorsComment: t("work.creators_comment.momhunt")
        },
        {
            id: 8718,
            avatar_url: "",
            bgImg: require("@/assets/project-images/PREVIEW_weather_forecast.gif"),
            platforms: ['Anywhere Java Runs'],
            madeWith: ['Java'],
            isWIP: false,
            creatorsComment: t("work.creators_comment.weather_forecast")
        }
    ],
    async fetchProjects(){
        const worksData: any = []
        for (const project of MyWorksUtils.localProjectInfo) {
            await APIServices.fetchProjectByID(project.id).then((response) => {
                worksData.push(response.data)
            }).catch((error) => {
                console.log(error)
                //TODO: display error correctly
            })
        }
        return worksData
    },
    getLocalProjectInfoByID(id: number){
        for (const localProject of MyWorksUtils.localProjectInfo) {
            if (localProject.id === id) return localProject
        }
        console.warn(`No Project with the id "${id}" in Local Project Info`)
    },

    // @ts-ignore
    getAvatar(work) {
        return work.visibility === "public" && work.avatar_url
            ?
            work.avatar_url
            :
            // @ts-ignore
            MyWorksUtils.getLocalProjectInfoByID(work.id).avatar_url
                ?
                // @ts-ignore
            MyWorksUtils.getLocalProjectInfoByID(work.id).avatar_url
                :
                require("@/assets/miscellaneous/no-logo-yet.png")
    }
}