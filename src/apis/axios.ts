import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://kdt-frontend.programmers.co.kr",
  timeout: 3000,
  headers: { "x-username": "doggopawer" },
});

export default axios;
