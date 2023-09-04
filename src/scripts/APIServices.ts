import GitlabAPI from "@/scripts/GitlabAPI";

export default {
    fetchProjectByID(id: number){
        return GitlabAPI().get(`api/v4/projects/${id}`)
    },
    fetchImage(url: string){
        return GitlabAPI("").get(url)
    }
}