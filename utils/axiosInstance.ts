import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8888/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to set the token dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    if (process.client) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosInstance };
