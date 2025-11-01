import axios from "axios";

export const instance = axios.create({
  baseURL: "https://e64f0e9717dab0cc.mokky.dev/",
});

export const instanceWithToken = axios.create({
  baseURL: "https://e64f0e9717dab0cc.mokky.dev/",
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  },
});

// ниже пример перехватчика из библиотеки axios
// https://axios-http.com/ru/docs/interceptors

// instance.interceptors.request.use(
//   (config) => {
//     // получаем токен
//     const token = JSON.parse(localStorage.getItem("token"));
//     if (token) {
//       // и передаем его в заголовок
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     // возвращаем измененный конфиг
//     return config;
//   },
//   (error) => {
//     // если произошла ошибка, возвращаем Promise.reject с ошибкой
//     // чтобы перехватчик мог обработать эту ошибку
//     return Promise.reject(error);
//   }
// );
