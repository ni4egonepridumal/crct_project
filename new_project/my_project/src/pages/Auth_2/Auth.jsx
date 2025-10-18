import { useState } from "react";
import { useForm } from "react-hook-form";
export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data, "errors", errors);
  };
  //   const handleSubmit = (e) =>
  //     e.preventDefault();
  //   };
  const { name, onBlur, onChange, ref } = register("login", {
    required: "Поле Логин обязательно",
  });
  console.log("errors", errors);
  return (
    <div style={{ maxWidth: "300px" }}>
      {errors?.login && (
        <p style={{ color: "red" }}>{errors?.login?.message}</p>
      )}
      <h3>Авторизация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Логин</label>
          <input
            id="login"
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
          />
        </div>
        <div>
          <label>Пароль</label>
          <input {...register("password")} />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
