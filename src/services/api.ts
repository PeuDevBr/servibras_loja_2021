import axios from "axios";

export const api = axios.create({
  baseURL: 'https://servibras.vercel.app/api'
  //baseURL: 'http://localhost:3000/api'
  //baseURL: 'https://servibras.vercel.app/api'
  
})