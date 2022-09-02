import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    //配置路由规则:即设置路径对应的组件
    routes: [{
        path: "/",
        component: () =>
            import ("./components/skills")
    }, {
        path: "/experience",
        component: () =>
            import ("./components/experience")
    }, {
        path: "/hobbies",
        component: () =>
            import ("./components/hobbies")
    }, {
        path: "/phone",
        component: () =>
            import ("./components/phone")
    }]
})