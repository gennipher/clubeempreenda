import axios from "axios";

const userToken = localStorage.getItem("userToken");

const api = axios.create({
  baseURL: "http:localhost:8080",
  mode: "no-cors",
  headers: {
    authorization: process.env.REACT_APP_SECRET_FRONT,
    "content-type": "application/json",
  },
});

export default api;
