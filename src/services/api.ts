import axios from 'axios'

// http://vps1490.publiccloud.com.br:5215/
// http://localhost:3000/api

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})