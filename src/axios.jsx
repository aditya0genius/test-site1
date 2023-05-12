import axios from "axios";

const api = axios.create({
    baseURL: "https://myvenue-386407.el.r.appspot.com/",
});


export default api;