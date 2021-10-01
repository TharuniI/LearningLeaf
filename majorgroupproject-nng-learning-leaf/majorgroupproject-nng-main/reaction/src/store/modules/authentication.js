import firebase from 'firebase';
import router from '../../router/index'

const state = {
    uid: null,
    userInfo: {
        email: null,
        name: null,
        picture: null
    },
    authError: null,
    isAuthenticated: false
}

const getters = {
    userId: (state) => (state.uid),
    userInformation: (state) => (state.userInfo),
    authError: (state) => (state.authError),
}

const actions = {

    async resetPassword(context,payload){
        try {
            await firebase.auth().sendPasswordResetEmail(payload.email)
            router.push('/login')
        } catch (error) {
            context.commit('setAuthDetails',null)
            context.commit('addAuthError',error.message)
        }
        
    },
}

const mutations = {
    clearAuthDetails(state){
        state.authError = null
        state.isAuthenticated = false
        state.uid = null
        let profileData = {
            email: null,
            name: null,
            picture: null
        }
        state.userInfo = profileData

    },
    setAuthDetails(state, user) {
        state.authError = null
        state.isAuthenticated = true
        state.uid = user.uid
        let profileData = {
            email: user.email,
            name: user.displayName,
            picture: user.photoURL
        }
        state.userInfo = profileData
    },
    addAuthError(state, error) {
        state.isAuthenticated = false;
        state.authError=error
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}