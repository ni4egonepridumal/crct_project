import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../button/Button";
import "./styles.css";
export const Header = () => {
  const { isAuth } = useAuth();

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };
  return (
    <header className="header">
      <img src="/vite.svg" />
      {/* todo - вынести в отдельный компонент навигацию*/}
      <nav className="navigate">
        <ul className="navigate__ul">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          {/* todo - добавить еще один блок - Контакты*/}
          <li>
            {isAuth && <Button onCustomClick={handleLogout}>Выйти</Button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};
