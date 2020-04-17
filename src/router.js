import Vue from 'vue'
import VueRouter from 'vue-router'
import aa from './views/index'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[{
        path:'/index',
        component:aa
    }]
})