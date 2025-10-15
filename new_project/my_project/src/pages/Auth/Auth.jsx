import { useState } from "react";
export const Auth = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginValue.trim() || !passwordValue.trim()) {
      setErrors("Есть ошибки валидации");
      return;
    }
    console.log("loginValue", loginValue, "passwordValue", passwordValue);
    setLoginValue("");
    setPasswordValue("");
    setErrors("");
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <h3>Авторизация</h3>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Логин</label>
          <input
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
          />
        </div>
        <div>
          <label>Пароль</label>
          <input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
