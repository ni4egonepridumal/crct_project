import { Header } from "../components/header/Header";
import { useNavigate } from "react-router";
import { instanceWithToken, instance } from "../api/index";
export const Home = () => {
  const navigate = useNavigate();
  const getFetchBooks = async () => {
    try {
      const response = await instance.get("product/1");
      console.log("response", response.data);
    } catch (error) {
      console.log("Ошибка запроса", error);
    }
  };

  const oneBook = {
    title: "Unlocking Android",
    isbn: "1933988673",
    pageCount: 416,
    authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
  };
  const postBooks = async () => {
    try {
      await instance.post("books", oneBook);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getFetchMovies = async () => {
    const response = await instanceWithToken.get("movies");
    console.log("response", response.data);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/auth");
  };

  const getAuthUser = async () => {
    try {
      const response = await instanceWithToken.get("auth_me");
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      Домашняя
      <button onClick={getFetchBooks}>Сделать запрос книг</button>
      <button onClick={getFetchMovies}>Сделать запрос фильмов</button>
      <button onClick={postBooks}>Отправить книгу</button>
      <button onClick={logOut}>выйти</button>
      <button onClick={getAuthUser}>
        Получить авторизованного пользователя
      </button>
    </div>
  );
};
