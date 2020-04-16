import progressBar from './progressBar/progressBar'
import loading from './loading/loading'

const components = {
    install(Vue){
        Vue.component('progressBar',progressBar);
        Vue.component('loading',loading);
    }
}

if(typeof window !== undefined && window.Vue){
    window.Vue.use(components)
}

export default components;