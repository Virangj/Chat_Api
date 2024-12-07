import {create} from 'zustand'
import { axiosInstance } from '../lib/axios.js'

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIng: false,
    isUpdateProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")
            console.log(res)
            set({authUser: res.data})
        } catch (error) {
            console.log("Error in CheckAuth: ", error.message)
            set({authUser: null})
        }
        finally{
            set({isCheckingAuth: false})
        }
    }
}))