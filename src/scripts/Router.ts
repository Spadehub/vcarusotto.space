// Define route components.
import {Router} from "vue-router";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import HomePage from "@/components/HomePage.vue"
import AboutMe from "@/components/AboutMe.vue"
import MyWorks from "@/components/MyWorks.vue"
import WorkComp from "@/components/WorkComp.vue"
import NotFound from "@/components/NotFound.vue"
import AdminPage from "@/components/AdminPage.vue"

// Define routes
const routes = [
    {
        name: "HomePage",
        path: '/home',
        alias: "/",
        component: HomePage
    },
    {
        name: "AboutMe",
        path: "/about-me",
        alias: "/me",
        component: AboutMe
    },
    {
        name: "MyWorks",
        path: "/my-works",
        alias: "/works",
        component: MyWorks
    },
    {
        name: "Work",
        path: "/work/:work_id",
        alias: "/project/:work_id",
        component: WorkComp,
    },
    {
        name: "notFound",
        path: "/:pathMatch(.*)*",
        component: NotFound
    },
    {
        name: "AdminPage",
        path: "/admin",
        component: AdminPage
    }
]

// Create the router instance and pass the `routes` option
const router: Router = createRouter({
    // Provide the history implementation to use.
    history: createWebHistory(),
    routes, // short for `routes: routes`
    linkActiveClass: 'navbarActiveClass',
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})
export default router

export function getRoute(routeName: string){
    for (const route of routes) {
        if (route.name == routeName) {
            return route
        }
    }
        throw `No such route: ${routeName}`
}

export function routeTo(destination: string, parameters?: undefined) {
    const destinationRoute = getRoute(destination)
    if (destinationRoute) {
        if (parameters) {
            router.push({name: destinationRoute.name, params: {title: 'test'}})
                .catch(err => console.error(err))
        } else {
            router.push({path: destinationRoute.path})
                .catch(err => console.error(err))
        }
    }
}

declare module 'vue-router' {
    interface RouteMeta {
        gradientPercentage?: string
    }
}