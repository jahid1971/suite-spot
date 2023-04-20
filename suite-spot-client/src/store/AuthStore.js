import { defineStore } from 'pinia'
import { onUnmounted, watch } from 'vue'
import app from '../firebase/firebase.config'
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,
    onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth"
import { getRole } from '../api/User'


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()



const UseAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        authLoading: true,
        test: 'Pina',
        role: null,
        routeLoader: false,
        roleLoader: true,
        toggleInSidebar:false

    }),
    getters: {
        loading: (state) => state.authLoading,
        _role: (state) => state.role,
        _routeLoader: (state) => state.routeLoader,
        user: state => {
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

        // const authenticated = 
        // await new Promise(resolve => {
        //   auth.onAuthStateChanged(user => {
        //     resolve(user)
        //   })
        // })


        // get User role function 
        getUserRole(userEmail) {
            return getRole(userEmail)
                .then((data) => {
                    this.role = data
                    this.roleLoader = false
                    console.log("get roleloader role  inside store ", this.roleLoader, this.role)
                    return data
                }).catch(err => console.log(err, 'getRole error'))
        },



        async authenticated() {
            if (!this.authLoading) return this.authUser

            if (this.authLoading) {
                console.log("authenticated(): returning  user", this.authUser);
                const user = await new Promise(resolve => {
                    auth.onAuthStateChanged(user => {
                        resolve(user)
                    })
                })
                return user
            }
        },





        adminAccess() {
            if (!this.roleLoader) {
                console.log('inside adminaccess if', this.role);
                return this.role
            }
            else if (this.roleLoader && !this.authLoading)

            {
                console.log('inside adminaccess else if', this.role);
                return this.getUserRole(this.authUser?.email)
            }

        },


        initialize() {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                this.authUser = currentUser
                this.authLoading = false
                console.log(this.authLoading, "onAuthstatechange made loadinnnnnggg false")
                this.getUserRole(currentUser?.email)  // getting user role
            })

            return () => {
                //this part will execute once the component is unmounted.
                unsubscribe()
            }
        },







    },

})

export default UseAuthStore;

