import { defineStore } from "pinia";
import axios from "axios";

const backend_url = 'http://127.0.0.1:8000'

interface progress{
    course_name: string
    course_prog: number

}

interface student{
    name: string
    progress: progress[]

}

interface classroom{
    name: string
    code: string
    student: student[]

}

interface teacher{
    name: string
    classroom: classroom[]

}

export const useUserInfoStore = defineStore('userInfo',{
    state: (): teacher =>({
        name: null,
        classroom:[]

    }),

    actions:{

    },

    getters:{

    }

})