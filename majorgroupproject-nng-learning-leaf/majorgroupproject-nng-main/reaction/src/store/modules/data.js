import firebase from 'firebase';
import { root } from 'postcss';
import router from '../../router/index'
import {sendLectureEmail} from "../../components/firebaseInit"


const state = {
    courses: [],
    lectures: [],
    classReviewData: [],
    error: null,
    lectureName:null,
    courseName:null
}

const getters = {
    courses: (state) => (state.courses),
    getLectures: (state) => (state.lectures),
    getClassReviewData: (state) => (state.classReviewData),
    getError: (state) => (state.error),
    getLectureName: (state) => (state.lectureName),
    getCourseName: (state) => (state.courseName),
}

const actions = {
    getRatings({ commit, rootGetters },lecId){
        try {
            let db = firebase.firestore()
            var docRef = db.collection("Lectures").doc(`${lecId}`);
            docRef.get().then((doc) => {
                commit("setLectureName",doc.data().name)
                    //console.log(doc.data())
                    //get present information about the user already in the database
                    doc.ref.collection("ratings").get().then(async (result) => {
                        if (result.empty) {
                            console.log("it is empty")
                            commit("setRatings", [])

                        } else {
                            var ratingList = []
                            result.forEach(async (rating) => {
                                let ratingDataObj = {
                                    refId: rating.id,
                                    ratingInfo: rating.data()
                                }
                                ratingList.push(ratingDataObj)
                            })
                            //console.log(lectureList)
                            commit("setRatings", ratingList)
                        }
                    }).catch((error) => {
                        console.log(error)
                        commit("addError", error.message)
                    })
            }).catch((error) => {
                console.log("Error getting document:", error);
                commit("addError", error.message)
            });
        } catch (error) {
            commit("addError", error.message)
        }

    },



     
    async addCourse({ commit, rootGetters }, payload) {
        //name and course code
        let uid = rootGetters.userId

        let db = firebase.firestore()
        let batch = db.batch();
        let newCourseRef = db.collection("courses").doc();
        batch.set(newCourseRef, payload);
        let userCourseRef = db.collection("users").doc(`${uid}`).collection("courses").doc()
        batch.set(userCourseRef, {
            courseRef: newCourseRef,
        })
        batch.commit().then((result) => {
            console.log("course added successfully to cloud")
            let courseData = {
                refId: newCourseRef.id,
                courseInfo: payload
            }
            commit('addCourse', courseData)
        }).catch(error => {
            console.log("course NOT added successfully")
            commit("addError", error.message)
        })
    },
    async addLecture({ commit, rootGetters }, {payload,courseId}) {

        let db = firebase.firestore()
        let batch = db.batch();
        let newClassRef = db.collection("Lectures").doc();
        batch.set(newClassRef, payload);
        let courseClassRef = db.collection("courses").doc(`${courseId}`).collection("Lectures").doc()
        batch.set(courseClassRef, {
            lectureRef: newClassRef,
        })
        batch.commit().then((result) => {
            console.log("class added successfully to cloud")
            let classData = {
                refId: newClassRef.id,
                lectureInfo: payload
            }
            sendLectureEmail({
                email:rootGetters.userInformation.email,
                name:rootGetters.userInformation.name,
                lecName: payload.name,
                code: newClassRef.id
            })
            commit('addClass', classData)
        }).catch(error => {
            console.log("class NOT added successfully")
            commit("addError", error.message)
        })
    },
    async getCourses({ commit, rootGetters }) {
        try {
            let uid= rootGetters.userId
            console.log(uid)
            let db = firebase.firestore()
            var docRef = db.collection("users").doc(`${uid}`);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    //console.log(doc.data())
                    //get present information about the user already in the database
    
                    doc.ref.collection("courses").get().then(async (result) => {
                        if (result.empty) {
                            console.log("it is empty")
                            commit("setCourses", [])

                        } else {
                            var courseList = []
                            result.forEach(async (course) => {
                                let courseData = await course.data().courseRef.get()

                                let courseDataObj = {
                                    refId: courseData.id,
                                    courseInfo: courseData.data()
                                }
                                courseList.push(courseDataObj)
                            })
                           commit("setCourses", courseList)
                        }
                    }).catch((error) => {
                        console.log(error)
                        commit("addError", error.message)
                    })
                } else {
                    //make a database entry for the new user
                    db.collection("users").doc(`${uid}`).set({
                        name: rootGetters.userInformation.name
                    }).then(() => {
                        console.log("New User added");
                    }).catch((error) => {
                        console.error("Error writing document: ", error);
                        commit("addError", error.message)
                    });
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
                commit("addError", error.message)
            });
        } catch (error) {
            commit("addError", error.message)
        }
    },
    async getLectures({ commit, rootGetters }, courseId) {
        try {

            let db = firebase.firestore()
            var docRef = db.collection("courses").doc(`${courseId}`);
            docRef.get().then((doc) => {
                commit("setCourseName",doc.data().name)
                    //console.log(doc.data())
                    //get present information about the user already in the database
                    doc.ref.collection("Lectures").get().then(async (result) => {
                        if (result.empty) {
                            console.log("it is empty")
                            commit("setLectures", [])

                        } else {
                            var lectureList = []
                            result.forEach(async (lecture) => {
                                let lectureData = await lecture.data().lectureRef.get()
                                let lectureDataObj = {
                                    refId: lectureData.id,
                                    lectureInfo: lectureData.data()
                                }
                                lectureList.push(lectureDataObj)
                            })
                            //console.log(lectureList)
                            commit("setLectures", lectureList)
                        }
                    }).catch((error) => {
                        console.log(error)
                        commit("addError", error.message)
                    })
            }).catch((error) => {
                console.log("Error getting document:", error);
                commit("addError", error.message)
            });
        } catch (error) {
            commit("addError", error.message)
        }
    }
}

const mutations = {
    addError(state, error) {
        state.error=error
    },
    setCourses(state, courses) {
        state.courses = courses
        console.log(`this is the new state: ${typeof courses}`)
    },
    setRatings(state, ratings) {
        state.classReviewData = ratings
    },
    addCourse(state, course) {
        state.courses.push(course)
        console.log("added course to store successfully")
    },
    addClass(state, classInfo) {
        state.lectures.push(classInfo)
        console.log("added class to store successfully")
    },
    setLectures(state, lectureInfo) {
        state.lectures=lectureInfo
    },
    clearData(state){
        state.courses=[]
        state.lectures=[]
        state.classReviewData=[]
        state.error=null
        state.lectureName=null
        state.courseName=null
    },
    setLectureName(state,name){
        state.lectureName=name
    },
    setCourseName(state,name){
        state.courseName=name

    }
}

export default {
    state,
    getters,
    actions,
    mutations
}