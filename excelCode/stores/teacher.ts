import { defineStore } from "pinia";
import axios from "axios";

import {useUserStore} from '@/stores/user'

const backend_url = 'http://127.0.0.1:8000'


interface progress{
    course_name: string
    course_prog: number

}

interface student{
    name: string
    courses: progress[]

}

interface classroom{
    name: string
    code: string
    student: student[]

}

interface teacher{
    name: string
    classrooms: classroom[]

}
export const useUserInfoStore = defineStore('userInfo',{
    state: (): teacher =>({
        name: null,
        classrooms:[]
    }),

    actions:{
        async getClasses(){
            try{
                await axios.get(`${backend_url}/classroom/view`,{
                    headers:{
                         //@ts-ignore
                         "Authorization": `Token ${useUserStore().token}`
                        }}).then((res)=>{
                            console.log(res.data)

                    }) }catch(error){
                console.log(error)
            }
        } 

    },

    getters:{

    }

})