import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api"
      : "https://ebazar.cyclic.app/api",
});

export default apiClient;
