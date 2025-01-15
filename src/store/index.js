
import { defineStore } from 'pinia';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase'

export const useUserStore = defineStore('userState', {

    state: () => ({ user: null, uid: null, error: null }),

    getters: {
        isActiveUser: (state) => ((state.user && state.uid) ? true : false)
    },

    actions: {
        async loginUser(email, passwor, router) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, passwor);
                this.user = userCredential.user;
                this.uid = userCredential.user.uid;
                await router.push('/');
            } catch (error) {
                console.log({ 'Code': error.code, 'message': error.message });
            }
            return;
        },

        async logoutUser( router ) {
            try {
                await signOut(auth);
                this.user = null;
                this.uid = null;
                await router.push('/login')
            } catch (error) {

            }
            return;
        }
    }
});