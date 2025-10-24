import { Header } from "../components/header/Header";
import { instance } from "../api/index";
export const Home = () => {
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
    const response = await instance.get("movies");
    console.log("response", response.data);
  };
  return (
    <div>
      Домашняя
      <button onClick={getFetchBooks}>Сделать запрос книг</button>
      <button onClick={getFetchMovies}>Сделать запрос фильмов</button>
      <button onClick={postBooks}>Отправить книгу</button>
    </div>
  );
};
