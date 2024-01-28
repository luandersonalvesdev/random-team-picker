import axios from 'axios'

const API_BASE_URL = import.meta.env.API_BASE_URL || 'http://localhost:3000'

const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {'Content-Type': 'application/json'},
})

export default instanceAxios;
