import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.techxios.tk/",
  // baseURL: "http://127.0.0.1:8000/",
});

export default instance;
// 3.143.191.105
