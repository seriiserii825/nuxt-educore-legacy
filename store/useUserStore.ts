import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {TUser} from '~/types/TUser'
export const useUserStore = defineStore('user', () => {
    const user = ref<TUser>();
    return {
        user,
        setUser(newUser: TUser) {
            user.value = newUser;
        }
    }
})
