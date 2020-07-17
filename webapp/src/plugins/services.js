import axios from 'axios'

//Base HomeBud API connection
export const api = axios.create({
    baseURL: 'http://localhost:3000/'
})