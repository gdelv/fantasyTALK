import Axios from 'axios'

const BASE_URL = `http://5dced5bf75f9360014c26451.mockapi.io/`

export const api = Axios.create({
    baseURL: BASE_URL,  
})