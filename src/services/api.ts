import axios from "axios";

export const api = axios.create({
  baseURL: 'http://servibras.vercel.app/api'
})