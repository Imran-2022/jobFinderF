import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "http://localhost:3001",
    baseURL: import.meta.env.VITE_APP_PORT,
});

export default axiosInstance;
