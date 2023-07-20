import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://ebazar.cyclic.app/api",
});

export default apiClient;
