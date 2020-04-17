import progressBar from './progressBar/progressBar'
import loading from './loading/loading'
import alert from './alert/alert'

const components = {
    install(Vue){
        Vue.component('progressBar',progressBar);
        Vue.component('loading',loading);
        Vue.component('alert',alert);
    }
}

if(typeof window !== undefined && window.Vue){
    window.Vue.use(components)
}

export default components;