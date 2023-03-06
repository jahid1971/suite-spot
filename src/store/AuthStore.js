import { defineStore } from 'pinia'
import { onUnmounted, watch } from 'vue'
import app from '../firebase/firebase.config'
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,
    onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth"


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()



const UseAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        authLoading: true,
        test: 'Pina',

    }),
    getters: {
        loading: (state) => state.authLoading,
        user: state => {
            console.log("gettersssssssssssssssssss", state.authUser)
            return state.authUser
        },
    },

    actions: {

        //1. createUser
        createUser(email, password) {
            this.authLoading = true
            return createUserWithEmailAndPassword(auth, email, password)
        },

        //   2. Update Name ,photo
        updateUserProfile(name, photo) {
            this.authLoading = true
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            })

        },


        //3. email verify
        verifyEmail() {
            this.authLoading = true
            return sendEmailVerification(auth.currentUser)
        },

        //4. google sign in 

        signInWithGoogle() {
            this.authLoading = true
            return signInWithPopup(auth, googleProvider)
        },
        // sign in with email 

        signin(email, password) {
            this.authLoading = true
            return signInWithEmailAndPassword(auth, email, password)
        },

        // reset password

        resetPassword(email) {
             this.authLoading = true
            return sendPasswordResetEmail(auth, email)
        },

        //log out
        logout() {
            this.authLoading = true
            // localStorage.removeItem('aircnc-token')
            return signOut(auth)
        },



        initialize() {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                this.authUser = currentUser
                console.log("auth observed", this.authUser)
                this.authLoading = false
            })

            return () => {
                //this part will execute once the component is unmounted.
                unsubscribe()
            }
        }


    },

})

export default UseAuthStore;