import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ebazar.cyclic.app/api",
});

export default apiClient;
