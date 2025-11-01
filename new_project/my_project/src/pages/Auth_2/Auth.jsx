import { useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "../../api";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
export const Auth = () => {
  // todo - реализовать форму таким образом, что если пользователь зарегистрирован
  // то есть он имеет токен в локалсторадже, то мы отображаем для него страницу авторизации, а не регистрации, 
  // при попытке зайти на адрес /auth
  // если токена нет, то мы рисуем форму для регистрации
  // требования для страницы авторизации согласно документации
  // https://mokky.gitbook.io/welcome/dop.-nastroiki/autentifikaciya/primer-koda#avtorizaciya
  // при этом мы обращаем внимание на ответ и обновляем наш токен, который храниться в локалсторадже

  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // todo - либо модернизировать функцию, либо написать новую. которая ходила бы с данными на адрес авторизации
  const fetchRegistration = async (data) => {
    try {
      const response = await instance.post("register", data);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    fetchRegistration(data);
  };

  const { name, onBlur, onChange, ref } = register("fullName", {
    required: "Поле Логин обязательно",
  });
  console.log("errors", errors);
  return (
    <div style={{ maxWidth: "300px" }}>
      {errors?.login && (
        <p style={{ color: "red" }}>{errors?.login?.message}</p>
      )}
      {/* todo - изменить название для формы когда авторизация, а когда регистрация */}
      {/* посмотреть по документации, какие поля требуются для формы авториизации, а какие для регистрации */}
      <h3>Авторизация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя</label>
          <input
            id="fullName"
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
          />
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} />
        </div>
        <div>
          <label>Пароль</label>
          <input {...register("password")} />
        </div>
        {/* пример условного рендеринга в теге <button> ниже
        
        если isAuth === true то отображаем кнопку "Авторизация", иначе "Регистрация"

        еще пример 
        
        isAuth && <p>этот текст отобразиться только если </p> isAuth === true
        
        */}
        <button type="submit">{isAuth ? "Авторизация" : "Регистрация"}</button>
      </form>
    </div>
  );
};
