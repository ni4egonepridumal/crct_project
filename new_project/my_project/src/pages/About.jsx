import { CustomInput } from "../components/input/Input";
import { Button } from "../components/button/Button";
export const About = () => {
  const handleClick = () => {
    console.log("Клик_1");
  };
  return (
    <>
      <div>О нас</div>
      <div>Какойто текст</div>
      <Button className="button_1" type="button" onCustomClick={handleClick}>
        Кнопка_1
      </Button>
      <Button type="submit" onCustomClick={() => console.log("Клик_2")}>
        Кнопка_2
      </Button>
      <CustomInput />
    </>
  );
};
