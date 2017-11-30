import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter);

//引入组件 tab栏相关的组件
import HomeContainer from "../components/tabcontainers/HomeContainer.vue"
import CartContainer from "../components/tabcontainers/CartContainer.vue"
import MemberContainer from "../components/tabcontainers/MemberContainer.vue"
import SearchContainer from "../components/tabcontainers/SearchContainer.vue"

//引入新闻插件

import comList from "../components/common/comList.vue"
import comInfo from "../components/common/comInfo.vue"


export default new VueRouter({
    routes: [{
            path: "/home",
            component: HomeContainer
        },
        {
            path: "/cart",
            component: CartContainer
        },
        {
            path: "/member",
            component: MemberContainer
        },
        {
            path: "/search",
            component: SearchContainer
        },
        {
            path: "/",
            redirect: "home"
        },
        {
            path: "/home/comList",
            component: comList
        },
        {
            path: "/home/comInfo/:id",
            component: comInfo
        }
    ]
});