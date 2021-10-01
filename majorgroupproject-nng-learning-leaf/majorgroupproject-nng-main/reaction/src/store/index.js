import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/authentication';
import data from './modules/data'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        data,
        auth
    }
})