import axios from "axios";

const api = axios.create({
    baseURL: "https://myvenue-server.onrender.com",
});


export default api;