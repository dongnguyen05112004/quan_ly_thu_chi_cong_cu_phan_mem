import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    
   {
    path: "/chu",
    component: () => import("../components/admin/trangchu.vue"),
   },
   {
    path: "/thongke",
    component: () => import("../components/thongke/index.vue"),
   },
   {
    path: "/ngansach",
    component: () => import("../components/ngansach/index.vue"),
   },

    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router