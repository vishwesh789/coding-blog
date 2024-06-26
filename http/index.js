import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

export const fetchCategories = async (query) => await api.get(`/api/categories?${query}`);



export const fetchPython = async (query) => await api.get(`/api/pythons?${query}`);

export const fetchReact = async (query) => await api.get(`/api/reactsjs?${query}`);
export const fetchNodeJs = async (query) => await api.get(`/api/node-js?${query}`);










