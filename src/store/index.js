
import { defineStore } from 'pinia'


export default useUserStore = defineStore('userState', {

    state: () => ({ user: null, uid: null }),

    getters: {
        isActiveUser: (state) => ( (state.user && state.uid) ? true : false )
    }

    

});