import {defineStore} from 'pinia'
import axios from 'axios'


const backend_url = 'http://127.0.0.1:8000'



export const useUserStore = defineStore('user',{
    state: () =>({
        user: null,
        progress: null,
        token: null,
        loggedIn: false,
        redirect: false,
        userData: null,
        showComponent: null,

    }),
    actions:{
        async login(username:string, password:string){
            try {
                await axios.post(`${backend_url}/auth/token/login`,{
                    username: username,
                    password: password
                },{withCredentials:true})
                .then((res)=>{
                    this.token = res.data.auth_token 
                    this.getUser()
                    if(res.status === 200) {
                        this.redirect = true
                    }
                })
            } catch (error) {
                console.error(error)
            }


        },


        async signup(username:string, password:string, email:string){
    
            try {
                await axios.post(`${backend_url}/auth/users/`, {
                    email:email,
                    username: username,
                    password: password
                })
                .then(() =>{
                    this.login(username, password)
                })
            } catch (error) {
                console.error(error)
            }

        },

        async getUser(){
            try {
                await axios.get(`${backend_url}/users/me`, {
                    
                    headers: {
                        //@ts-ignore
                        "Authorization": `Token ${this.token}`
                    }}).then((res)=>{
                   
                    this.userData = res.data
                    this.loggedIn = true
                    console.log(this.loggedIn)
                   console.log(JSON.parse(JSON.stringify(this.userData)))   //parse and stringafy to get the data -
                })
            } catch (error) {
                console.error(error)
            }

        },
    
        async logoutUser(){
            try {
                console.log(this.token)
                await axios.post(`${backend_url}/auth/token/logout/`, this.token, {
                    
                    headers: {
                        //@ts-ignore
                        "Authorization": `Token ${this.token}`
                    }}).then((res)=>{
                        this.loggedIn = false
                        this.userData = null
                        console.log(res)
                        console.log("logout")  //parse and stringafy to get the data -
                })
            } catch (error) {
                console.error(error)
            }

        }

    },
    getters:{

    },

})