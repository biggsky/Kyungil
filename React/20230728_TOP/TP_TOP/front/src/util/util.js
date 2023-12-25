import axios from "axios";

const ipUrl = axios.create({
  baseURL: "http://localhost:8080", // 로컬
  // baseURL: "https://www.hyunss.com/api", // aws
  withCredentials: true,
});
export { ipUrl };
