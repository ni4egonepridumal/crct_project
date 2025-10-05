import "./App.css";
import { Button } from "./components/button/Button";

function App() {
  const handleClick = () => {
    console.log("Клик_1");
  };
  return (
    <>
      <div>Какойто текст</div>
      <Button className="button_1" type="button" onCustomClick={handleClick}>
        Кнопка_1
      </Button>
      <Button type="submit" onCustomClick={() => console.log("Клик_2")}>
        Кнопка_2
      </Button>
    </>
  );
}

export default App;
