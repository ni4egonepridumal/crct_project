import { createPortal } from "react-dom";
import { useGetCharacter } from "../../hooks/useGetOneCharacter";
import "./styles.css";

export function Portal({ id, setOpenPortal }) {
  const { character, errorGetCharacter, loadingCharacter } =
    useGetCharacter(id);

  return createPortal(
    <div
      className="portal"
      // функция обработчик клика вне контента
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpenPortal(false);
      }}
    >
      <div
        style={{
          width: "400px",
          height: "500px",
          backgroundColor: "black",
          border: "2px solid white",
          borderRadius: "12px",
          position: "relative",
        }}
      >
        <span
          style={{
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            backgroundColor: "red",
            textAlign: "center",
            position: "absolute",
            top: "-10px",
            right: "-10px",
          }}
          onClick={() => setOpenPortal(false)}
        >
          X
        </span>
        Контент тут
      </div>
    </div>,
    document.body
  );
}
