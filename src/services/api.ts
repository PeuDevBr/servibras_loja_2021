import axios from "axios";

export const api = axios.create({
  baseURL: 'https://servibras.vercel.app/api'
})