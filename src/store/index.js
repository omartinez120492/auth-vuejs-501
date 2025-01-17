
import { defineStore } from 'pinia';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase'

export const useUserStore = defineStore('userState', {

    state: () => ({ user: null, uid: null, error: null }),

    getters: {
        isActiveUser: (state) => ((state.user && state.uid) ? true : false)
    },

    actions: {
        async loginUser(email, passwor) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, passwor);
                this.user = userCredential.user;
                this.uid = userCredential.user.uid;
                return {
                    email: this.user.email,
                    uid: this.uid
                }
            } catch (error) {
                switch (error.code) {
                    case 'auth/invalid-credential':
                        this.error = 'Email o Password Incorrectos'   
                    break;
                
                    default:
                        break;
                }
            }
            return;
        },

        async logoutUser( ) {
            try {
                await signOut(auth);
                this.user = null;
                this.uid = null;
                return {
                    email: null
                }
            } catch (error) {
                
            }
            return;
        }
    }
});