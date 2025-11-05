import "./styles.css";
import { useGetCharacters } from "../../hooks/useGetCharacters";
import { Button } from "../../components/button/Button";
import { Portal } from "../../components/portal/Portal";
import { useState } from "react";
import fallbackImage from "../../assets/19.jpeg";
export const Home = () => {
  const { characters, errorGetCharacters, loadingCharacters } =
    useGetCharacters();
  const [openPortal, setOpenPortal] = useState(false);
  const [characterId, setCharacterId] = useState(null);

  const getCharacterId = (characterId) => {
    setCharacterId(characterId);
    setOpenPortal(true);
  };
  return (
    <div>
      {loadingCharacters && <h2>Загрузка</h2>}
      {errorGetCharacters && (
        <h2 style={{ color: "red" }}>Не удалось получить данные !</h2>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {characters &&
          characters.map((character) => (
            <div
              style={{
                border: "2px solid white",
                borderRadius: "12px",
                maxWidth: "250px",
              }}
              key={character.id}
            >
              <p style={{ marginLeft: "10px" }}>{character.name}</p>
              <img
                src={character.image}
                style={{ width: "250px", height: "300px" }}
                onError={(e) => {
                  const target = e.target;
                  target.src = fallbackImage; // подставляем локальную картинку если не загрузилась основная
                }}
                alt={character.name} // выводим описание для картинки если она битая
              />
              <Button
                onCustomClick={() => getCharacterId(character.id)}
                className="button"
                type="button"
              >
                Подробнее
              </Button>
            </div>
          ))}
      </div>
      {openPortal && <Portal id={characterId} setOpenPortal={setOpenPortal} />}
    </div>
  );
};
