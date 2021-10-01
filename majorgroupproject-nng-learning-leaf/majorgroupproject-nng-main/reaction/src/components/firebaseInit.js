import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
import router from '../router/index'
import store from '../store/index'

const firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseObj=firebaseApp.firestore()
let cloudObj = firebaseApp.functions()


async function signOut() {

    await firebase.auth().signOut()
    store.commit("clearData")
    return "done it"
}
function addLectureRating(lectureId,payload){
    let db = firebase.firestore()
    db.collection("Lectures").doc(`${lectureId}`).collection("ratings").doc().set({
        ...payload
    }).then(()=>{
        console.log("Rating is sent to cloud successfully")
    })
}
async function doesLectureExist(lecId){
    let db = firebase.firestore()

    var docRef = db.collection("Lectures").doc(lecId);
    let doc=await docRef.get()
    if(doc.exists){
        return true
    }else{
        return false
    }
}
function authenticateUser(payload){
    switch (payload.authType) {
        case 'signInEmailPass':
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    router.push("/Dashboard")
                })
                .catch((error) => {
                    var errorCode = error.code;
                    alert("LOGIN ERROR: " + error.message)
                    store.commit("addAuthError",error.message)
                });
            break;
        case 'signInGoogle':
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then((userCredential) => {
                    var user = userCredential.user;
                    router.push("/Dashboard")
                })
                .catch((error) => {
                    var errorCode = error.code;
                    alert("LOGIN ERROR: " + error.message)
                    store.commit("addAuthError",error.message)
                });

            break;
        case 'signUpEmailPass':
            console.log("this is the signup object")
            console.log(payload)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    user.updateProfile({
                        displayName: payload.name,
                      }).then(function() {
                        user.sendEmailVerification().then(function () {
                            console.log("Email sent")
                            signOut().then(result=>{
                                console.log(result)
                                router.push("/EmailSent")
                            })
                        })
                      }).catch(function(error) {
                        alert(error);
                        console.log("EMAIL SENT ERROR: " + error.message)
                        store.commit("addAuthError",error.message)
                        
                      });
    
                })
                .catch((error) => {
                    var errorCode = error.code;
                    console.log("LOGIN ERROR: " + error.message)
                    store.commit("addAuthError",error.message)
                });
            
            break;
        default:

            break;
    }
}
function sendLectureEmail(obj){
    const sendNotification = cloudObj.httpsCallable("sendNotifEmail");
    sendNotification({email:obj.email,name:obj.name,lecName:obj.lecName,code:obj.code}).then(
       
    );
}

export {firebaseObj as default, authenticateUser, signOut,addLectureRating,doesLectureExist,cloudObj,sendLectureEmail}