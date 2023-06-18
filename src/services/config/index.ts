import { Auth } from "@/utils/auth.util";
import axios from "axios";

const api = axios.create({
  baseURL: "api" /* Colocar base url da api aqui */,
});

api.interceptors.request.use(
  (request) => {
    request.headers!.Authorization = Auth.getToken();
    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(
      "Error handler here"
    ); /* Colocar Uma função de tratamento de erros aqui */
    return Promise.reject(error);
  }
);

export default api;
