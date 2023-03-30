import axios from "axios";

const userToken = localStorage.getItem("userToken");

const api = axios.create({
  baseURL: "http:localhost:5000",
  mode: "no-cors",
  headers: {
    authorization: process.env.REACT_APP_SECRET_FRONT,
    "content-type": "application/json",
  },
});

export default api;
