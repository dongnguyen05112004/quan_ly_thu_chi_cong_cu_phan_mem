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
   
      {
    path: "/thunhap",
    component: () => import("../components/thunhap/thunhap.vue"),
   },
      {
    path: "/dang-nhap",
    component: () => import("../components/Khach_Hang/dang_nhap.vue"),
    meta : { layout: "blank" },
   },
   {
    path: "/dang-ky",
    component: () => import("../components/Khach_Hang/dang_ky.vue"),
    meta : { layout: "blank" },
   },
    {
    path: "/thongke",
    component: () => import("../components/thongke/index.vue"),
    
   },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router