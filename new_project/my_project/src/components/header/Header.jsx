import { Link } from "react-router";
import "./styles.css";
export const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};
