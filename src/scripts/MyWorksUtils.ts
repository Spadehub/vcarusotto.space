import MyWorksUtils from "@/scripts/MyWorksUtils";
import APIServices from "@/scripts/APIServices";

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
            creatorsComment: "Flash is my biggest and latest Project (as for now: 10.01.2023). I've learned a lot more from this one than any previously done Project. We used Vue.js for the Front-End and Django for the Back-End. I was predominantly focused on the Front-End and thereby I learned how to use Frameworks in general work and, of course, specifically Vue.js. I liked the Framework a lot, so I decided to my build my Portfolio-Website with it"
        },
        {
            id: 7803,
            avatar_url: "",
            bgImg: require("@/assets/project-images/locawiki_proto_light.png"),
            platforms: ['Android'],
            madeWith: ['Android Studio (Java)'],
            isWIP: false,
            creatorsComment: "This was my first attempt at creating a Mobile App and the first time working with Android Studio. I didn't have much trouble since it's based on Jetbrains' IDEs and I've had already worked with IntelliJ and WebStorm before. It's nothing more than what Google is able to do, but hey, it works as intended."
        },
        {
            id: 8596,
            avatar_url: "",
            bgImg: require("@/assets/project-images/momhunt-screenshots.png"),
            platforms: ['Android', 'iOS'],
            madeWith: ['Unity (C#)'],
            isWIP: true,
            creatorsComment: "I got the idea while being on the phone with my mom. This was my first approach to Unity and I could learn the basics of the Unity Environment as well as the C Sharp Programming Language. I also found out that I don't enjoy developing games as much as I enjoy doing the same with Mobile and Web Apps. Still, I liked the idea and hey, I now have a self-coded game that I can play. :)"
        },
        {
            id: 8718,
            avatar_url: "",
            bgImg: require("@/assets/project-images/PREVIEW_weather_forecast.gif"),
            platforms: ['Anywhere Java Runs'],
            madeWith: ['Java'],
            isWIP: false,
            creatorsComment: "This was my first Software Development Project I made at my University. I already knew Java, so my partner and I decided to choose this Project as we considered it to be the most difficult one. I could learn the basics of API implementations and other Java stuff that will be useful to me in the future."
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