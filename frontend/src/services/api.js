import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const login = async (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

export const fetchBooks = async () => {
  return axios.get(`${API_URL}/books`);
};

export const addBook = async (bookData) => {
  return axios.post(`${API_URL}/books`, bookData);
};
