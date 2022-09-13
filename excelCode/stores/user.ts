import {defineStore} from 'pinia'
import axios from 'axios'

const backend_url = 'http://127.0.0.1:8000'



export const useUserStore = defineStore('user',{
    state: () =>({
        user: null,
        progress: null,
        token: null,
        
    }),
    actions:{
        async login(username:string, password:string){
            await axios.post(`${backend_url}/auth/token/login`,{
                username: username,
                password: password
            },{withCredentials:true})
            .then((res)=>{
                console.log(res.data)
                this.token = res.data 
                this.getUser()
                
            })

        },


        async signup(username:string, password:string, email:string){
            await axios.post(`${backend_url}/auth/users`, {
                email:email,
                username: username,
                password: password
            })
            .then(() =>{
                this.login(username, password)
            })
        },

        async getUser(){
            await axios.get(`${backend_url}/users/me`, {
                headers: {
                    //@ts-ignore
                    "Authorization": `Token ${this.token}`
                }}).then((res)=>{
                console.log(res.data)
            })
        }

    },
    getters:{

    },

})