import Vue from "vue";


//引入根组件
import App from "./App.vue"

import router from "./routers/router.js"

//引入 MintUI插件
import MintUI from "mint-ui";

//引入css样式
import "mint-ui/lib/style.css"

//安装MintUI
Vue.use(MintUI);

//引入mui的样式文件
import "../src/lib/mui/css/mui.css";

//引入mui的扩展图标的扩展
import "../src/lib/mui/css/icons-extra.css"

var vm = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
})