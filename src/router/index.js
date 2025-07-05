import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    
   {
    path: "/home",
    component: () => import("../components/admin/trangchu.vue"),
   },
   {
    path: "/profile",
    component: () => import("../components/Khach_Hang/profile.vue"),
   },
   

    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router