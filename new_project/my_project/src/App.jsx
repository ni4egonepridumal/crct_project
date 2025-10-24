import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/header/Header";
import { useNavigate } from "react-router";
function App() {
  const navigate = useNavigate();


  const isAuth = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (isAuth === false) {
      navigate("/auth");
    }
  }, [isAuth, navigate]);

  if (isAuth === false) {
    return <p>Загрузка</p>;
  }
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
